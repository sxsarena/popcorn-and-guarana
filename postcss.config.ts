import paths from './config/paths';

export default {
  plugins: [
    require('postcss-import')({
      path: [paths.srcShared, `${__dirname}/node_modules`],
    }),
    require('postcss-nested')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-media-variables')(),
    require('postcss-custom-media')(),
    require('postcss-css-variables')(),
    require('postcss-media-variables')(),
    require('autoprefixer')(),
    require('postcss-custom-properties')(),
    require('postcss-assets')({
      basePath: './assets',
    }),
    // This is broken.
    // require('postcss-normalize')(),
  ],
  sourceMap: true,
};
