module.exports = {
    devServer: {
        proxy: {
          
            '/importer-api': {
              target: 'http://0.0.0.0:8080/api',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/importer-api': ''
              }
            },
            
            '/store-api': {
              target: 'http://0.0.0.0:8081/api',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/store-api': ''
              }
            },

            '/cafe-api': {
              target: 'http://0.0.0.0:8082/api',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/cafe-api': ''
              }
            },

            '/deliver-api': {
              target: 'http://0.0.0.0:8083/api',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/deliver-api': ''
              }
            }

        }
    }
}
