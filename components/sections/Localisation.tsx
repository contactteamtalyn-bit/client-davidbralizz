import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Localisation() {
  return (
    <section id="contact" className="bg-tanin py-24 text-ivoire md:py-32">
      <div className="wrap grid items-stretch gap-12 md:grid-cols-2 md:gap-16">
        {/* Infos */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-ivoire/60">— Nous trouver</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 font-display" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.8rem)', lineHeight: 1 }}>
              62, Rue
              <br />
              <em className="italic">Tiquetonne.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-8 space-y-6 font-sans text-[15px] font-light leading-relaxed text-ivoire/85">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-ivoire/50">Adresse</p>
                <p className="mt-1">62 Rue Tiquetonne · 75002 Paris · Quartier Montorgueil</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-ivoire/50">Contacts</p>
                <p className="mt-1">Tél : 01 42 28 00 88</p>
                <p>WhatsApp : +33 6 23 91 14 97</p>
                <p>Instagram : @davidbralizz</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-ivoire/50">E-shop</p>
                <p className="mt-1">boutique.davidbralizz.com</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-ivoire/50">Horaires</p>
                <p className="mt-1 italic text-ivoire/60">[ à confirmer lors de la finalisation ]</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={190}>
            <div className="mt-9 flex flex-wrap gap-3">
              <DemoCTA
                ariaLabel="Prendre rendez-vous"
                className="bg-ivoire px-7 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-tanin transition-colors hover:bg-noir hover:text-ivoire"
              >
                Prendre RDV →
              </DemoCTA>
              <DemoCTA
                ariaLabel="Contacter par WhatsApp"
                className="border border-ivoire/40 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ivoire transition-colors hover:bg-ivoire hover:text-tanin"
              >
                WhatsApp →
              </DemoCTA>
              <DemoCTA
                ariaLabel="Accéder à l'e-shop"
                className="border border-ivoire/40 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ivoire transition-colors hover:bg-ivoire hover:text-tanin"
              >
                E-shop →
              </DemoCTA>
            </div>
          </Reveal>
        </div>

        {/* Carte */}
        <Reveal delay={120}>
          <div className="relative h-full min-h-[400px] overflow-hidden border border-ivoire/30">
            <iframe
              title="David Bralizz — 62 Rue Tiquetonne, Paris 2e"
              src="https://www.google.com/maps?q=62+Rue+Tiquetonne+75002+Paris&output=embed"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, filter: 'sepia(0.2) saturate(0.9) contrast(0.95)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
