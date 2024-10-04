declare module "eslint-plugin-react" {
  import type { ESLint } from "eslint";
  import type { ConfigWithExtends } from "typescript-eslint";
  const plugin: ESLint.Plugin & {
    configs: {
      flat: Record<"recommended" | "jsx-runtime", ConfigWithExtends>;
    };
  };
  export = plugin;
}
