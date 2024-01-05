/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '"picsum.photos',
                port: '',
                pathname: '/1440/515',
            },
            {
                protocol: 'https',
                hostname: '"picsum.photos',
                port: '',
                pathname: '/1112/538',
            },
        ],
    },
}

module.exports = nextConfig

