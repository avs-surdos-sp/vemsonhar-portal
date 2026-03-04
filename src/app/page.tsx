import Hero from '@/components/sections/Hero'
import MissaoSection from '@/components/sections/MissaoSection'
import ImpactoSection from '@/components/sections/ImpactoSection'
import DoacoesCTA from '@/components/sections/DoacoesCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASESP — Associação dos Surdos do Estado de São Paulo',
  description: 'A ASESP representa e defende os direitos da comunidade surda paulista. Associe-se e apoie nossa causa.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MissaoSection />
      <ImpactoSection />
      <DoacoesCTA />
    </main>
  )
}
