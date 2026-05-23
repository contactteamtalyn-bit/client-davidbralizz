import { Reveal } from '@/components/ui/Reveal'

// NOTE Talyn : ne JAMAIS inventer d'avis. Placeholders honnêtes —
// à remplacer par de vrais avis Google lors de la finalisation.
const avis = [
  { rot: '-1deg' },
  { rot: '0.8deg' },
  { rot: '-0.4deg' },
]

const PLACEHOLDER = '[ AVIS CLIENT RÉEL À INSÉRER — récupérer depuis Google Maps lors de la finalisation ]'

export function Avis() {
  return (
    <section className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-tanin">1 529 avis Google</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Elles en
              <br />
              <em className="italic text-tanin">parlent mieux.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={i} delay={i * 110}>
              <figure
                className="flex h-full flex-col bg-ivoire p-8 md:[transform:rotate(var(--rot))]"
                style={{ ['--rot' as string]: a.rot, boxShadow: '0 20px 44px -26px rgba(26,23,20,0.35)' }}
              >
                <span aria-hidden className="font-display leading-[0.5] text-tanin" style={{ fontSize: '5rem' }}>
                  «
                </span>
                <blockquote className="-mt-1 font-sans text-[16px] font-light italic leading-[1.7] text-noir/70">
                  {PLACEHOLDER}
                </blockquote>
                <span className="my-5 block h-px w-[40px] bg-cuivre" aria-hidden />
                <figcaption className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-noir">
                  Cliente vérifiée · Google ★ 4,8
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
