import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marques Scripps - Software Engineer',
  description: 'Software Engineer from the UK',
  colorScheme: 'light',
  authors: {
    name: 'Marques Scripps',
  },
  themeColor: '#a5b4fc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
