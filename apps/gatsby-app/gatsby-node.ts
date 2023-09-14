import { GatsbyNode } from "gatsby"
import path from "path"

const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions
  const componentPath: string = path.resolve("./src/pages/index.tsx")

  createPage({
    path: "/",
    component: componentPath,
    context: {},
    defer: true,
  })
}

const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
  getConfig,
}) => {
  const config = getConfig()

  config.module?.rules.forEach((rule: { oneOf: any[] }) => {
    rule.oneOf?.forEach((innerRule: { use: any[] }) => {
      innerRule.use?.forEach(
        (loader: {
          loader: string | string[]
          options: { modules: { namedExport: boolean } }
        }) => {
          if (
            loader.loader &&
            (loader.loader.includes("/css-loader") ||
              loader.loader.includes("/mini-css-extract-plugin")) &&
            loader.options?.modules
          ) {
            loader.options.modules.namedExport = false
          }
        }
      )
    })
  })

  actions.replaceWebpackConfig(config)
}

export { createPages, onCreateWebpackConfig }
