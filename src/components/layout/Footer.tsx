import Link from 'next/link'

const footerLinks = {
  producten: [
    { name: 'LED-scherm 6m²', href: '/ledscherm-huren/6m2' },
    { name: 'LED-scherm 8m²', href: '/ledscherm-huren/8m2' },
    { name: 'LED-scherm 16m²', href: '/ledscherm-huren/16m2' },
    { name: 'Mobiel LED-scherm', href: '/mobiel-ledscherm-huren' },
  ],
  toepassingen: [
    { name: 'Bedrijfsevenement', href: '/toepassingen/bedrijfsevenement' },
    { name: 'Festival', href: '/toepassingen/festival' },
    { name: 'Sportwedstrijd', href: '/toepassingen/sportwedstrijd' },
    { name: 'Beurs & Expo', href: '/toepassingen/beurs-of-expo' },
  ],
  regio: [
    { name: 'West-Vlaanderen', href: '/ledscherm-huren/west-vlaanderen' },
    { name: 'Oost-Vlaanderen', href: '/ledscherm-huren/oost-vlaanderen' },
    { name: 'Brugge', href: '/ledscherm-huren/west-vlaanderen/brugge' },
    { name: 'Gent', href: '/ledscherm-huren/oost-vlaanderen/gent' },
  ],
  bedrijf: [
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Realisaties', href: '/realisaties' },
    { name: 'Contact', href: '/contact' },
    { name: 'Offerte aanvragen', href: '/offerte' },
  ],
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-flex">Flex</span>
              <span className="logo-led">LED</span>
            </Link>
            <p className="footer-tagline">
              Mobiele LED-schermen voor events, festivals en bedrijven in West- en Oost-Vlaanderen.
            </p>
            <div className="footer-contact">
              <a href="tel:+32000000000" className="footer-contact-item">
                <svg className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +32 000 00 00 00
              </a>
              <a href="mailto:info@flexled.be" className="footer-contact-item">
                <svg className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@flexled.be
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-column">
            <h4 className="footer-heading">Producten</h4>
            <ul className="footer-links">
              {footerLinks.producten.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-heading">Toepassingen</h4>
            <ul className="footer-links">
              {footerLinks.toepassingen.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-heading">Regio</h4>
            <ul className="footer-links">
              {footerLinks.regio.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-heading">Bedrijf</h4>
            <ul className="footer-links">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} FlexLED. Alle rechten voorbehouden.
          </p>
          <div className="footer-legal">
            <Link href="/privacy-policy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/algemene-voorwaarden" className="footer-legal-link">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
