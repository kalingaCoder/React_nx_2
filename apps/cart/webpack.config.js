const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  //nrwlConfig(config);
  return {
    ...config,

    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'cart',
        filename: 'remoteEntry.js',
        exposes: {
          './Module': './src/remote-entry.ts',
        },
      }),
    ],
  };
};
