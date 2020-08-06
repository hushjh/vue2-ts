/*
 * @Author: Just be free
 * @Date:   2020-07-29 10:45:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-06 16:21:58
 * @E-mail: justbefree@126.com
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "node_modules/awesome-bem-scss/src/bem.scss";@import "@/theme/global.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://yesno.wtf",
        changeOrigin: true
      }
    }
  }
};
