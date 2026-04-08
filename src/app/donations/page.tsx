import { Metadata } from 'next'
import { Heart, QrCode, CheckCircle, MessageCircle, Shield, Users, BookOpen, Accessibility, Star } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP – Vem Sonhar e contribua com a comunidade surda do Estado de São Paulo.',
}

const CHAVE_PIX = '11937760888'

const impactos = [
  { texto: 'Promover acessibilidade em Libras',                  icon: BookOpen,      color: '#1B3A6B' },
  { texto: 'Realizar eventos inclusivos sociais',                icon: Users,         color: '#F26522' },
  { texto: 'Apoiar mulheres surdas',                             icon: Heart,         color: '#DB2777' },
  { texto: 'Desenvolver projetos para idosos surdos',            icon: Star,          color: '#00B4D8' },
  { texto: 'Fortalecer a autonomia e cidadania da comunidade surda', icon: Accessibility, color: '#16A34A' },
]

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
          <p className="section-label text-white/70 mb-3">Apoie a ASESP – Vem Sonhar</p>
          <h1 id="doacoes-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contribua e transforme vidas
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
            A ASESP-VS atua na promoção da inclusão social, educacional e cultural da comunidade surda,
            desenvolvendo projetos em Libras, ações de cidadania e apoio a públicos em situação de
            vulnerabilidade, como mulheres e idosos surdos.
          </p>
          <p className="text-white/60 text-base mt-3">
            Para continuar esse trabalho, contamos com a sua colaboração.
          </p>
          <LibrasVideo title="Doações para a ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">

        {/* Por que sua doação é importante */}
        <section aria-labelledby="impacto-titulo">
          <p className="section-label text-[#F26522] mb-3">Por que sua doação é importante?</p>
          <h2 id="impacto-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-6 tracking-tight">
            Sua contribuição permite:
          </h2>
          <ul className="list-none space-y-3">
            {impactos.map((item, i) => {
              const Icon = item.icon
              return (
                <li key={item.texto} className="flex items-center gap-5">
                  <div
                    className="w-1 self-stretch rounded-full shrink-0"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <span className="text-gray-700 text-base font-medium">{item.texto}</span>
                </li>
              )
            })}
          </ul>
        </section>

        {/* PIX */}
        <section aria-labelledby="pix-titulo">
          <p className="section-label text-[#1B3A6B] mb-3">Como doar</p>
          <h2 id="pix-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-3 tracking-tight">
            PIX — rápido e seguro
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Use a chave abaixo para fazer uma transferência PIX de qualquer valor.
            Você pode copiar o número ou escanear o QR Code.
          </p>

          <div className="rounded-2xl border border-[#eef2f8] bg-white shadow-sm overflow-hidden">
            <div className="p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#00B4D818' }}>
                <QrCode size={26} className="text-[#00B4D8]" aria-hidden="true" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Chave PIX (WhatsApp)</p>
                <p className="font-mono text-2xl font-bold text-gray-900 select-all">{CHAVE_PIX}</p>
                <p className="text-xs text-gray-700 mt-1">Selecione e copie a chave acima</p>
              </div>
            </div>

            <div className="border-t-4 border-[#F26522] bg-[#FEF2EC] px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-9 h-9 rounded-xl bg-[#F26522] flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#F26522] mb-1">Importante</p>
                  <p className="text-sm font-medium text-gray-800">
                    Após realizar a doação, envie o comprovante para o WhatsApp da ASESP para que possamos registrar sua contribuição.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5511937760888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shrink-0"
              >
                <MessageCircle size={16} />
                Enviar comprovante
              </a>
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section aria-labelledby="transparencia-titulo" className="rounded-2xl border border-[#eef2f8] bg-[#F5F7FA] p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1B3A6B] flex items-center justify-center shrink-0">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h2 id="transparencia-titulo" className="font-extrabold text-[#1B3A6B] text-lg mb-2">
                Transparência e compromisso
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A ASESP-VS atua com responsabilidade e compromisso social, garantindo que os recursos
                sejam aplicados diretamente em projetos que geram impacto real na vida da comunidade surda.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section
          className="rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #F26522, #1B3A6B)' }}
        >
          <Heart size={32} className="text-white mx-auto mb-4" fill="white" />
          <h2 className="text-2xl font-extrabold text-white mb-3">Faça parte dessa transformação</h2>
          <p className="text-white/75 text-base max-w-md mx-auto">
            Sua doação representa inclusão, acessibilidade e oportunidade.
            Contribua e ajude a transformar vidas de pessoas surdas.
          </p>
        </section>

      </div>
    </main>
  )
}
