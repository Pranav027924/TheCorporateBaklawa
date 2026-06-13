/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are served directly from the ImageKit CDN using plain <img> tags
  // with ?tr= transform params (per PRD section 5), so next/image remote
  // patterns are not required. If you later switch to next/image, add the
  // ImageKit hostname here under images.remotePatterns.
};

export default nextConfig;
