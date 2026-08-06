import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react'

const linksInstitucionais = [
  { href: '/sobre',     label: 'Quem Somos' },
  { href: '/diretoria', label: 'Diretoria'  },
  { href: '/contato',   label: 'Contato'    },
]

const linksProjetos = [
  { href: '/projetos/nucleos',   label: 'Núcleos e Projetos'      },
  { href: '/projetos/parceiros', label: 'Parcerias Institucionais' },
  { href: '/doacoes',            label: 'Faça uma Doação'         },
]

const linksTransparencia = [
  { href: '/transparencia/relatorios',     label: 'Relatórios Anuais'   },
  { href: '/transparencia/editais',        label: 'Editais e Parcerias' },
  { href: '/transparencia/projetos',       label: 'Projetos Aprovados'  },
]

const linksNoticias = [
  { href: '/noticias', label: 'Últimas Notícias' },
  { href: '/blog',     label: 'Blog / Artigos'   },
]

const linksLegais = [
  { href: '/privacidade',   label: 'Política de Privacidade' },
  { href: '/termos-de-uso', label: 'Termos de Uso'           },
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
      style={{ background: 'linear-gradient(180deg, #14387F 0%, #061B45 100%)' }}
    >
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #F7931E, #0069B4, #F7931E)' }}
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
                width={280}
                height={105}
                className="footer-logo h-32 w-auto brightness-0 invert"
              />
            </div>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
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
              <a
                href="mailto:contato@avemsonhar.org.br"
                className="flex items-center gap-2 text-base text-white/60 hover:text-white hover:font-bold transition-colors duration-75"
              >
                <Mail size={16} className="shrink-0" />
                contato@avemsonhar.org.br
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Angaturama,+623,+São+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-white/60 hover:text-white hover:font-bold transition-colors duration-75"
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
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-end sm:justify-between gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} · Associação de Surdos do Estado de SP -  Vem Sonhar
          </p>
          <ul className="flex items-center gap-5 list-none ">
            {linksLegais.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-text={l.label}
                  className="link-bold-on-hover hover:text-white hover:font-bold transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
