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
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-named-capture-group": "error",
        "prefer-promise-reject-errors": "off",// reevaluate soon
        "prefer-regex-literals": "error",
        "radix": "error",
        "require-await": "off", // reevaluate soon
        "require-unicode-regexp": "off",// reevaluate soon
        "vars-on-top": "off",
        "wrap-iife": ["error", "outside", {
            functionPrototypeMethods: true
        }],
        "yoda": "error",

        //Strict Mode
        "strict": ["error", "never"]

        //Variables
        "init-declarations": ["error", "always"],// reevaluate soon
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "off",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "error",
        "no-unused-vars": ["error", {
            "args": "after-used"
        }],
        "no-use-before-define": "error",

        //Stylistic Issues
        "array-bracket-newline": ["error", { "multiline": true }],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": "off",
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "camelcase": "error",
        "capitalized-comments": ["error", "always", {
            "ignoreInlineComments": true
        }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error", "self"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "declaration"],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"]
        "id-denylist": "off",// reevaluate soon
        "id-length": ["error", { "min": 2, "max": 10 }],
        "id-match": "off",
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4],
        "jsx-quotes": "off",
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict",
            "align": "value"
        }],
        "keyword-spacing": ["error", {
            "before": true
            "after": true
        }],
        "line-comment-position": "off",
        "linebreak-style": ["error", "windows"],
        "lines-around-comment": ["error", {
            "beforeBlockComment": true,
            "afterBlockComment": true,
            "beforeLineComment": true,
            "afterLineComment": false,
            "allowBlockStart": true,
            "allowBlockEnd": false,
            "allowObjectStart": true,
            "allowObjectEnd": false,
            "allowArrayStart": false,
            "allowArrayEnd": false,
            "allowClassStart": true,
            "allowClassEnd": false,
        }],
        "lines-between-class-members": ["error", "always"],
        "max-depth": ["error", 4],
        "max-len": ["error", {
            "code": 100 // reevaluate soon
            "ignoreUrls": true
            "ignoreStrings": true
            "ignoreTemplateLiterals": true
            "ignoreRegExpLiterals": true
        }],
        "max-lines": ["error", {
            "max": 250,
            "skipBlankLines": false,
            "skipComments": false,
        }],
        "max-lines-per-function": ["error", {
            "max": 45, // reevaluate soon
            "skipBlankLines": true,
            "skipComments": true,
        }],
        "max-nested-callbacks": ["error", {
            "max": 3
        }],
        "max-params": "off",
        "max-statements": ["error", 10],// reevaluate soon
        "max-statements-per-line": ["error", {
            "max": 2
        }],
        "multiline-comment-style": ["error", "bare-block"],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": "off",
        "new-parens": ["error", "always"],
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 2
        }],
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": ["error", {
            "max": 2
        }],
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-tabs": "off",
        "no-ternary": "off",
        "no-ternary": "warn",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": ["error", {
            "defaultAssignment": true
        }],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": ["error", {
            "minProperties": 2,
            "consistent": true,
        }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", {
            "allowAllPropertiesOnSameLine": true
        }],
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "off",// not needed
        "operator-assignment": ["error", "always"],
        "operator-linebreak": ["error", "after"], // reevaluate soon
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "off",// reevaluate soon
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double", {
            "avoidEscape": true
            "allowTemplateLiterals": true
        }],
        "semi": ["error", "never"],
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "semi-style": ["error", "last"],
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": true,
        }],
        "spaced-comment": "off",// reevaluate soon
        "switch-colon-spacing": ["error", { "after": true, "before": false }],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "wrap-regex": "error",

        //ECMAScript 6
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", {
            "before": false,// reevaluate soon
            "after": true
        }],
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-class-assign": "error",
        "no-confusing-arrow": ["error", { "allowParens": true }],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-restricted-exports": "off",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "warn",// reevaluate soon
    }
};