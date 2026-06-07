// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {};

// export default nextConfig;



// ...existing code...
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // limit Turbopack workspace scanning to the project folder
    root: path.resolve(__dirname),
  },
  // ensure output tracing stays inside the project
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
// ...existing code...