const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: [
        "./browser/index"
    ],
    output: {
        path: path.join(__dirname, "public", "js"),
        filename: "bundle.js",
        publicPath: "/public/js/"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: true
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: [ "es2015", "react" ]
                },
                include: path.join(__dirname, "browser")
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /bootstrap.+\.(jsx|js)$/,
                loader: "imports?jQuery=jquery,$=jquery,this=>window"
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};
