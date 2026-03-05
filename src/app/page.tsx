import Hero from '@/components/sections/Hero'
import StatsSection from '@/components/sections/StatsSection'
import AcoesSection from '@/components/sections/ActionsSection'
import ProjetosSection from '@/components/sections/ProjectsSection'
import EventoNoticiasSection from '@/components/sections/EventoNoticiasSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASESP — Associação dos Surdos do Estado de São Paulo',
  description: 'A ASESP representa e defende os direitos da comunidade surda paulista. Associe-se e apoie nossa causa.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <AcoesSection />
      <ProjetosSection />
      <EventoNoticiasSection />
    </main>
  )
}
