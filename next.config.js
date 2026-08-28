/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/legal/terms", destination: "/legal/terms-of-service", permanent: true },
      { source: "/legal/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/legal/hipaa", destination: "/legal/npp", permanent: true },
      { source: "/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/terms", destination: "/legal/terms-of-service", permanent: true },
    ];
  },
};

module.exports = nextConfig;
