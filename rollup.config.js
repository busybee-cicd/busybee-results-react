import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCase',
        globalModulePaths: [/node_modules/, /src\/global\/css/]
      }
    }),
    url(),
    resolve(),
    typescript(),
    commonjs()
  ]
}
