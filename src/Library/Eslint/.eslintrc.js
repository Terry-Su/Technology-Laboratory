module.exports = {
  rules: {
    quotes: [2, 'single']
  },
  overrides: [
    {
      files: ['testing/overriding.js'],
      rules: {
        quotes: [2, 'double']
      }
    },
    {
      files: ['testing/styleOfLocalizationFile.js'],
      rules: {
        'object-curly-newline': [
          'error',
          {
            // ObjectExpression: "always",
            // minProperties: 5,
            ObjectPattern: { multiline: true }
          }
        ],
        'max-len': [
          'error',
          {
            code: 10000,
            ignoreStrings: true
          }
        ],
         keyword: {
            before: true,
            after: true,
        }
      }
    }
  ]
}
