import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const stats: { to: number; label: string; prefix?: string; format?: boolean }[] = [
  { to: 15, prefix: '+', label: "ans d'expérience" },
  { to: 1529, format: true, label: 'Avis Google ★ 4,8' },
  { to: 3, label: 'Techniques de lissage' },
  { to: 5, label: 'Soins capillaires' },
]

export function StatStrip() {
  return (
    <section className="bg-tanin">
      <div className="grid grid-cols-2 gap-px bg-ivoire/20 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 90} className="bg-tanin px-6 py-14 text-center">
            <CountUp
              to={s.to}
              prefix={s.prefix}
              format={s.format}
              className="block font-display text-[clamp(2.6rem,6vw,5rem)] leading-none text-ivoire"
            />
            <span className="mt-4 block font-sans text-[11px] uppercase tracking-[0.16em] text-ivoire/70">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
