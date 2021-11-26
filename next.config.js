const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "ico", "webp", "jp2", "avif"],
  exclude: path.resolve(__dirname, 'src/icons'),
  images: {
    disableStaticImages: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300000, must-revalidate',
          }
        ],
      },
    ]
  },
})