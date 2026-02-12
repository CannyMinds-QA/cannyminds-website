import type { NextConfig } from "next";
import { redirects } from "./config/redirects";

const nextConfig: NextConfig = {
  redirects,
  /* config options here */
};

export default nextConfig;

