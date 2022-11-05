
const coreRules = require("./CoreRules.js")
const tsRules = require("./tsRules.js")
module.exports = {
    env: {
        es2022: true        
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        ...coreRules,
        ...tsRules
    }
}
