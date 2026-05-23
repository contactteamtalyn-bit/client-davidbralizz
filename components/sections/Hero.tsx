import { SilkWave } from '@/components/ui/SilkWave'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

const line1 = ['Le', 'cheveu']
const line2 = ['sublimé', 'à', "l'état"]

export function Hero() {
  let k = 0
  const word = (w: string) => {
    const d = 0.2 + k * 0.09
    k++
    return (
      <span key={w} className="mr-[0.2em] inline-block animate-fade-up" style={{ animationDelay: `${d}s` }}>
        {w}
      </span>
    )
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivoire pb-20 pt-[148px] md:pt-[128px]"
    >
      {/* Vague de soie / tanin — sweep gauche → droite au load */}
      <div aria-hidden className="silk-load pointer-events-none absolute inset-0 z-0">
        <SilkWave opacity={0.16} />
      </div>
      <div aria-hidden className="silk-load-2 pointer-events-none absolute inset-0 z-0">
        <SilkWave opacity={0.08} double={false} />
      </div>

      <div className="wrap-wide relative z-10 grid w-full items-center gap-12 md:grid-cols-[55fr_45fr] md:gap-14">
        {/* Texte */}
        <div>
          <p className="eyebrow animate-fade-up text-tanin">Expert lissage tanin · Paris · Depuis +15 ans</p>
          <span className="my-5 block h-px w-10 animate-fade-up bg-tanin" style={{ animationDelay: '0.1s' }} aria-hidden />
          <h1 className="font-display text-noir" style={{ fontSize: 'clamp(3.2rem,7vw,6.2rem)', lineHeight: 0.95 }}>
            <span className="block">{line1.map(word)}</span>
            <span className="block">{line2.map(word)}</span>
            <span className="block animate-fade-up italic text-tanin" style={{ animationDelay: `${0.2 + k * 0.09}s` }}>
              naturel.
            </span>
          </h1>
          <p
            className="mt-7 max-w-[430px] animate-fade-up font-sans text-[17px] font-light leading-relaxed text-noir/65"
            style={{ animationDelay: '0.72s' }}
          >
            Lissage au tanin, soins sur mesure, coloration haut de gamme. 62 Rue Tiquetonne, Montorgueil, Paris.
          </p>
          <p className="mt-5 animate-fade-up font-sans text-[13px] tracking-wide text-tanin" style={{ animationDelay: '0.8s' }}>
            4,8★ · 1 529 avis Google · +15 ans d&apos;expérience
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up" style={{ animationDelay: '0.88s' }}>
            <DemoCTA
              ariaLabel="Faire mon diagnostic"
              className="bg-tanin px-9 py-4 font-sans text-[14px] font-medium tracking-wider text-ivoire transition-colors duration-300 hover:bg-noir"
            >
              Faire mon diagnostic →
            </DemoCTA>
            <a
              href="#realisations"
              className="link-underline font-sans text-[14px] text-cuivre transition-transform duration-300 hover:translate-x-1"
            >
              Voir les réalisations ↓
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[440px] animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <SmartImage
              src="/images/hero/cheveux-lisses.jpg"
              alt="Cheveux lisses et soyeux — lissage au tanin, David Bralizz"
              fill
              priority
              sizes="(max-width:768px) 100vw, 440px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(125,78,45,0.20), transparent 36%)' }}
            />
          </div>
          <div className="absolute -left-4 bottom-8 border border-tanin bg-ivoire px-4 py-2.5" style={{ transform: 'rotate(-6deg)' }}>
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-tanin">
              1 529 avis <span className="text-cuivre">★ 4,8</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
