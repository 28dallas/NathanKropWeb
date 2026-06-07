import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nathan Krop — Full-Stack Engineer & Creative Artist',
  description:
    'Portfolio of Nathan Krop (PrinceBreezy / NatePrince) — Full-Stack Software Engineer, Media Creator, and Writer based in Nairobi & Eldoret, Kenya.',
  keywords: [
    'Nathan Krop',
    'PrinceBreezy',
    'NatePrince',
    'Full-Stack Engineer',
    'Next.js',
    'React',
    'Kenya',
    'Nairobi',
    'Software Engineer',
    'Web Developer',
  ],
  authors: [{ name: 'Nathan Krop', url: 'https://github.com/28dallas' }],
  openGraph: {
    title: 'Nathan Krop — Full-Stack Engineer & Creative Artist',
    description: 'Building clean code that tells a story.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
