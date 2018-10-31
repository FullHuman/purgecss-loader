const Purgecss = require('purgecss')
const { getOptions } = require('loader-utils')

module.exports = function purgecssLoader (raw) {
  const options = Object.assign({}, { css: [{ raw }] }, getOptions(this))
  const [{ css }] = new Purgecss(options).purge()
  return css
}
