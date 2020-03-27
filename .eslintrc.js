module.exports = {
    root: true,
    parser: "babel-eslint",
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
        semi: [1]
    }
}