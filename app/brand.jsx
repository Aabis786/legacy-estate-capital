function BackgroundRemoval() {
  return <svg width="0" height="0" aria-hidden="true" style={{
    position: 'absolute'
  }}><defs><filter id="legacy-remove-cream" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 -9 0 7" /></filter></defs></svg>;
}
const art = '/brand-sheet.webp';
export function BrandSymbol({
  className = ''
}) {
  return <svg className={className} viewBox="260 110 400 365" aria-hidden="true"><image href={art} width="1536" height="1024" style={{
      filter: "url(#legacy-remove-cream)"
    }} /></svg>;
}
export default function Brand() {
  return <span className="brand-art" role="img" aria-label="Legacy Estate Capital">
  <BackgroundRemoval />
  <BrandSymbol className="brand-symbol" />
  <svg className="brand-wordmark" viewBox="125 495 680 170" aria-hidden="true"><image href={art} width="1536" height="1024" style={{
        filter: "url(#legacy-remove-cream)"
      }} /></svg>
  </span>;
}
export function BrandFull() {
  return <svg className="brand-full" viewBox="95 100 735 615" role="img" aria-label="Legacy Estate Capital — People, Properties, Opportunities"><image href={art} width="1536" height="1024" style={{
      filter: "url(#legacy-remove-cream)"
    }} /></svg>;
}
