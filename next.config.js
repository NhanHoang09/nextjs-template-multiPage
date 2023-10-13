/** @type {import('next').NextConfig} */

const nextConfig = {
  // images: {
  //   domains: [
  //     "nyc3.digitaloceanspaces.com",
  //     "i.pinimg.com",
  //     "i5.walmartimages.com",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
