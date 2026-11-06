import Experience from './experience';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [{
    '@type': 'Organization',
    '@id': 'https://legacyestatecapital.com/#organization',
    name: 'Legacy Estate Capital',
    url: 'https://legacyestatecapital.com',
    logo: 'https://legacyestatecapital.com/brand-sheet.webp',
    founder: {
      '@type': 'Person',
      name: 'Colette Louise'
    },
    description: 'Administrative real estate transaction coordination and disposition closing support.',
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    }
  }, {
    '@type': 'WebSite',
    '@id': 'https://legacyestatecapital.com/#website',
    url: 'https://legacyestatecapital.com',
    name: 'Legacy Estate Capital',
    publisher: {
      '@id': 'https://legacyestatecapital.com/#organization'
    }
  }]
};
export default function Page() {
  return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema)
    }} />
  <Experience />
  </>;
}
