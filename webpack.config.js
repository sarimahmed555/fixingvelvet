const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Add support for importing various file types
  config.module.rules.push({
    test: /\.(ttf|otf|eot|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  });

  // Add support for importing image files
  config.module.rules.push({
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  });

  return config;
};