const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = {
    DIST:path.resolve(__dirname,"dist"),
    SRC:path.resolve(__dirname,"src"),
    JS:path.resolve(__dirname,"src/js"),
    SERVERJS:path.resolve(__dirname,"server")
};

const browserConfig = {
    mode:"development",
    entry:path.join(paths.JS,"index.js"),
    output:{
        path:paths.DIST,
        filename:"index.bundle.js"
    },
    devServer:{
        contentBase:paths.SRC
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(paths.SRC,"index.html")
        }),
        new ExtractTextPlugin("style.bundle.css")
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    "babel-loader"
                ]
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    use:"css-loader"
                })
            },
                        {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    "file-loader"
                ]
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    }
}
var nodeExternals = require("webpack-node-externals");
const serverConfig = {
    mode:"development",
    entry:path.join(__dirname+"/TodoAppServerSide.js"),
    target:"node",
    externals: [nodeExternals()],
    output:{
        path:paths.DIST,
        filename:"server.js",
        libraryTarget:"commonjs2"
    },
    plugins:[
        new ExtractTextPlugin('style.bundle.css')
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    "babel-loader"
                ]
            }
            ,{
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    "file-loader"
                ],
            }
            ,{
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    use:"css-loader"
                })
            }
        ]
    }
}
module.exports = [browserConfig,serverConfig]