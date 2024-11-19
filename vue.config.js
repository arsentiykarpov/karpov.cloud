const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    allowedHosts: ['karpov.cloud'], // Add your domain here
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
};
