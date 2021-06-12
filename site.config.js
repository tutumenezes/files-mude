module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '2922007f8dfd4d1f82d6cdd988be973d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ash\'s Knowledge Base',
  domain: 'www.ashinch.com',
  author: 'Ashinch',

  // open graph metadata (optional)
  description: 'Ash的知识库',
  socialImageTitle: 'Ash\'s Knowledge Base',
  socialImageSubtitle: 'by Ashinch',

  // social usernames (optional)
  twitter: '',
  github: 'Ashinch',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://bucket-ashinch.oss-cn-hangzhou.aliyuncs.com/uPic/default-page-icon.png',
  defaultPageCover: 'https://bucket-ashinch.oss-cn-hangzhou.aliyuncs.com/uPic/mac-Monterey-pic.png',
  defaultPageCoverPosition: 0.7,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  includeNotionIdInUrls: true
}
