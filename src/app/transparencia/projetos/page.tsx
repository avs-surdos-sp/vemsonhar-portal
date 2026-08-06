import { Metadata } from 'next'
import { Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projetos Aprovados | Transparência | ASESP',
  description: 'Projetos da ASESP com financiamento aprovado por órgãos públicos e privados.',
}

export default function ProjetosAprovadosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">Projetos Aprovados</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Projetos da ASESP com financiamento aprovado por órgãos públicos e privados, com impacto direto na comunidade surda.
          </p>
        </div>
      </section>

      {/* Em breve */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl shadow-sm py-16 px-8">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ background: '#FEF2EC' }}>
            <Clock size={28} className="text-[#F7931E]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387F] tracking-tight mb-3">
            Em breve
          </h2>
          <p className="text-gray-600 text-base max-w-md leading-relaxed">
            Os projetos aprovados serão publicados em breve nesta página.
          </p>
        </div>
      </div>
    </main>
  )
}
