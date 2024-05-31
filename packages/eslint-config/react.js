/**
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const base = require(`./index.js`);

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ...base,
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
  rules: {
    ...base.rules,
    "react/jsx-curly-brace-presence": [`warn`, `always`],
    "react/jsx-sort-props": [`warn`],
    "react/prefer-read-only-props": [`warn`],
    "react/prop-types": [`off`],
    "react/react-in-jsx-scope": [`off`],
  },
  settings: {
    ...base.settings,
    react: {
      version: `detect`,
    },
  },
};
