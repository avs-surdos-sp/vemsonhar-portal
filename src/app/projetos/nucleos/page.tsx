import { Metadata } from 'next'
import { Handshake, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Núcleos e Projetos | ASESP',
  description: 'Conheça os projetos e núcleos da ASESP — ações voltadas à comunidade surda paulista.',
}

export default function NucleosPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }} aria-labelledby="nucleos-titulo">
        <h1 id="nucleos-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Núcleos e Projetos
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Ações concretas voltadas à comunidade surda paulista — em todas as fases da vida e em múltiplas dimensões sociais.
        </p>
      </section>

      {/* Em breve */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: '#F7931E18' }}>
          <Clock size={30} className="text-[#F7931E]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#14387F] mb-3">Conteúdo em breve</h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
          Estamos preparando as informações sobre os núcleos e projetos da ASESP. Em breve tudo estará disponível aqui.
        </p>
      </div>
    </main>
  )
}
