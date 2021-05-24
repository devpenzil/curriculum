const path = require("path");
module.exports = {
  future: {
    webpack5: true
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    ENV: process.env.ENV
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  //   return config;
  // },
};
