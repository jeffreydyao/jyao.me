/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.jyao.me',
  generateRobotsTxt: true,
  sitemapSize: 50000,
}