'use client'

import { useEffect, useState } from 'react'
import { DemoCTA } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Lissages', href: '#lissages' },
  { label: 'Soins', href: '#soins' },
  { label: 'Diagnostic', href: '#diagnostic' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Le salon', href: '#salon' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-[38px] z-50 transition-colors duration-300',
        scrolled ? 'border-b border-tanin/15 bg-ivoire/85 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[22px] tracking-wide text-noir">
          David <span className="italic text-tanin">Bralizz</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[13px] font-medium tracking-wide text-noir/75 transition-colors hover:text-tanin"
            >
              {l.label}
            </a>
          ))}
        </div>

        <DemoCTA
          ariaLabel="Prendre rendez-vous"
          className="bg-tanin px-6 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ivoire transition-colors duration-300 hover:bg-noir"
        >
          Prendre RDV
        </DemoCTA>
      </nav>
    </header>
  )
}
