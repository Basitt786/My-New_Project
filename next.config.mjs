/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        qualities: [75, 90, 100],
        formats: ['image/webp']
    }
};
export default nextConfig;
