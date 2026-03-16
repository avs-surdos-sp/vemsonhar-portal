import { Metadata } from 'next'
import { Heart, QrCode, CheckCircle } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP e contribua com a comunidade surda do Estado de São Paulo.',
}

// TODO: substituir pela chave PIX real da ASESP
const CHAVE_PIX = 'financeiro@avemsonhar.org.br'

export default function DoacoesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-24 px-4 relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #F26522 0%, #d4501a 50%, #1B3A6B 100%)' }}
        aria-labelledby="doacoes-titulo"
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
          <h1 id="doacoes-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Doe para a ASESP
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
            Sua contribuição fortalece a luta pelos direitos da comunidade surda paulista.
            Com o seu apoio, promovemos inclusão, educação bilíngue e acessibilidade em SP.
          </p>
          <LibrasVideo title="Doações para a ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16 space-y-14">

        {/* PIX */}
        <section aria-labelledby="pix-titulo">
          <p className="section-label text-[#1B3A6B] mb-3">Como doar</p>
          <h2 id="pix-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-3 tracking-tight">
            Transferência via PIX
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Use a chave abaixo para fazer uma transferência PIX de qualquer valor. Após o pagamento,
            envie o comprovante para o e-mail institucional da ASESP.
          </p>

          <div className="rounded-2xl border border-[#eef2f8] bg-white shadow-sm overflow-hidden">

            {/* Chave PIX */}
            <div className="p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#00B4D818' }}>
                <QrCode size={26} className="text-[#00B4D8]" aria-hidden="true" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Chave PIX</p>
                <p className="font-mono text-xl font-bold text-[#1B3A6B] select-all">{CHAVE_PIX}</p>
                <p className="text-xs text-gray-400 mt-1">Selecione e copie a chave acima</p>
              </div>
            </div>

            <div className="border-t border-[#eef2f8] bg-[#F5F7FA] px-8 py-4 flex items-start gap-3">
              <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-gray-500">
                Qualquer valor é bem-vindo. Após a transferência, envie o comprovante para{' '}
                <span className="font-semibold text-[#1B3A6B]">contato@avemsonhar.org.br</span>.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
