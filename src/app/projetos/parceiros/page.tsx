import { Metadata } from 'next'
import { Handshake, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parcerias Institucionais | ASESP',
  description: 'Conheça as organizações que caminham ao lado da ASESP em prol da comunidade surda.',
}

export default function ParceirosPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }} aria-labelledby="parceiros-titulo">
        <h1 id="parceiros-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Parcerias Institucionais
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Organizações de governo, educação e sociedade civil que apoiam a ASESP na construção de uma sociedade mais inclusiva.
        </p>
      </section>

      {/* Em breve */}
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: '#0069B418' }}>
          <Clock size={30} className="text-[#0069B4]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#14387F] mb-3">Conteúdo em breve</h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
          Estamos preparando as informações sobre as parcerias institucionais da ASESP. Em breve tudo estará disponível aqui.
        </p>
      </div>
    </main>
  )
}
