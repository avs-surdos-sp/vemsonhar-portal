import { Metadata } from 'next'
import { Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Relatórios Anuais | Transparência | ASESP',
  description: 'Relatórios anuais da ASESP — atividades realizadas, impacto social e balanço de associados.',
}

export default function RelatoriosPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">Relatórios Anuais</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Documentos com prestação de contas detalhada das atividades, impacto social e uso dos recursos em cada exercício.
          </p>
        </div>
      </section>

      {/* Em breve */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl shadow-sm py-16 px-8">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ background: '#EAF0FA' }}>
            <Clock size={28} className="text-[#14387F]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387F] tracking-tight mb-3">
            Em breve
          </h2>
          <p className="text-gray-600 text-base max-w-md leading-relaxed">
            Os relatórios anuais estarão disponíveis para consulta em breve nesta página.
          </p>
        </div>
      </div>
    </main>
  )
}
