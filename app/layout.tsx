import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HexaRoot Ventures | Invest. Build. Scale.',
  description: 'HexaRoot Ventures is a Texas-based venture and development company focused on real estate, sports infrastructure, and long-term opportunities.',
  metadataBase: new URL('https://hexarootventures.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
