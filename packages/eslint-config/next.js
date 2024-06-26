/**
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const react = require(`./react.js`);

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ...react,
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:@typescript-eslint/recommended-requiring-type-checking`,
    `plugin:@typescript-eslint/strict`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:import/typescript`,
    `plugin:@next/next/recommended`,
    `plugin:@next/next/core-web-vitals`,
    `prettier`,
  ],
};
