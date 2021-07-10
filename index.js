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
        
    }
};