'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type SubItem = {
  href: string
  label: string
}

type NavLink = {
  href: string
  label: string
  submenu?: SubItem[]
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

const navLinks: NavLink[] = [
  { href: '/sobre',    label: 'Quem Somos' },
  { href: '/diretoria', label: 'Diretoria'  },
  {
    href: '/projetos',
    label: 'Projetos',
    submenu: [
      { href: '/projetos/nucleos',   label: 'Núcleos e Projetos'      },
      { href: '/projetos/parceiros', label: 'Parcerias Institucionais' },
    ],
  },
  {
    href: '/transparencia',
    label: 'Transparência',
    submenu: [
      { href: '/transparencia/relatorios',    label: 'Relatórios Anuais'        },
      { href: '/transparencia/demonstrativo', label: 'Demonstrativo Financeiro' },
      { href: '/transparencia/editais',       label: 'Editais e Parcerias'      },
      { href: '/transparencia/projetos',      label: 'Projetos Aprovados'       },
    ],
  },
  {
    href: '/noticias',
    label: 'Notícias',
    submenu: [
      { href: '/noticias', label: 'Últimas Notícias' },
      { href: '/blog',     label: 'Blog / Artigos'   },
    ],
  },
  { href: '/contato', label: 'Contato' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [menuAberto,     setMenuAberto]     = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled,       setScrolled]       = useState(false)
  const [dropdownOpen,   setDropdownOpen]   = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const pathname = usePathname()

  /* ── Hover handlers ──────────────────────────────────────────────────── */
  const openDropdown = (href: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setDropdownOpen(href)
  }

  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null)
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0)
      setScrolled(y > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuAberto(false)
    setMobileExpanded(null)
    setDropdownOpen(null)
  }, [pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!(e.target as Element).closest('[data-dropdown]')) {
        setDropdownOpen(null)
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [dropdownOpen])

  return (
    <header
      className={`fixed top-12 left-0 right-0 z-50 h-24 border-b border-[#14387F] transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
      style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)' }}
    >
      {/* Linha de acento colorida animada no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-1 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full w-[200%] header-accent-shimmer"
          style={{
            background:
              'linear-gradient(90deg, #14387F 0%, #F7931E 25%, #0069B4 50%, #F7931E 75%, #14387F 100%)',
          }}
        />
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-[#F7931E] transition-all duration-100 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity duration-200"
          aria-label="VemSonhar ASESP — Página inicial"
        >
          <Image
            src="/logo-avs.svg"
            alt="VemSonhar ASESP"
            width={200}
            height={200}
            className="h-15 w-auto"
            priority
          />
        </Link>

        {/* ── Nav desktop ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

            if (link.submenu) {
              const isGroupActive =
                pathname.startsWith(link.href + '/') ||
                pathname === link.href ||
                link.submenu.some((s) => pathname.startsWith(s.href))
              const isOpen = dropdownOpen === link.href

              return (
                <div
                  key={link.href}
                  data-dropdown
                  className="relative"
                  onMouseEnter={() => openDropdown(link.href)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => setDropdownOpen(isOpen ? null : link.href)}
                    onFocus={() => openDropdown(link.href)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`group relative flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      isGroupActive
                        ? 'text-[#14387F] bg-transparent'
                        : 'text-[#14387F] hover:text-[#14387F] hover:bg-transparent'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    {/* Underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-5 h-[2.5px] rounded-full bg-[#F7931E] transition-transform duration-300 origin-center ${
                        isGroupActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 pt-2"
                      role="menu"
                    >
                      <div
                        className="bg-white overflow-hidden min-w-56"
                        style={{ boxShadow: '0 8px 32px rgba(27,58,107,0.13), 0 2px 8px rgba(0,0,0,0.06)' }}
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            onClick={() => setDropdownOpen(null)}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-white hover:bg-[#14387F] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-[#14387F] bg-transparent'
                    : 'text-[#14387F] hover:text-[#14387F] hover:bg-transparent'
                }`}
              >
                {link.label}
                {/* Underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2.5px] rounded-full bg-[#F7931E] transition-transform duration-300 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}

          {/* Separador */}
          <div className="w-px h-6 bg-gray-200 mx-2" aria-hidden="true" />

          <Link
            href="/doacoes"
            className="bg-[#F7931E] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#C27215] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Faça uma Doação
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 text-[#14387F] rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="mobile-menu"
        >
          {menuAberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Nav mobile ── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuAberto ? 'max-h-160 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(27, 58, 107, 0.97)', backdropFilter: 'blur(12px)' }}
        aria-label="Navegação mobile"
      >
        <div className="px-4 py-3 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

            if (link.submenu) {
              const expanded = mobileExpanded === link.href
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileExpanded(expanded ? null : link.href)}
                    aria-expanded={expanded}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-3 pt-1 pb-1 flex flex-col gap-0.5">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMenuAberto(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/8 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/8'
                }`}
                onClick={() => setMenuAberto(false)}
              >
                {link.label}
              </Link>
            )
          })}

          <Link
            href="/doacoes"
            className="mt-2 text-center bg-[#F7931E] text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-[#C27215] transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Faça uma Doação
          </Link>
        </div>
      </div>
    </header>
  )
}
