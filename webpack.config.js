let path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        app: "./app.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    devServer: {
        inline: true,
        contentBase: 'src'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
}