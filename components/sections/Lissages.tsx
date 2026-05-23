import { Reveal } from '@/components/ui/Reveal'
import { SilkWave } from '@/components/ui/SilkWave'
import { DemoCTA } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

type Lissage = {
  badge: string
  title: string
  sub: string
  desc: string
  bg: string
  border: string
  tag?: string
  feature?: boolean
}

const lissages: Lissage[] = [
  {
    badge: 'Notre signature',
    title: 'Lissage au Tanin',
    sub: 'Taninothérapie végétale',
    desc: "Issu de l'écorce de tanin, ce lissage discipline et sublime votre chevelure en respectant la fibre capillaire. Résultat naturel, souple et brillant. Sans formol.",
    tag: 'Naturel · Durable · Respectueux',
    bg: 'bg-tanin-clair',
    border: 'border-tanin/35',
    feature: true,
  },
  {
    badge: 'Douceur maximale',
    title: 'Lissage Enzymothérapie',
    sub: 'Réparation enzymatique',
    desc: 'Des enzymes réparatrices qui lissent en douceur, renforcent et protègent la fibre. Le lissage idéal pour les cheveux sensibles ou abîmés.',
    bg: 'bg-ivoire',
    border: 'border-cuivre/25',
  },
  {
    badge: 'Efficacité durable',
    title: 'Lissage Lana',
    sub: 'Détente longue durée',
    desc: 'Performance et longévité. Le Lissage Lana détend durablement la chevelure, facilite le coiffage au quotidien et améliore la texture du cheveu.',
    bg: 'bg-creme',
    border: 'border-cuivre/25',
  },
]

export function Lissages() {
  return (
    <section id="lissages" className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-tanin">Nos lissages</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Trois techniques.
              <br />
              <em className="italic text-tanin">Un résultat parfait.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-[500px] font-sans text-[17px] font-light leading-relaxed text-noir/65">
              Chaque chevelure est unique. Nous choisissons ensemble la technique la plus adaptée à votre
              fibre, vos objectifs et votre mode de vie.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {lissages.map((l, i) => (
            <Reveal key={l.title} delay={i * 110}>
              <article
                className={cn(
                  'silk-card relative flex h-full flex-col overflow-hidden border p-8 md:p-9 transition-colors duration-300 hover:border-tanin',
                  l.bg,
                  l.border,
                  l.feature && 'lg:-mt-4 lg:pb-12'
                )}
              >
                <div aria-hidden className="silk-bg pointer-events-none absolute inset-0 z-0">
                  <SilkWave opacity={0.14} double={false} />
                </div>
                <div className="relative z-10 flex h-full flex-col">
                  <span
                    className={cn(
                      'font-sans text-[10px] font-bold uppercase tracking-[0.16em]',
                      l.feature ? 'text-tanin' : 'text-cuivre'
                    )}
                  >
                    {l.badge}
                  </span>
                  <h3 className="mt-5 font-display text-[30px] leading-tight text-noir">{l.title}</h3>
                  <p className="mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-cuivre">{l.sub}</p>
                  <p className="mt-4 flex-1 font-sans text-[15px] font-light leading-relaxed text-noir/75">{l.desc}</p>
                  {l.tag && (
                    <span className="mt-5 inline-block self-start bg-tanin px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.12em] text-ivoire">
                      {l.tag}
                    </span>
                  )}
                  <DemoCTA
                    ariaLabel={`En savoir plus sur ${l.title}`}
                    className="link-underline mt-7 self-start font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-tanin"
                  >
                    En savoir plus →
                  </DemoCTA>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
