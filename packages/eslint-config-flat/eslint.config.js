import config from "./build/index.js";

export default [
  ...config,
  {
    files: ["src/**/*.ts", "src/**/*.d.ts"],
    ignores: ["build/**/*"],
  },
];
