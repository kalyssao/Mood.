module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    lintOnSave: false,
    devServer: {
      proxy: 'https://wsx6y0dvog.execute-api.us-east-1.amazonaws.com/dev/',
  }
  }