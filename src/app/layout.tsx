import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neithan.K Portfolio — Full-Stack Engineer & Creative Dev',
  description:
    'Portfolio of Neithan.K (NatePrince) — Full-Stack Software Engineer, Media Creator, and Writer based in Nairobi & Eldoret, Kenya.',
  keywords: [
    'Neithan K',
    'NatePrince',
    'Full-Stack Engineer',
    'Next.js',
    'React',
    'Kenya',
    'Nairobi',
    'Software Engineer',
    'Web Developer',
  ],
  authors: [{ name: 'Neithan K', url: 'https://github.com/28dallas' }],
  openGraph: {
    title: 'Neithan.K Portfolio — Full-Stack Engineer & Creative Dev',
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
