const { defineConfig } = require('@vue/cli-service')
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },
})
