import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const shots = [
  { src: 'r-01', ratio: 'aspect-[3/4]' },
  { src: 'r-02', ratio: 'aspect-square' },
  { src: 'r-03', ratio: 'aspect-[4/5]' },
  { src: 'r-04', ratio: 'aspect-[4/5]' },
  { src: 'r-05', ratio: 'aspect-[3/4]' },
  { src: 'r-06', ratio: 'aspect-square' },
]

export function Realisations() {
  return (
    <section id="realisations" className="bg-noir py-24 text-ivoire md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-cuivre">— Nos réalisations</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Des résultats
              <br />
              <em className="italic text-cuivre">qui parlent.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-[480px] font-sans text-[17px] font-light leading-relaxed text-creme/75">
              Une galerie de créations sur mesure. Technique maîtrisée, fibre respectée, résultats durables.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="columns-2 gap-2 md:columns-3">
            {shots.map((s) => (
              <div key={s.src} className="group relative mb-2 break-inside-avoid overflow-hidden">
                <div className={cn('relative w-full', s.ratio)}>
                  <SmartImage
                    src={`/images/realisations/${s.src}.jpg`}
                    alt="Réalisation — lissage & coloration, David Bralizz"
                    fill
                    sizes="(max-width:768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-end bg-tanin/0 p-4 transition-colors duration-300 group-hover:bg-tanin/25">
                  <span
                    className="font-sans text-[11px] italic text-ivoire opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
                  >
                    Réalisation David Bralizz · Montorgueil
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12 text-center">
          <DemoCTA
            ariaLabel="Voir toutes nos réalisations"
            className="link-underline font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-cuivre"
          >
            Voir toutes nos réalisations →
          </DemoCTA>
        </Reveal>
      </div>
    </section>
  )
}
