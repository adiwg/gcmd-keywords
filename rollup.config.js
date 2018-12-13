import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const activeConfigs = [{
  input: 'index.js',
  output: {
    file: 'dist/mdkeywords.umd.js',
    name: 'mdkeywords',
    exports: 'named',
    format: 'umd'
  },
  plugins: [commonjs(), json()]
}, {
  input: 'index.js',
  output: {
    file: 'dist/mdkeywords.es.js',
    name: 'mdkeywords',
    exports: 'named',
    format: 'esm'
  },
  plugins: [commonjs(), json()]
}]

const minifiedConfigs = activeConfigs.reduce(
  (minifiedConfigs, activeConfig) => {
    if (activeConfig.output.file.indexOf('dist') !== -1) {
      return minifiedConfigs.concat(
        Object.assign({}, activeConfig, {
          plugins: [terser(), ...activeConfig.plugins],
          output: {
            file: activeConfig.output.file.replace('js', 'min.js'),
            format: activeConfig.output.format,
            name: activeConfig.output.name,
            exports: activeConfig.output.exports
          }
        })
      )
    }
    return minifiedConfigs
  }, [])

// export default activeConfigs.concat(minifiedConfigs)
export default minifiedConfigs
