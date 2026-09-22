/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hexaroot Ventures',
  description: 'Building the next generation of digital growth and venture value.',
  metadataBase: new URL('https://hexarootventures.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
