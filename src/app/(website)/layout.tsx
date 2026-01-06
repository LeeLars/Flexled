import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'FlexLED | LED-scherm huren in West- & Oost-Vlaanderen',
    template: '%s | FlexLED',
  },
  description: 'LED-scherm huren in West- en Oost-Vlaanderen? FlexLED levert mobiele LED-schermen (6m², 8m², 16m²) voor events, festivals en bedrijven. Vraag nu een offerte aan!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
