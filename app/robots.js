export const dynamic = 'force-static';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/contact.php']
    },
    sitemap: 'https://legacyestatecapital.com/sitemap.xml'
  };
}
