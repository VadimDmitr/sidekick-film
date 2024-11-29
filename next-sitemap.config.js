/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sidekickmediausa.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  exclude: [
    '/components/contact',
    '/components/servicesDownPage',
    '/components//servicesUpPage',
    '/components/sidekickAd',
    '/components/videoFlag',
    '/components/videoMountains',
    '/components/videoProjects',
  ],
};
