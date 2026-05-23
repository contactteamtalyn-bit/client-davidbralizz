import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LExpertise } from '@/components/sections/LExpertise'
import { Lissages } from '@/components/sections/Lissages'
import { DiagnosticBralizz } from '@/components/sections/DiagnosticBralizz'
import { Soins } from '@/components/sections/Soins'
import { Colorations } from '@/components/sections/Colorations'
import { Realisations } from '@/components/sections/Realisations'
import { Avis } from '@/components/sections/Avis'
import { LeSalon } from '@/components/sections/LeSalon'
import { Localisation } from '@/components/sections/Localisation'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatStrip />
      <LExpertise />
      <Lissages />
      <DiagnosticBralizz />
      <Soins />
      <Colorations />
      <Realisations />
      <Avis />
      <LeSalon />
      <Localisation />
      <BookingCTA />
      <Footer />
    </main>
  )
}
