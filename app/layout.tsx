import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Woo - Full Stack Developer',
  description: 'Recent Bachelor degree graduate from Oregon State University - Cascades Campus with a passion for full-stack development, teamwork, and continuous learning.',
  keywords: ['Full Stack Developer', 'React', 'Vue.js', 'Node.js', 'Django', 'Flask', 'MongoDB', 'PostgreSQL', 'OSU Cascades Graduate', 'Bend Oregon'],
  authors: [{ name: 'Kevin Woo', email: 'kingcrab9118@gmail.com' }],
  openGraph: {
    title: 'Kevin Woo - Full Stack Developer',
    description: 'Recent OSU Cascades graduate passionate about full-stack development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-secondary-50 text-secondary-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}

