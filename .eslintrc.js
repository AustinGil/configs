module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,

    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    // "ecmaVersion": 6,
    sourceType: 'module'
  },
  plugins: [
    'jsdoc',
    // "jest",
    // 'vue'
  ],
  extends: [
    'eslint:recommended',
    "plugin:prettier/recommended",
    'plugin:jsdoc/recommended',
    // "plugin:jest/recommended"
    // 'plugin:vue/recommended',
    // "plugin:vuejs-accessibility/recommended",
  ],

  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'no-console': 'off',

    "prettier/prettier": ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }],

    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // 'vue/require-prop-types': ['error']
    // "vue/max-attributes-per-line": 'off',
    // 'vue/custom-event-name-casing': 'off',
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'any'
    //     }
    //   }
    ],
  }
};
