module.exports = {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["warn", { // reevaluate soon
        "default": "array-simple"
    }],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "off", // reevaluate soon
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-generic-constructors": ["warn", "constructor"],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],// reevaluate soon
    "@typescript-eslint/consistent-type-assertions": ["error", {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
    }],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/consistent-type-exports": "off", // reevaluate soon
    "@typescript-eslint/consistent-type-imports": "off", // reevaluate soon
    "@typescript-eslint/explicit-function-return-type": ["off", {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    }], // reevaluate soon
    "@typescript-eslint/explicit-member-accessibility": "off",  // reevaluate soon
    "@typescript-eslint/explicit-module-boundary-types": "error", // reevaluate soon
    "@typescript-eslint/member-delimiter-style": ["error", {
        "multiline": {
            "delimiter": "none",
            "requireLast": true
        },
        "singleline": {
            "delimiter": "semi",
            "requireLast": false
        },
        "multilineDetection": "brackets"
    }],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": ["error", {
        ignoreArrowShorthand: true,
    }],
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-dynamic-delete": "warn",// reevaluate soon
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "warn", // reevaluate soon
    "@typescript-eslint/no-redundant-type-constituents": "warn", // reevaluate soon
    "@typescript-eslint/no-require-imports": "warn",// reevaluate soon
    "@typescript-eslint/no-this-alias": ["error", {
        allowDestructuring: true
    }],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "warn",// reevaluate soon
    "@typescript-eslint/no-unnecessary-qualifier": "warn",// reevaluate soon
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "warn",
    "@typescript-eslint/no-useless-empty-export": "warn",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn", // reevaluate soon
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "off", // reevaluate soon
    "@typescript-eslint/prefer-for-of": "warn", // reevaluate soon
    "@typescript-eslint/prefer-function-type": "warn", // reevaluate soon
    "@typescript-eslint/prefer-includes": "warn", // reevaluate soon
    "@typescript-eslint/prefer-literal-enum-member": ["error", {
        "allowBitwiseExpressions": true
    }],
    "@typescript-eslint/prefer-nullish-coalescing": "warn", // reevaluate soon
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "off", // reevaluate soon
    "@typescript-eslint/prefer-reduce-type-parameter": "warn", // reevaluate soon
    "@typescript-eslint/prefer-regexp-exec": "warn",// reevaluate soon
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "warn", // reevaluate soon
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error", // reevaluate soon
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/sort-type-constituents": "warn", // reevaluate soon
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "warn", // reevaluate soon
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error", // reevaluate soon
    "@typescript-eslint/unbound-method": "off", // reevaluate soon
    "@typescript-eslint/unified-signatures": "warn",  // reevaluate soon

    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "warn"
}   