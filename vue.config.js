module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~rfs/scss";
          @import "~@/scss/_variables.scss";
          @import "~@/scss/_mixins.scss";
        `
      }
    }
  }
};
