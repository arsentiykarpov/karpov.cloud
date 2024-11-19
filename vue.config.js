const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['karpov.cloud'], // Add your domain here
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
})
