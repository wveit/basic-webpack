
module.exports = {
    mode: "none",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "main.js",
        path: __dirname + "dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}