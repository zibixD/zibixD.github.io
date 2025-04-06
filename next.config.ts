import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

// module.exports = {
//  output: "export",
//  basePath: isProd ? "/zibixd.github.io" : "",
//  assetPrefix: isProd ? "/zibixd.github.io" : "",
//  images: {
//   unoptimized: true,
//  },
// };

const nextConfig: NextConfig = {
 reactStrictMode: true,
 output: "export",
 images: {
  unoptimized: true,
 },
 //  basePath: "/zibixd.github.io",
 //  assetPrefix: "/zibixd.github.io/",
 trailingSlash: true,
};

export default nextConfig;
