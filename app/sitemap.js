export const dynamic = 'force-static';
export default function sitemap() {
  return ['', 'privacy/', 'terms/', 'disclaimer/'].map(p => ({
    url: 'https://legacyestatecapital.com/' + p,
    lastModified: '2026-10-13',
    changeFrequency: p ? 'yearly' : 'monthly',
    priority: p ? .3 : 1
  }));
}
