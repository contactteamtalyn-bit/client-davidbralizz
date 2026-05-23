import type { Metadata } from 'next'
import { Marcellus, Karla } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModal'
import { DemoBanner } from '@/components/DemoBanner'
import { Navigation } from '@/components/Navigation'

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
  display: 'swap',
  adjustFontFallback: false,
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'David Bralizz — Expert Lissage Tanin · Soins · Coloration · Paris Montorgueil',
  description:
    'Salon expert en lissage au tanin, soins capillaires sur mesure et colorations haut de gamme. 62 Rue Tiquetonne, Montorgueil, Paris 2e. 4,8★ · 1 529 avis Google.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${marcellus.variable} ${karla.variable} font-sans bg-ivoire text-noir antialiased`}>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
