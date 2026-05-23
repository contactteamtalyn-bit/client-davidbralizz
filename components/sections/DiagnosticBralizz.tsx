'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'
import { SilkWave } from '@/components/ui/SilkWave'
import { DemoCTA } from '@/components/DemoModal'

const questions = [
  { num: '01', title: 'Mon type de cheveu', options: ['Raide', 'Bouclé', 'Frisé', 'Crépu'] },
  { num: '02', title: 'Ma texture capillaire', options: ['Fine', 'Moyenne', 'Épaisse'] },
  { num: '03', title: 'Mon objectif principal', options: ['Lisser intensément', 'Réduire le volume', 'Réparer', 'Définir les boucles'] },
]

function QuestionCard({ q, delay }: { q: (typeof questions)[number]; delay: number }) {
  const [sel, setSel] = useState<number | null>(null)
  return (
    <Reveal delay={delay} className="h-full">
      <div className="relative h-full overflow-hidden border border-ivoire/12 bg-ivoire/[0.03] p-8">
        <span aria-hidden className="pointer-events-none absolute right-1 top-2 font-display text-[5rem] leading-none text-tanin/25">
          {q.num}
        </span>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-cuivre">Étape {q.num}</p>
        <h3 className="mt-3 font-display text-[24px] text-ivoire">{q.title}</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSel(sel === i ? null : i)}
              className={cn(
                'toggle-opt border px-4 py-2.5 font-sans text-[13px] transition-colors duration-300',
                sel === i ? 'is-on border-tanin text-ivoire' : 'border-ivoire/25 text-ivoire/80 hover:border-tanin'
              )}
            >
              <span className="fill" aria-hidden />
              <span>{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function DiagnosticBralizz() {
  return (
    <section id="diagnostic" className="relative overflow-hidden bg-noir py-24 text-ivoire md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 animate-silk-flow">
        <SilkWave opacity={0.06} />
      </div>

      <div className="wrap relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-tanin">— Votre bilan capillaire</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display" style={{ fontSize: 'clamp(3rem,7vw,5.2rem)', lineHeight: 1 }}>
              Le Diagnostic
              <br />
              <em className="italic text-cuivre">Bralizz.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mx-auto mt-6 max-w-[580px] font-sans text-[18px] font-light leading-relaxed text-creme/80">
              En 5 étapes, découvrez quelle technique est faite pour vos cheveux. Gratuit, sans engagement,
              résultat immédiat.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {questions.map((q, i) => (
            <QuestionCard key={q.num} q={q} delay={i * 110} />
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-sans text-[16px] font-light leading-relaxed text-creme/75">
            Ces 3 questions ne sont qu&apos;un aperçu. Le diagnostic complet en 5 étapes vous donnera des
            recommandations précises.
          </p>
          <DemoCTA
            ariaLabel="Lancer mon diagnostic complet"
            className="mt-8 inline-block bg-tanin px-[52px] py-5 font-sans text-[15px] font-semibold tracking-wide text-ivoire transition-colors duration-300 hover:bg-cuivre"
          >
            Lancer mon diagnostic complet →
          </DemoCTA>
        </Reveal>
      </div>
    </section>
  )
}
