const path = require('path');

module.exports = {
  // DevServer Configuration
  devServer: {
    allowedHosts: ['karpov.cloud'], // Add your domain here
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
  
  // Disable Lint on Save
  lintOnSave: false,
 
  // Webpack Chain Configuration
  chainWebpack: (config) => {
    // Add Markdown Loader
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

		config.plugin('html').tap((args) => {
			args[0].title = "Vote for Arsentii Karpov";
			return args;
		});
  },

  // Webpack Alias Configuration
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Default alias for 'src'
        '@components': path.resolve(__dirname, 'src/components'), // Custom alias for components
        '@assets': path.resolve(__dirname, 'src/assets'), // Custom alias for assets
      },
    },
  },
};
