module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.ico","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"86e854aaa8941ff8b8e93581c2d576e8"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
