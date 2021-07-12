module.exports = {
    env: {
        es2021: true
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
        "no-useless-backreference": "off",//?
        "require-atomic-updates": "error",
        "use-isnan": ["error", {
            "enforceForSwitchCase": true,
            "enforceForIndexOf": true
        }],
        "valid-typeof": "error",

        //Best Practices
        "accessor-pairs": "error",
        "array-callback-return": ["error", {
            checkForEach: true
        }],
        "block-scoped-var": "off", // reevaluate soon
        "class-methods-use-this": "error",
        "complexity": ["error", {
            "max": 20 // reevaluate soon
        }],
        "consistent-return": "error",
        "curly": ["error", "multi-or-nest", "consistent"], // reevaluate soon
        "default-case": "error",
        "default-case-last": "error",
        "efault-param-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": ["error", "smart"],
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "guard-for-in": "off",
        "max-classes-per-file": ["error", 1],
        "no-alert": "warn",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": ["error", { // reevaluate soon
            "allow": ["arrowFunctions"]
        }],
        "no-empty-pattern": "error",
        "no-eq-null": "error",// reevaluate soon
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": ["error", {
            //"commentPattern": "" // reevaluate soon
        }],
        "no-floating-decimal": "off",// reevaluate soon
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",// reevaluate soon
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        'no-iterator': "error",
        "no-lone-blocks": "off",// reevaluate soon
        "no-loop-func": "error",
        "no-magic-numbers": ["error", {
            "ignoreArrayIndexes": true
            "ignoreDefaultValues": true
        }],
        "no-multi-spaces": ["error", {
            ignoreEOLComments: true
        }],
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error", // not needed
        "no-octal-escape": "error", // not needed
        "no-param-reassign": ["error", {
            "props": true
        }]
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-properties": "off",
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
    }
};