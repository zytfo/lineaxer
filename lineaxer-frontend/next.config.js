/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = {
    nextConfig,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/0xb904c30e0f8f45f2face933523e33072a4e6781e",
                permanent: true,
            },
        ]
    },
}
