import { Metadata } from 'next'
import { Handshake, Clock } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Núcleos e Projetos | ASESP',
  description: 'Conheça os projetos e núcleos da ASESP — ações voltadas à comunidade surda paulista.',
}

export default function NucleosPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
        aria-labelledby="nucleos-titulo"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #F26522, transparent)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Handshake size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">O que fazemos</span>
          </div>
          <h1 id="nucleos-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Núcleos e Projetos
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ações concretas voltadas à comunidade surda paulista — em todas as fases da vida e em múltiplas dimensões sociais.
          </p>
          <LibrasVideo title="Projetos e Núcleos da ASESP em Libras" />
        </div>
      </section>

      {/* Em breve */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: '#F2652218' }}>
          <Clock size={30} className="text-[#F26522]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#1B3A6B] mb-3">Conteúdo em breve</h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
          Estamos preparando as informações sobre os núcleos e projetos da ASESP. Em breve tudo estará disponível aqui.
        </p>
      </div>
    </main>
  )
}
