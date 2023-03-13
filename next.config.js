/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // load worker files as a urls by using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      type: "asset/resource",
      generator: {
        filename: "static/worker/[hash][ext][query]",
      },
    });

    return config;
  },
  env: {
    HOST_API: "https://connect.damirifa.com/api/v1",
    GOOGLE_CLIENT_ID:
      "912115090971-rio9qnkgdeekmgmg36j96774085r7imj.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    FACEBOOK_CLIENT_ID: "374851051283033",
    FACEBOOK_CLIENT_SECRET: "97cf55a247701d4e2f3242288a20f4e0",
    TWITTER_CLIENT_ID: "WGFyLS1ZemU5a1U5OTB2d1ZpRkg6MTpjaQ",
    TWITTER_CLIENT_SECRET: "c9OLVnem078zCzh-5VqxM-9IcB7SopqS2NJRm86lInnPaq8yxz",
    NEXTAUTH_URL: "https://damirifa-frontend.herokuapp.com",
    NEXTAUTH_SECRET: "secret",
    FIREBASE_API_KEY: "AIzaSyCu_qWFCdvT9XCA56AIeWV4abOx68RdTuU",
    FIREBASE_AUTH_DOMAIN: "damirifa-1fbab.firebaseapp.com",
    FIREBASE_PROJECT_ID: "damirifa-1fbab",
    FIREBASE_STORAGE_BUCKET: "damirifa-1fbab.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "376883867975",
    FIREBASE_APP_ID: "1:376883867975:web:f83789054928fb59d59c62",
    FIREBASE_MEASUREMENT_ID: "G-FGP2Y4FZNN",
  },
  images: {
    domains: ["connect.damirifa.com", "cdn.damirifa.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
// };
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// });
// async redirects() {
//   return [
//     {
//       source: "/dashboard/announcement",
//       destination: "/dashboard",
//       permanent: true,
//     },
//     {
//       source: "/dashboard",
//       destination: "/dashboard",
//       permanent: true,
//     },
//   ];
// },
