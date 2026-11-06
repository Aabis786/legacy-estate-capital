import Brand from './brand';
export default function Legal({
  title,
  children
}) {
  return <>
  <header>
    <a className="brand" href="/"><Brand /></a>
    <a href="/#contact" className="text-link">Contact us ↗</a>
  </header>
  <main className="legal">
    <p className="eyebrow">LAST UPDATED · OCTOBER 13, 2026</p>
    <h1>{title}</h1>
    {children}
    <p><a href="/">← Back to Legacy Estate Capital</a></p>
  </main>
  <footer><div className="footer-bottom">
      <span>© 2026 Legacy Estate Capital</span>
      <nav aria-label="Legal navigation">
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/disclaimer/">Service disclaimer</a>
      </nav>
    </div></footer>
  </>;
}
