import { Metadata } from 'next'
import { Heart, QrCode, MessageCircle, Users, BookOpen, Accessibility, Star } from 'lucide-react'
import CopyPixButton from '@/components/shared/CopyPixButton'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP – Vem Sonhar e contribua com a comunidade surda do Estado de São Paulo.',
}

const CHAVE_PIX = '11937760888'

const impactos = [
  { texto: 'Promover acessibilidade em Libras',                  icon: BookOpen,      color: '#14387F' },
  { texto: 'Realizar eventos inclusivos sociais',                icon: Users,         color: '#F7931E' },
  { texto: 'Apoiar mulheres surdas',                             icon: Heart,         color: '#DB2777' },
  { texto: 'Desenvolver projetos para idosos surdos',            icon: Star,          color: '#0069B4' },
  { texto: 'Fortalecer a autonomia e cidadania da comunidade surda', icon: Accessibility, color: '#16A34A' },
]

export default function DoacoesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #F7931E 0%, #C27215 100%)' }} aria-labelledby="doacoes-titulo">
        <h1 id="doacoes-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Contribua e transforme vidas
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          A AVS promove educação, inclusão e cultura para a comunidade surda com oficinas, eventos e ações de cidadania.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* Sua contribuição permite */}
          <section aria-labelledby="impacto-titulo">
            <p className="section-label text-[#F7931E] mb-2">Contribuição</p>
            <h2 id="impacto-titulo" className="text-xl font-extrabold text-[#14387F] mb-5 tracking-tight">
              Sua doação permite
            </h2>
            <ul className="list-none space-y-2.5">
              {impactos.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.texto} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-900 text-sm font-medium leading-snug">{item.texto}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* PIX — Como doar */}
          <section
            aria-labelledby="pix-titulo"
            className="rounded-2xl border border-[#eef2f8] bg-white shadow-sm overflow-hidden flex flex-col"
          >
            <div className="p-7 flex flex-col flex-1">
              <p className="section-label text-[#14387F] mb-2">Como doar</p>
              <h2 id="pix-titulo" className="text-xl font-extrabold text-[#14387F] mb-5 tracking-tight">
                Doe via PIX
              </h2>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: '#0069B418' }}
                >
                  <QrCode size={28} className="text-[#0069B4]" aria-hidden="true" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Chave PIX · WhatsApp
                </p>
                <p className="font-mono text-2xl font-extrabold text-[#14387F] select-all mb-4 tracking-wide">
                  {CHAVE_PIX}
                </p>

                <CopyPixButton value={CHAVE_PIX} />
              </div>
            </div>

            {/* Importante / WhatsApp */}
            <div className="bg-[#14387F] px-6 py-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={15} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-white mb-1">
                    Importante
                  </p>
                  <p className="text-sm text-white/85 leading-snug">
                    Envie o comprovante pelo WhatsApp para registrarmos sua contribuição.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5511937760888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shadow-green-500/30"
              >
                <MessageCircle size={16} />
                Enviar comprovante
              </a>
            </div>
          </section>

        </div>

      </div>
    </main>
  )
}
