/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
        {
          protocol: 'https',
          hostname: 'instagram.com',
        },
        {
          protocol: 'https',
          hostname: 'cdninstagram.com',
        },
        {
          protocol: 'https',
          hostname: 'scontent.cdninstagram.com',
        },
      ],
    },
  }
  
  export default nextConfig