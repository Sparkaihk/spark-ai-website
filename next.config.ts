import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "/*": [
      "./.chrome-*",
      "./.chrome-*/**/*",
      "./.edge-*",
      "./.edge-*/**/*",
      "./*.log",
      "./*.err.log",
    ],
  },
};

export default nextConfig;
