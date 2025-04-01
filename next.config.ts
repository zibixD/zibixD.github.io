import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

module.exports = {
 output: "export",
 //  basePath: isProd ? "/zibixD.github.io" : "",
 //  assetPrefix: isProd ? "zibixD.github.io" : "",
 images: {
  unoptimized: true,
 },
};

const nextConfig: NextConfig = {
 output: "export",
 //  basePath: isProd ? "/zibixD.github.io" : "",
 //  assetPrefix: isProd ? "/zibixD.github.io" : "",
 images: {
  unoptimized: true,
 },
};

export default nextConfig;
