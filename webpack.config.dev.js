const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./js/bundle.js" //webpack様がまとめてくれたファイルだよ
    },
    node: { fs: "empty" },
    devtool: "source-map", //デバッグしやすくしてくれる。ビルド後のコード位置をビルド前のコードから逆引きするのに使うよ。

    resolve: {
        extensions: [".ts", ".tsx", ".js"] //webpackが解析してくれるファイル形式たち
    },

    module: {
        rules: [{
                test: /\.tsx?$/, //.tsx形式のファイルが来た時はts-loaderで解析する。　例えばjsxの時はbabelがやってたことと同じ。
                use: [{ loader: "ts-loader" }]
            }, //webpackはJavaScriptファイルのみそのままの状態で扱うことができます。そのためJavaScriptファイル以外の他の言語で書かれたプログラムをwebpackで扱う場合にはLoader(ローダー)を使用する必要があります。
            {
                test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/, //こいつらが来た時はurl-loaderで対処する。
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "./img/[path][name].[ext]"
                    }
                }
            }
        ]
    },

    devServer: {
        open: true,
        openPage: "",
        contentBase: path.join(__dirname, "./dist"),
        watchContentBase: true,
        port: 3000,
        disableHostCheck: true
    }
};