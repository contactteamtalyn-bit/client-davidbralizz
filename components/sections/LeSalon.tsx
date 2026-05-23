import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const tiles = [
  { src: 'salon-01', span: 'md:col-span-7', h: 'md:h-[380px]', alt: 'Vue du salon — appartement parisien' },
  { src: 'salon-02', span: 'md:col-span-5', h: 'md:h-[380px]', alt: 'Espace & produits du salon' },
  { src: 'salon-03', span: 'md:col-span-12', h: 'md:h-[300px]', alt: 'Les produits — soins capillaires' },
]

export function LeSalon() {
  return (
    <section id="salon" className="bg-ivoire py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-tanin">Le salon</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Un appartement <em className="italic text-tanin">parisien</em> pour votre cheveu.
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-[480px] font-sans text-[17px] font-light leading-relaxed text-noir/65">
              Quartier Montorgueil, 62 Rue Tiquetonne. Un cadre intimiste et chaleureux où chaque séance
              devient une pause.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
            {tiles.map((t) => (
              <div
                key={t.src}
                className={cn('group relative aspect-[4/3] overflow-hidden bg-creme md:aspect-auto', t.span, t.h)}
              >
                <SmartImage
                  src={`/images/salon/${t.src}.jpg`}
                  alt={t.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: 'sepia(0.05) saturate(1.02)' }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
