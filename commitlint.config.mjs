/**
 * @see https://commitlint.js.org/reference/configuration.html
 */
export default {
  extends: ['@commitlint/config-conventional'],
  /**
   * Whether commitlint uses the default ignore rules, see the description above.
   * @see https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}
