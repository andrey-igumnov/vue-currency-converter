module.exports = {
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //{ test: /\.woff/, loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff' },
            // { test: /\.ttf/, loader: 'file?prefix=font/' },
            // { test: /\.eot/, loader: 'file?prefix=font/' },
            // { test: /\.svg/, loader: 'file?prefix=font/' }
            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
