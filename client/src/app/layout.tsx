import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/C.png',
  },
  title: 'Doclane',
  description: 'AI Powered Spreadsheet Webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>
        <Navbar/>
      {children}</body>
    </html>
  )
}
