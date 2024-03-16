/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['backend', 'localhost'],
        },
    },
};

export default nextConfig;
