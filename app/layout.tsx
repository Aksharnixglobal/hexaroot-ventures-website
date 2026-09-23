import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HexaRoot Ventures | Invest. Build. Scale.',
  description: 'HexaRoot Ventures is a Texas-based venture and development company focused on real estate, sports infrastructure, and long-term opportunities.',
  metadataBase: new URL('https://hexarootventures.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
