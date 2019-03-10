module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'ilusons\' Blog', // Navigation and Site Title
  siteTitleAlt: 'ilusons\' Blog', // Alternative Site title for SEO
  siteTitleManifest: 'ilusons\' Blog',
  siteUrl: 'http://blog.ilusons.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'ilusons\' Blog', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.png', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'A minimal Blog with a focus on software development things.', // Your site description
  author: 'ilusons', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  //userTwitter: '@minimal', // Twitter Username - Optional
  //ogSiteName: 'minimal', // Facebook Site Name - Optional
  //ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-82826377-2',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
