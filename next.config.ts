import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/solutions/pharmaceutical/ebmr',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/predictive-maintenance',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/process-optimization',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/quality-inspection',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/deviation-capa',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/ppe-monitoring',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/cleaning-validation',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/regulatory-assistant',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/sop-assistant',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/training-compliance',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/production',
        destination: '/solutions/pharmaceutical/batch-record-automation',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/quality',
        destination: '/solutions/pharmaceutical/quality-inspection-capa',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/regulatory',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/digitization',
        destination: '/solutions/product/scanning-solution',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/records',
        destination: '/solutions/product/rms',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/sop-management',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/stp-protocol',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/license-management',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
      {
        source: '/solutions/pharmaceutical/change-control',
        destination: '/solutions/pharmaceutical/regulatory-compliance',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
