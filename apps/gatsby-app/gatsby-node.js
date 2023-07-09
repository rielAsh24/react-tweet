/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/pages/index.jsx"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.forEach((rule) => {
    rule.oneOf?.forEach((rule) => {
      rule.use?.forEach((plugin) => {
        if (
          plugin.loader.includes('/css-loader') ||
          plugin.loader.includes('/mini-css-extract-plugin')
        ) {
          if (plugin.options.modules?.namedExport) {
            plugin.options.modules.namedExport = false
          }
        }
      })
    })
  })
  actions.replaceWebpackConfig(config)
}
