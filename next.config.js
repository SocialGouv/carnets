/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "githubusercontent.com",
      "avatars.githubusercontent.com",
      "avatars1.githubusercontent.com",
    ],
  },
}
