import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LExpertise() {
  return (
    <section className="bg-ivoire py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Texte */}
        <div className="md:col-span-6">
          <Reveal>
            <p className="eyebrow text-tanin">— L&apos;expertise</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Plus qu&apos;un lissage.
              <br />
              <em className="italic text-tanin">Une signature.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-7 max-w-xl font-sans text-[17px] font-light leading-[1.75] text-noir/70">
              Au salon David Bralizz, chaque création est une signature. Le geste est précis, la technique
              maîtrisée, la fibre respectée. Chaque prestation est conçue sur mesure, en harmonie avec la
              matière, la personnalité et le rythme de vie de chaque cliente.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-xl font-sans text-[17px] font-light leading-[1.75] text-noir/70">
              Plus qu&apos;un résultat immédiat, nous recherchons une allure, une élégance durable, une beauté
              qui s&apos;inscrit dans le temps. Le lissage au tanin est notre art de prédilection — végétal,
              respectueux, précis.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <span className="my-8 block h-px w-[60px] bg-cuivre" aria-hidden />
            <div className="flex flex-wrap gap-3">
              <span className="border border-tanin px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-tanin">
                Lissage tanin
              </span>
              <span className="border border-tanin px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-tanin">
                Diagnostic personnalisé
              </span>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={120} className="md:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-cuivre/40 bg-creme">
              <SmartImage
                src="/images/realisations/featured.jpg"
                alt="Résultat lissage au tanin — David Bralizz"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span
              className="absolute -left-3 top-6 inline-block border border-tanin bg-ivoire px-4 py-2 font-sans text-[10px] uppercase tracking-[0.12em] text-tanin"
              style={{ transform: 'rotate(-5deg)' }}
            >
              Montorgueil · Paris 2e
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
