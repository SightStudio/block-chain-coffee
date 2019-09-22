module.exports = {
    chainWebpack: config => config.resolve.set('symlinks', false),
    devServer: {
        proxy: {
            '^/api': {
              target: 'http://localhost:3308',
              ws    : true,
              changeOrigin: true
            }
        }
    }
}