/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            domains: [
                  "cdn.sanity.io",
                  "tailwindui.com",
                  "images.unsplash.com",
                  "greenheck-cms-prod.azureedge.net",
                  "staticg.sportskeeda.com",
                  "img.freepik.com",
            ]
      }
}

module.exports = nextConfig
