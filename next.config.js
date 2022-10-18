/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async ()=> {
    return [
      {
        source: '/',
        destination: '/blackouts',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
