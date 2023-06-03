module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@features': './src/features',
            '@config': './src/config',
            '@components': './src/components',
            '@routes': './src/routes',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@store': './src/store',
            '@utils': './src/utils',
            '@styles': './src/styles',
            src: './src',
          },
        },
      ],
    ],
  };
};
