/**
 * @type {import('esbuild').BuildOptions}
 */
export const buildOptions = {
  format: `esm`,
  outbase: `src`,
  resolveExtensions: [`tsx`, `ts`, `jsx`, `mjs`, `cjs`, `js`, `json`],
  sourcemap: true,
};
