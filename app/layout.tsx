import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Close Consulting | Freelancer Cold-Calling Jobs',
  description: 'Werde Teil unseres Freelancer-Netzwerks. Fixum + Provision, 100% Remote, fertige Listen & Skripte. Jetzt bewerben!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
      },
    ],
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-[#0d2218]">
      <body className={`${lora.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
