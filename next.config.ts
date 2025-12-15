import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dhxn75wv6/**',
                search: '',
            },
        ],
    },
}

export default nextConfig;
