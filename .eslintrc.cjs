module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
    "no-var": "error",
    "no-console": "warn",
    "no-extra-semi": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "arrow-spacing": "error",
    "eqeqeq": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-unreachable": "error",
    "no-unused-labels": "error",
    "no-useless-escape": "error",
    "no-with": "error",
    "require-await": "error",
    "valid-typeof": "error",
    "dot-location": ["error", "property"],
    "no-extra-parens": ["error", "functions"],
    "no-const-assign": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-new-symbol": "error",
    "no-useless-rename": "error",
    "no-whitespace-before-property": "error",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"],
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "error",
    // Security
    "no-alert": "error",
    "no-debugger": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-script-url": "error",
    "no-undef": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-mixed-operators": "error",
    "no-restricted-globals": ["error", "location"],
    "no-restricted-properties": ["error", {
      "object": "window",
      "property": "eval"
    }],
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-underscore-dangle": "error",

    // Code Quality
    "array-callback-return": "error",
    "consistent-return": "error",
    "default-case": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-unmodified-loop-condition": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
  },
}