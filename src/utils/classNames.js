
/**
 * When you pass classes conditionally, you often end up with undefined or false values. This util makes sure this does not happen.
 * @param {...(string | boolean | undefined | null)} args
 * @returns {string}
 * @example
 */
export const cn = (...args) =>
  args.filter(Boolean).join(" ");