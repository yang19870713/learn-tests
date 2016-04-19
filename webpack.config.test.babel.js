import webpack from "webpack";
import path from "path";

export default {
    entry: {
        bundle: "mocha!./tests/unit/index"
    },
    output: {
        path: path.resolve(__dirname, "tests/unit"),
        publicPath: "/"
    },
    module: {
        loaders: [{
            test   : /\.jsx?$/,
            loaders: [
                "babel?presets[]=react,presets[]=es2015,presets[]=stage-0"
            ],
            exclude: /node_modules/
        }, {
            test  : /\.s[ac]ss$/,
            loader: "style!css?module&localIdentName=[local]__[hash:base64:10]!sass"
        }, {
            test  : /\.(jpe?g|svg|png)$/,
            loader: "url?limit=10000&name=/images/[hash:20].[ext]"
        }, {
            test: /sinon\/pkg\/sinon\.js/,
            loader: 'imports?define=>false,require=>false'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "src")]
    },
    resolve: {
        extensions: [".jsx", ".js", ".scss", ""],
        fallback  : [
            path.resolve(__dirname, "src"),
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            chai       : "chai",
            _          : "lodash"
        })
    ]
}
