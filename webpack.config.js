/**
 * @param { import('webpack').Configuration } options
 */
module.exports = function(options) {
  options.module.rules[0].use[0].options.transpileOnly = false;
  return options
}
