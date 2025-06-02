/// <reference types="vite/client" />

declare module "modern-normalize";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  readonly VITE_TMDB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

