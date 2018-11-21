import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const input = './src/index.jsx';
const external = ['react', 'react-dom'];

export default {
  input,
  external: external.concat(Object.keys(pkg.dependencies), Object.keys(pkg.peerDependencies)),
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.css'],
    }),
    babel({
      presets: pkg.babel.presets,
      exclude: 'node_modules/**',
    }),
    postcss(),
    sizeSnapshot(),
    sourceMaps(),
  ],
}
