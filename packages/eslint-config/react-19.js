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
  plugins: [...react.plugins, `react-compiler`],
  rules: {
    ...react.rules,
    "react-compiler/react-compiler": [`error`],
  },
  settings: {
    ...react.settings,
    react: {
      version: `detect`,
    },
  },
};
