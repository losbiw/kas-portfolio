module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'instagram.fhrk10-1.fna.fbcdn.net',
      'scontent-amt2-1.cdninstagram.com',
    ],
  },
};
