'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'LED-schermen',
    href: '/ledscherm-huren',
    children: [
      { name: '6m² - Compact', href: '/ledscherm-huren/6m2' },
      { name: '8m² - Veelzijdig', href: '/ledscherm-huren/8m2' },
      { name: '16m² - XXL', href: '/ledscherm-huren/16m2' },
    ],
  },
  {
    name: 'Regio',
    href: '#',
    children: [
      { name: 'West-Vlaanderen', href: '/ledscherm-huren/west-vlaanderen' },
      { name: 'Oost-Vlaanderen', href: '/ledscherm-huren/oost-vlaanderen' },
    ],
  },
  { name: 'Toepassingen', href: '/toepassingen' },
  { name: 'Realisaties', href: '/realisaties' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="header">
      <nav className="container-custom">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-flex">Flex</span>
            <span className="logo-led">LED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navigation.map((item) => (
              <div key={item.name} className="nav-item-wrapper">
                {item.children ? (
                  <div
                    className="nav-dropdown"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="nav-link">
                      {item.name}
                      <svg
                        className="nav-chevron"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="dropdown-menu">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="dropdown-item"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="header-cta">
            <Link href="/offerte" className="btn-primary">
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="mobile-dropdown">
                    <span className="mobile-nav-label">{item.name}</span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="mobile-nav-link mobile-nav-child"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/offerte"
              className="btn-primary mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offerte aanvragen
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
