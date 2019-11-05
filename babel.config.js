const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: [
          'last 3 Chrome major versions',
          'last 3 Firefox major versions',
          'Firefox ESR',
          'ie >= 11',
          'Edge >= 13',
        ],
      },
    },
  ],
];

const plugins = [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true,
    },
  ],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = { presets, plugins };
