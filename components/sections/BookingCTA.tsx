import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SilkWave } from '@/components/ui/SilkWave'
import { DemoCTA } from '@/components/DemoModal'

export function BookingCTA() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-ivoire py-24 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 animate-silk-flow">
        <SilkWave opacity={0.05} />
      </div>

      <div className="wrap relative z-10">
        <Reveal>
          <p className="eyebrow text-tanin">Votre prochaine séance</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-noir" style={{ fontSize: 'clamp(3rem,8vw,6rem)', lineHeight: 0.98 }}>
            Votre cheveu
            <br />
            <em className="italic text-tanin">vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-[440px] font-sans text-[18px] font-light leading-relaxed text-noir/60">
            Diagnostic personnalisé. Technique sur mesure. 62 Rue Tiquetonne, Montorgueil.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA
              ariaLabel="Faire mon diagnostic"
              className="bg-tanin px-10 py-4 font-sans text-[14px] font-semibold tracking-wider text-ivoire transition-colors duration-300 hover:bg-noir"
            >
              Faire mon diagnostic →
            </DemoCTA>
            <a href="tel:+33142280088" className="link-underline font-sans text-[14px] font-light text-tanin">
              Appeler · 01 42 28 00 88
            </a>
            <DemoCTA
              ariaLabel="Contacter par WhatsApp"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-light text-cuivre transition-colors hover:text-tanin"
            >
              <MessageCircle size={16} /> WhatsApp
            </DemoCTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
