/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/cache",
        destination:
          "https://gist.github.com/twisttaan/8a6bacde7b89c8dcc48fff0190ff9a56",
        permanent: true,
      },
    ];
  },
};
