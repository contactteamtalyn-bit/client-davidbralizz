import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const colorations = [
  {
    badge: 'Sans ammoniaque · Écoresponsable',
    title: 'Coloration O&M',
    desc: 'Formulée sans ammoniaque, PPD ni résorcinol. Couvrance optimale, résultat naturel. Respectueuse du cuir chevelu.',
  },
  {
    badge: 'Multi-tons · Lumineux',
    title: 'Coloration Kevin Murphy',
    desc: 'COLOR.ME allie naturalité et performance. Résultats sur mesure, lumineux, avec couverture parfaite des cheveux blancs.',
  },
]

export function Colorations() {
  return (
    <section id="colorations" className="bg-tanin-clair py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-tanin">Colorations</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              La couleur
              <br />
              <em className="italic text-tanin">sur mesure.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {colorations.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="flex h-full flex-col border border-cuivre/25 bg-ivoire p-9 transition-colors duration-300 hover:border-tanin md:p-11">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-cuivre">{c.badge}</span>
                <h3 className="mt-5 font-display text-[28px] text-noir">{c.title}</h3>
                <p className="mt-4 flex-1 font-sans text-[15px] font-light leading-relaxed text-noir/75">{c.desc}</p>
                <DemoCTA
                  ariaLabel={`En savoir plus sur ${c.title}`}
                  className="link-underline mt-7 self-start font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-tanin"
                >
                  En savoir plus →
                </DemoCTA>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
