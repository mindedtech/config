/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:@typescript-eslint/recommended-requiring-type-checking`,
    `plugin:@typescript-eslint/strict`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:import/typescript`,
    `prettier`,
  ],
  overrides: [
    {
      files: [`*.cjs`],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [`off`],
        "@typescript-eslint/no-var-requires": [`off`],
      },
    },
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2018,
    project: `./tsconfig.json`,
    sourceType: `module`,
  },
  plugins: [
    `@typescript-eslint`,
    `eslint-plugin-import`,
    `eslint-plugin-prettier`,
    `sort-keys-fix`,
    `sort-destructure-keys`,
  ],
  root: true,
  rules: {
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
    "@typescript-eslint/no-unused-vars": [`warn`, { argsIgnorePattern: `^_` }],
    "@typescript-eslint/switch-exhaustiveness-check": [`error`],
    "import/consistent-type-specifier-style": [`warn`, `prefer-top-level`],
    "import/namespace": [`warn`],
    "import/no-cycle": [`error`],
    "import/no-relative-packages": [`warn`],
    "import/order": [
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
    "no-restricted-imports": [
      `warn`,
      {
        patterns: [
          {
            group: [`./*`, `../*`],
            message: `Use @ imports instead`,
          },
        ],
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
    "react/react-in-jsx-scope": [`off`],
    "sort-destructure-keys/sort-destructure-keys": [`warn`],
    "sort-imports": [`warn`, { ignoreDeclarationSort: true }],
    "sort-keys-fix/sort-keys-fix": [`warn`, `asc`, { natural: true }],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [`.ts`, `.tsx`, `.d.ts`],
    },
    "import/resolver": {
      node: true,
      typescript: true,
    },
    "react": {
      version: `detect`,
    },
  },
};
