import Hero from '@/components/sections/Hero'
import NewsSection from '@/components/sections/NewsSection'
import EventsSection from '@/components/sections/EventsSection'
import DonationsCTA from '@/components/sections/DonationsCTA'
import PartnersSection from '@/components/sections/PartnersSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASESP — Associação de Surdos do Estado de São Paulo',
  description: 'A ASESP representa e defende os direitos da comunidade surda paulista. Apoie a nossa causa.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsSection />
      <DonationsCTA />
      <EventsSection />
      <PartnersSection />
    </main>
  )
}
