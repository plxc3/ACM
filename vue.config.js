module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        port: 6001,
        https: false,
        hotOnly: false,
        before: app => {}
    }
};
