import type { Metadata } from 'next'
import '@payloadcms/next/css'

export const metadata: Metadata = {
  title: 'FlexLED Admin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
