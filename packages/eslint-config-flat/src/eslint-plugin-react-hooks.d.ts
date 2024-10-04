declare module "eslint-plugin-react-hooks" {
  import type { ESLint } from "eslint";
  import type { ConfigWithExtends } from "typescript-eslint";
  const plugin: ESLint.Plugin & {
    configs: Record<"recommended", ConfigWithExtends>;
  };
  export = plugin;
}
