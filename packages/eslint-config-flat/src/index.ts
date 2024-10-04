/* eslint-disable import-x/no-named-as-default-member */
import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-plugin-prettier/recommended";
// eslint-disable-next-line import-x/default
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import globals from "globals";
import * as ts from "typescript-eslint";

export type FlatConfigArray = ReturnType<(typeof ts)[`config`]>;

const config: FlatConfigArray = ts.config(
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "prettier": prettierPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "sort-keys-fix": sortKeysFixPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat[`jsx-runtime`].rules,
      "@next/next/no-html-link-for-pages": 0,
      "@typescript-eslint/consistent-type-definitions": [`warn`, `type`],
      "@typescript-eslint/consistent-type-exports": [`warn`],
      "@typescript-eslint/consistent-type-imports": [
        `warn`,
        {
          fixStyle: `separate-type-imports`,
          prefer: `type-imports`,
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [`off`],
      "@typescript-eslint/naming-convention": [
        `error`,
        {
          format: [`strictCamelCase`, `UPPER_CASE`, `PascalCase`, `snake_case`],
          leadingUnderscore: `allow`,
          selector: `variableLike`,
        },
      ],
      "@typescript-eslint/no-misused-promises": [`warn`],
      "@typescript-eslint/no-unsafe-argument": [`warn`],
      "@typescript-eslint/no-unsafe-assignment": [`warn`],
      "@typescript-eslint/no-unsafe-return": [`warn`],
      "@typescript-eslint/no-unused-vars": [
        `warn`,
        { argsIgnorePattern: `^_` },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": [`error`],
      "import-x/consistent-type-specifier-style": [`warn`, `prefer-top-level`],
      "import-x/namespace": [`warn`],
      "import-x/no-cycle": [`error`],
      "import-x/order": [
        `warn`,
        {
          "alphabetize": {
            caseInsensitive: true,
            order: `asc`,
            orderImportKind: `asc`,
          },
          "groups": [
            `builtin`,
            `external`,
            `internal`,
            `parent`,
            `sibling`,
            `index`,
            `object`,
            `type`,
          ],
          "newlines-between": `always`,
        },
      ],
      "no-useless-rename": [`warn`],
      "object-shorthand": [`warn`, `always`],
      "prettier/prettier": [
        `warn`,
        { endOfLine: `auto`, quoteProps: `consistent`, trailingComma: `all` },
      ],
      "quotes": [`warn`, `backtick`],
      "react/jsx-curly-brace-presence": [`warn`, `always`],
      "react/jsx-sort-props": [`warn`],
      "react/prefer-read-only-props": [`warn`],
      "react/prop-types": [`off`],
      "react/react-in-jsx-scope": [`off`],
      "sort-keys-fix/sort-keys-fix": [`warn`, `asc`, { natural: true }],
    },
    settings: {
      react: {
        version: `detect`,
      },
    },
  },
  {
    files: [`**/*.d.ts`],
    rules: {
      quotes: [`warn`, `double`],
    },
  },
);

export default config;
