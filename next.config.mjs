import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@prisma/client": path.resolve(__dirname, "lib/prisma-types.ts"),
      "@/customer-intelligence": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

export default nextConfig;
