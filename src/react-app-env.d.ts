// / <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
  }
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
