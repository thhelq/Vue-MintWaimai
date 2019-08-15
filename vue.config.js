module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Vue-MintWaimai/'
        : '/',
    devServer: {
        port: 8081,
        https: true
    }
}