/** @type {import('@types/eslint').Linter.BaseConfig} */
const config = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  ignorePatterns: [".eslintrc.cjs", "dist", "commitlint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "@stylistic/ts",
    "@stylistic",
  ],
  rules: {
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "warn",
    "@stylistic/ts/quotes": ["error", "double"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/semi-style": ["error", "last"],
  },
};  

module.exports = config;
