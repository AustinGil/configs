module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,

    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    "jsdoc",
    // "jest",
    // 'vue',
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
    
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error'],
    'brace-style': 'error',
    'comma-spacing': [
      'error', {
        'before': false,
        'after': true
      }
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'computed-property-spacing': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': [
      'error', {
        'code': 80,
        'ignoreComments': true 
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
      'error', {
        'multiline': true,
        'consistent': true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error'],
    quotes: [
      'error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'always'],
    'semi-spacing': ['error'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error'],
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

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
