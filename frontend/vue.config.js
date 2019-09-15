module.exports = {
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