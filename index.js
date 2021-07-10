module.exports = {
    env: {
        es2021:true
    },
    parserOptions: {
        ecmaVersion: "2021",
        sourceType: "module"
    },
    rules: {
        // Possible Errors
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "warn",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "off", // reevaluate soon
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"], // reevaluate soon
        "no-extra-semi": "off",//not needed
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": ["error", {
            "skipStrings": true,
            "skipRegExps": true,
            "skipTemplates": true,
        }],
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
    }
};