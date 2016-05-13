import webpack from 'webpack';
import path from "path";
import merge from "webpack-merge";
const
    {CommonsChunkPlugin, UglifyJsPlugin} = webpack.optimize,
    {ProvidePlugin, DefinePlugin, NoErrorsPlugin} = webpack;

const  TARGET = process.env.npm_lifecycle_event;

//Common Configuration
let  common = {
    entry: {
        bundle: path.resolve(__dirname, "src/index"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        loaders: [{
            test   : /\.jsx?$/,
            loader: "babel?presets[]=es2015,presets[]=stage-0",
            exclude: /node_modules/
        }, {
            test  : /\.s[ac]ss$/,
            loader: "style!css?module&localIdentName=[local]__[hash:base64:10]!sass"
        }, {
            test  : /\.(jpe?g|svg|png)$/,
            loader: "url?limit=10000&name=/images/[hash:20].[ext]"
        }]
    },
    resolve: {
        extensions: [".jsx", ".js", ".scss", ""],
        fallback  : [
            path.resolve(__dirname, "src"),
        ]
    },
    plugins: [
        new NoErrorsPlugin(),
        new ProvidePlugin({
            _       : "lodash"
        })
    ]
}


let config;
switch (TARGET) {
    //Dev config
    case 'start':
        config = merge(common, {
            devtool: "cheap-eval-source-map"
        });
        break;

    //Unit test config
    case 'utest':
        config = merge(common, {
            devtool: "cheap-eval-source-map",
            devServer: {
                contentBase: path.resolve(__dirname, "tests")
            },
            entry: {
                bundle: "mocha!./tests/unit/index"
            },
            output: {
                path: path.resolve(__dirname, "tests/unit"),
                publicPath: "/"
            },
            moudle: {
                loaders: [{
                    test: /sinon\/pkg\/sinon\.js/,
                    loader: 'imports?define=>false,require=>false'
                }]
            },
            plugins: [
                new ProvidePlugin({
                    chai       : "chai",
                    _          : "lodash"
                })
            ]
        })
        break;

    //Build config
    case 'build':
        config = merge(common, {
            plugins: [
                new DefinePlugin({
                    "process.env": {
                        NODE_ENV: JSON.stringify("production")
                    }
                }),
                new UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
            ]
        })
        break;

    default:
        config = common;
        break;
}

export default config;
