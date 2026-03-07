import ContatoForm from '@/components/shared/ContactForm'
import { Metadata } from 'next'
import { MapPin, Mail, MessageSquare, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | ASESP',
  description: 'Entre em contato com a ASESP — Associação dos Surdos do Estado de São Paulo.',
}

const infos = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'São Paulo, SP — Brasil',
    color: '#1B3A6B',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@asesp.org.br',
    href: 'mailto:contato@asesp.org.br',
    color: '#F26522',
  },
  {
    icon: Clock,
    label: 'Atendimento',
    value: 'Respondemos em até 3 dias úteis',
    color: '#00B4D8',
  },
]

export default function ContatoPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F26522, transparent)' }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <MessageSquare size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Fale conosco</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Contato</h1>
          <p className="text-white/60 text-lg">
            Entre em contato para dúvidas, parcerias ou suporte à comunidade surda.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Info cards */}
          <section aria-labelledby="info-titulo">
            <p className="section-label text-[#F26522] mb-3">Informações</p>
            <h2 id="info-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-7 tracking-tight">
              Como nos encontrar
            </h2>
            <div className="space-y-4">
              {infos.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F7FA] border border-[#eef2f8]"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${info.color}18` }}
                    >
                      <Icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#1B3A6B] font-semibold text-sm hover:text-[#F26522] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#1B3A6B] font-semibold text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social note */}
            <div className="mt-8 p-5 rounded-2xl border border-[#00B4D8]/30 bg-[#e6f9fd]">
              <p className="text-sm text-[#0099b8] font-semibold mb-1">📲 Também estamos nas redes sociais!</p>
              <p className="text-sm text-gray-500">
                Siga a ASESP no Instagram, YouTube e Facebook para novidades da comunidade surda.
              </p>
            </div>
          </section>

          {/* Form */}
          <section aria-labelledby="form-contato-titulo">
            <p className="section-label text-[#1B3A6B] mb-3">Mensagem</p>
            <h2 id="form-contato-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-7 tracking-tight">
              Envie uma mensagem
            </h2>
            <div className="bg-white rounded-2xl p-7 border border-[#eef2f8] shadow-sm">
              <ContatoForm />
            </div>
          </section>

        </div>

        {/* Mapa */}
        <section aria-labelledby="mapa-titulo" className="mt-12">
          <p className="section-label text-[#00B4D8] mb-3">Localização</p>
          <h2 id="mapa-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-6 tracking-tight">
            Como chegar
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[#eef2f8] shadow-sm">
            <iframe
              title="Localização da AVS — Rua Angaturama, 623"
              src="https://maps.google.com/maps?q=Rua+Angaturama,+623,+São+Paulo,+SP&output=embed&z=16"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3">
            📍 Rua Angaturama, 623 — São Paulo, SP
          </p>
        </section>

      </div>
    </main>
  )
}
