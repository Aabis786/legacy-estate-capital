import './styles.css';
export const metadata = {
  metadataBase: new URL('https://legacyestatecapital.com'),
  title: 'Nationwide Transaction Coordination | Legacy Estate Capital',
  description: 'Real estate transaction coordination and disposition closing support. Documents, public records, deadlines, county recording and title coordination with Legacy Estate Capital.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Your next closing, with clarity. | Legacy Estate Capital',
    description: 'Administrative real estate transaction coordination, from executed agreement through closing.',
    url: 'https://legacyestatecapital.com',
    siteName: 'Legacy Estate Capital',
    type: 'website',
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630
    }]
  },
  icons: {
    icon: "/icon.svg"
  },
  twitter: {
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true
  }
};
export default function RootLayout({
  children
}) {
  return <html lang="en"><body>{children}</body></html>;
}
