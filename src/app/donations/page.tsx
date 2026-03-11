import DoacaoForm from '@/components/shared/DonationForm'
import { Metadata } from 'next'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP e contribua com a comunidade surda do Estado de São Paulo.',
}

export default function DoacoesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-24 px-4 relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #F26522 0%, #d4501a 50%, #1B3A6B 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
            <Heart className="text-white" size={30} fill="white" />
          </div>
          <p className="section-label text-white/70 mb-3">Faça a diferença</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Doe para a ASESP
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
            Sua contribuição fortalece a luta pelos direitos da comunidade surda paulista.
            Com o seu apoio, promovemos inclusão, educação bilíngue e acessibilidade em SP.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">

        {/* Form */}
        <section aria-labelledby="form-titulo">
          <p className="section-label text-[#1B3A6B] mb-3">Contribuir</p>
          <h2 id="form-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-3 tracking-tight">
            Registre sua doação
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Preencha o formulário abaixo e receba as instruções de pagamento via PIX.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-[#eef2f8] shadow-sm">
            <DoacaoForm />
          </div>
        </section>

      </div>
    </main>
  )
}
