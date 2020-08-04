module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    // extras
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'prettier',
    // "jest", "jsdoc",
    // 'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    // 'plugin:vue/recommended'
    // "plugin:vuejs-accessibility/recommended",
    // "plugin:jest/recommended"
  ],

  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    'prettier/prettier': ['error', { singleQuote: true }],

    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    // "jsdoc/check-tag-names": [
    //   "error",
    //   {
    //     definedTags: ["model", "slot"]
    //   }
    // ],

    // 'vue/require-prop-types': ['error']
  },
};
