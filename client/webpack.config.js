const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        mode: env.mode || "development",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
        },
        devServer: {
            open: true,
            compress: true,
            port: 3000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve("public", "index.html"),
            }),
            env.mode === "production" && new MiniCssExtractPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/i,
                    use: [
                        env.mode === "production"
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: "asset",
                },
            ],
        },
    };
};
