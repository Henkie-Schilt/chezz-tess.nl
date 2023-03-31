/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "**.cdninstagram.com",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
