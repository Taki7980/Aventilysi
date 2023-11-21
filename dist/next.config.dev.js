"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "tailwindui.com", "images.unsplash.com", "greenheck-cms-prod.azureedge.net", "staticg.sportskeeda.com", "img.freepik.com", "cdn-icons-png.flaticon.com", "cdn-icons-png.flaticon.com", "content.greenheck.com", "docs.exideindustries.com", "www.rataindia.com", "mdbcdn.b-cdn.net", "images.pexels.com"]
  },
  runtime: 'edge',
  // for Edge API Routes only
  unstable_allowDynamic: [// allows a single file
  '/sanity/sanity-utils.ts', // use a glob to allow anything in the function-bind 3rd party module
  '/node_modules/function-bind/**']
};
module.exports = nextConfig;