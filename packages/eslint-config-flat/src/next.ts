import { FlatCompat } from "@eslint/eslintrc";

import baseConfig from "./index.js";

import type { FlatConfigArray } from "./index";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const config: FlatConfigArray = [
  ...baseConfig,
  ...compat.extends(`next/core-web-vitals`, `next/typescript`),
  {
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
];

export default config;
