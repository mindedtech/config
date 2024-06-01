/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: `./index.js`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
};
