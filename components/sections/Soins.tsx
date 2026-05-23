import { Sparkles, Droplets, Wind, Layers, Zap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const soins = [
  { Icon: Sparkles, title: 'Tokio Inkarami', origin: 'Japon · Haute technologie', desc: 'Répare la fibre en profondeur. Force, brillance et souplesse dès la première séance.' },
  { Icon: Droplets, title: 'Botox Capillaire', origin: 'Hydratation intense', desc: 'Repulpe et lisse la fibre. Cheveux ternes et secs retrouvent éclat et douceur.' },
  { Icon: Wind, title: 'Soin Detox', origin: 'Purification', desc: 'Nettoie et rééquilibre le cuir chevelu. Légèreté et fraîcheur immédiates.' },
  { Icon: Layers, title: 'Soin Collagène', origin: 'Renforcement', desc: 'Comble les porosités, renforce la fibre. Plus de volume et de densité.' },
  { Icon: Zap, title: 'Soin R.I.O', origin: 'Reconstruction extrême', desc: 'Pour les cheveux sévèrement abîmés. Reconstruction en profondeur, anti-casse.' },
]

export function Soins() {
  return (
    <section id="soins" className="bg-ivoire py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-tanin">Nos soins</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1.04 }}>
              Réparer. Nourrir.
              <br />
              <em className="italic text-tanin">Sublimer.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {soins.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="flex h-full flex-col border border-cuivre/20 bg-creme p-8 transition-all duration-300 hover:scale-[1.02] hover:border-tanin">
                <s.Icon size={32} strokeWidth={1.4} className="text-tanin" />
                <h3 className="mt-6 font-display text-[22px] text-noir">{s.title}</h3>
                <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-cuivre">{s.origin}</p>
                <p className="mt-3 font-sans text-[14px] font-light leading-relaxed text-noir/70">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
