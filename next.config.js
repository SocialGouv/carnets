/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatars1.githubusercontent.com",
      "avatars2.githubusercontent.com",
      "avatars3.githubusercontent.com",
      "avatars4.githubusercontent.com",
      "avatars5.githubusercontent.com",
    ],
  },
}
