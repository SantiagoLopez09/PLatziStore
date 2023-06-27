/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeimg.com', 'picsum.photos','placeing.com', 'api.escuelajs.co', 'fastly.picsum.photos', 'cdn.pixabay.com'],
  },
  reactStrictMode: true,
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: "/dist",
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     },
  //   ]
  // }
};

module.exports = nextConfig;
