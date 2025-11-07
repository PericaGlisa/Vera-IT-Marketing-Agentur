/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://verait.de',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/legal/agb',
    '/legal/privacy',
    '/legal/cookies',
    '/rechtliches/*'
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/leistungen'),
    await config.transform(config, '/projekte'),
    await config.transform(config, '/team'),
    await config.transform(config, '/kontakt'),
    await config.transform(config, '/beratung'),
    await config.transform(config, '/leistungen/web-entwicklung'),
    await config.transform(config, '/leistungen/mobile-app-entwicklung'),
    await config.transform(config, '/leistungen/ki-entwicklung'),
    await config.transform(config, '/leistungen/digital-marketing'),
    await config.transform(config, '/leistungen/interface-design'),
    await config.transform(config, '/leistungen/brand-design'),
    await config.transform(config, '/leistungen/e-commerce-entwicklung'),
    await config.transform(config, '/leistungen/datenanalyse')
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/private/', '/_next/', '/api/']
      }
    ],
    additionalSitemaps: []
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/leistungen/')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.includes('/projekte')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path.includes('/team') || path.includes('/kontakt')) {
      priority = 0.6
      changefreq = 'monthly'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: `https://verait.de${path}`,
          hreflang: 'de'
        },
        {
          href: `https://verait.de${path}`,
          hreflang: 'de-DE'
        }
      ]
    }
  }
}