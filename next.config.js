/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com'],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.7mboots.com.br",
        hostname: "agron.com.br",
        hostname: "i.pinimg.com",
        
       
      },
    ],
  },
};

module.exports = nextConfig;
