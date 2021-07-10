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
    }
};