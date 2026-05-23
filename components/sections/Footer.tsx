export function Footer() {
  return (
    <footer className="bg-noir-profond py-16 text-ivoire">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[16px] font-bold uppercase tracking-[0.16em] text-ivoire">David Bralizz</p>
            <p className="mt-2 font-display text-[14px] italic text-tanin">
              Expert Lissage Tanin · Montorgueil · Paris
            </p>
          </div>
          <div className="font-sans text-[13px] font-light leading-relaxed text-ivoire/65">
            <p>62 Rue Tiquetonne · 75002 Paris</p>
            <p className="mt-1">01 42 28 00 88 · @davidbralizz · boutique.davidbralizz.com</p>
          </div>
        </div>

        {/* Bandeau anti-vol */}
        <div className="mt-12 border border-tanin/40 bg-noir/40 p-5 text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-cuivre">
            ⚠ Maquette démonstration non finale
          </p>
          <p className="mt-2 font-sans text-[12px] font-light leading-relaxed text-ivoire/60">
            Site créé par Maison Talyn —{' '}
            <a
              href="https://instagram.com/maison.talyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cuivre underline underline-offset-2"
            >
              @maison.talyn
            </a>
            . Tous les contenus sont des placeholders. Contact pour publication : @maison.talyn
          </p>
        </div>

        <p className="mt-8 text-center font-sans text-[11px] text-ivoire/35">
          © {new Date().getFullYear()} David Bralizz · Maquette Maison Talyn
        </p>
      </div>
    </footer>
  )
}
