declare const _CFLAGS_: {
  GATSBY_MAJOR: string
}

declare module NodeJS {
  interface Global {
    __GATSBY: {
      buildId: string
      root: string
    }

    _polyfillRemoteFileCache?: import("gatsby").GatsbyCache
  }
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string }
  export default classes
}
