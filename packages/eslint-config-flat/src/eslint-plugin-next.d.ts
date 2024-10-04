declare module "@next/eslint-plugin-next" {
  import type { ESLint } from "eslint";
  import type { ConfigWithExtends } from "typescript-eslint";
  const plugin: ESLint.Plugin & {
    configs: Record<"recommended" | "core-web-vitals", ConfigWithExtends>;
  };
  export = plugin;
}
