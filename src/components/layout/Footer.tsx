import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react'

const linksInstitucionais = [
  { href: '/about',   label: 'Quem Somos' },
  { href: '/board',   label: 'Diretoria'  },
  { href: '/contact', label: 'Contato'    },
]

const linksProjetos = [
  { href: '/projects/nucleos', label: 'Núcleos e Projetos'      },
  { href: '/partners',         label: 'Parcerias Institucionais' },
  { href: '/how-to-join',      label: 'Seja Associado'          },
  { href: '/donations',        label: 'Faça uma Doação'         },
]

const linksTransparencia = [
  { href: '/transparencia/relatorios',     label: 'Relatórios Anuais'        },
  { href: '/transparencia/demonstrativo',  label: 'Demonstrativo Financeiro' },
  { href: '/transparencia/editais',        label: 'Editais e Parcerias'      },
  { href: '/transparencia/projetos',       label: 'Projetos Aprovados'       },
]

const linksNoticias = [
  { href: '/news', label: 'Últimas Notícias' },
  { href: '/blog', label: 'Blog / Artigos'   },
]

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/avemsonhar/',
    label: 'Instagram da ASESP',
    hoverBg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    color: '#bc1888',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/avemsonhar/',
    label: 'LinkedIn da ASESP',
    hoverBg: '#0A66C2',
    color: '#0A66C2',
  },
]

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, #1B3A6B 0%, #0d2347 100%)' }}
    >
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #F26522, #00B4D8, #F26522)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Identidade — ocupa 2 colunas no lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/logo-avs.svg"
                alt="AVS — Associação de Surdos do Estado de São Paulo"
                width={200}
                height={75}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-xs text-justify">
              Associação de Surdos do Estado de São Paulo. Representando e defendendo os direitos da comunidade surda paulista desde 2017.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, hoverBg, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon w-11 h-11 rounded-lg flex items-center justify-center border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ '--social-bg': hoverBg, '--social-color': color } as React.CSSProperties}
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>

            {/* Contato rápido */}
            <div className="mt-6 space-y-2">
              <a href="mailto:contato@avemsonhar.org.br" className="flex items-center gap-2 text-base text-white/60 hover:text-[#00B4D8] transition-colors">
                <Mail size={16} className="shrink-0" />
                contato@avemsonhar.org.br
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Angaturama,+623,+São+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-white/60 hover:text-[#00B4D8] transition-colors"
              >
                <MapPin size={16} className="shrink-0" />
                Rua Angaturama, 623 — São Paulo, SP
              </a>
            </div>
          </div>

          {/* Links Institucionais */}
          <div>
            <p className="font-semibold text-base mb-4 text-white">Institucional</p>
            <ul className="space-y-2.5">
              {linksInstitucionais.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-white/60 hover:text-white hover:font-bold transition-all duration-150 leading-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Projetos */}
          <div>
            <p className="font-semibold text-base mb-4 text-white">Projetos</p>
            <ul className="space-y-2.5">
              {linksProjetos.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-base text-white/60 hover:text-white hover:font-bold transition-all duration-150 leading-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Transparência */}
          <div>
            <p className="font-semibold text-base mb-4 text-white">Transparência</p>
            <ul className="space-y-2.5">
              {linksTransparencia.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-white/60 hover:text-white hover:font-bold transition-all duration-150 leading-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Notícias */}
          <div>
            <p className="font-semibold text-base mb-4 text-white">Notícias</p>
            <ul className="space-y-2.5">
              {linksNoticias.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-white/60 hover:text-white hover:font-bold transition-all duration-150 leading-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-base text-white/40">
          <p>© {new Date().getFullYear()} ASESP - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
