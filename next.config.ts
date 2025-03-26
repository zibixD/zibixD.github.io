import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
 output: "export",
 basePath: isProd ? "/zibixD.github.io" : "",
};

const nextConfig: NextConfig = {};

export default nextConfig;
