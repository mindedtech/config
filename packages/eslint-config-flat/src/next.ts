import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import baseConfig from "./index";

import type { FlatConfigArray } from "./index";
import type { FixupConfigArray } from "@eslint/compat";

const flatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const flatCompatConfig = fixupConfigRules([
  ...flatCompat.extends(`next/recommended`),
  ...flatCompat.extends(`next/core-web-vitals`),
] as FixupConfigArray);

const config: FlatConfigArray = [
  ...baseConfig,
  ...flatCompatConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
];

export default config;
