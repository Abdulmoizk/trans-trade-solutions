/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your actual image domains here when using external images
    // For now, all images are local, so this can be empty or removed
    remotePatterns: [
      // Example pattern (uncomment and modify as needed):
      // {
      //   protocol: "https",
      //   hostname: "**.example.com",
      // },
    ],
  },
};

export default nextConfig;
