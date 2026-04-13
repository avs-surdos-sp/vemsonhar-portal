import { Metadata } from 'next'
import { Mail, MessageSquare, Instagram, Linkedin } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Contato | ASESP',
  description: 'Entre em contato com a ASESP — Associação dos Surdos do Estado de São Paulo.',
}

// Ícone WhatsApp (lucide não tem, inline SVG)
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

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
          <LibrasVideo title="Contato da ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16 space-y-8">

        {/* E-mail + WhatsApp */}
        <section aria-label="Canais de contato">
          <div className="grid sm:grid-cols-2 gap-4">

            {/* E-mail */}
            <div
              className="rounded-3xl p-8 text-center flex flex-col items-center justify-center gap-3"
              style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F26522]/20">
                <Mail size={22} className="text-[#F26522]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">E-mail</p>
                <p className="font-mono text-base font-bold text-[#F26522] select-all leading-snug">
                  contato@avemsonhar.org.br
                </p>
              </div>
              <p className="text-white/40 text-xs">Respondemos em até 3 dias úteis</p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511937760888"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-8 text-center flex flex-col items-center justify-center gap-3 hover:brightness-110 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/20">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">WhatsApp</p>
                <p className="text-base font-bold text-white">(11) 93776-0888</p>
              </div>
              <p className="text-white/60 text-xs">Clique para abrir conversa</p>
            </a>

          </div>
        </section>

        {/* Redes sociais */}
        <section aria-labelledby="redes-titulo">
          <h2 id="redes-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-5 tracking-tight">
            Redes sociais
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.instagram.com/avemsonhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <Instagram size={18} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Instagram</p>
                <p className="text-sm font-semibold text-[#1B3A6B] group-hover:text-[#F26522] transition-colors">@avemsonhar</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/avemsonhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#0A66C2]">
                <Linkedin size={18} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">LinkedIn</p>
                <p className="text-sm font-semibold text-[#1B3A6B] group-hover:text-[#F26522] transition-colors">avemsonhar</p>
              </div>
            </a>
          </div>
        </section>

        {/* Mapa */}
        <section aria-labelledby="mapa-titulo">
          <h2 id="mapa-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-6 tracking-tight">
            Como chegar
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
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
