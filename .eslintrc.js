module.exports = {
    root: true,
    parser: "babel-eslint",
    extends:"eslint:recommended",
    env:{
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    rules:{
        semi: [2, "always"],
        indent: [2, 2],
        "no-console": "off",
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-extra-semi": 0
    }
}