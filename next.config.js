const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'picsum.photos','placeing.com', 'api.escuelajs.co', 'fastly.picsum.photos', 'cdn.pixabay.com'],
  },
});

