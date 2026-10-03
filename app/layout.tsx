import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'myrna link tree',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/image1.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image1.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/image3.jpeg',
        type: 'image/jpeg',
      },
    ],
    apple: '/image1.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
