'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ChevronDown,
  FileText, BarChart2, ClipboardList, CheckSquare,
  Handshake, Layers, Newspaper, BookOpen,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type SubItem = {
  href: string
  label: string
  icon: React.ElementType
}

type NavLink = {
  href: string
  label: string
  submenu?: SubItem[]
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

const navLinks: NavLink[] = [
  { href: '/about',    label: 'Quem Somos' },
  { href: '/board',    label: 'Diretoria'  },
  {
    href: '/projects',
    label: 'Projetos',
    submenu: [
      { href: '/projects/nucleos',  label: 'Núcleos e Projetos',       icon: Layers    },
      { href: '/partners',  label: 'Parcerias Institucionais', icon: Handshake },
    ],
  },
  {
    href: '/transparency',
    label: 'Transparência',
    submenu: [
      { href: '/transparency/relatorios',    label: 'Relatórios Anuais',        icon: FileText      },
      { href: '/transparency/demonstrativo', label: 'Demonstrativo Financeiro', icon: BarChart2     },
      { href: '/transparency/editais',       label: 'Editais e Parcerias',      icon: ClipboardList },
      { href: '/transparency/projetos',      label: 'Projetos Aprovados',       icon: CheckSquare   },
    ],
  },
  {
    href: '/news',
    label: 'Notícias',
    submenu: [
      { href: '/news', label: 'Últimas Notícias', icon: Newspaper },
      { href: '/blog', label: 'Blog / Artigos',   icon: BookOpen  },
    ],
  },
  { href: '/contact', label: 'Contato' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [menuAberto,     setMenuAberto]     = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrolled,       setScrolled]       = useState(false)
  const [dropdownOpen,   setDropdownOpen]   = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const pathname = usePathname()

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
      className={`fixed top-9 left-0 right-0 z-50 h-16 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#F26522] transition-all duration-100 pointer-events-none"
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
            src="/logo.svg"
            alt="VemSonhar ASESP"
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* ── Nav desktop ── */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

            if (link.submenu) {
              const isGroupActive =
                pathname.startsWith(link.href + '/') ||
                pathname === link.href ||
                link.submenu.some((s) => pathname.startsWith(s.href))
              const isOpen = dropdownOpen === link.href

              return (
                <div key={link.href} data-dropdown className="relative">
                  <button
                    onClick={() => setDropdownOpen(isOpen ? null : link.href)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`group relative flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      isGroupActive
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-5 h-[2px] rounded-full bg-[#F26522] transition-transform duration-300 origin-left ${
                        isGroupActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {isOpen && (
                    <div
                      className="absolute top-[calc(100%+8px)] left-0 bg-white rounded-2xl overflow-hidden min-w-[260px] pb-2"
                      style={{ boxShadow: '0 8px 32px rgba(27,58,107,0.13), 0 2px 8px rgba(0,0,0,0.06)' }}
                      role="menu"
                    >
                      {/* Top accent gradient */}
                      <div className="h-[3px] bg-gradient-to-r from-[#1B3A6B] via-[#F26522] to-[#00B4D8]" />

                      <Link
                        href={link.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(null)}
                        className="flex items-center px-4 py-3 text-sm font-bold text-[#1B3A6B] hover:bg-[#1B3A6B]/5 transition-colors border-b border-gray-100"
                      >
                        Ver tudo em {link.label} →
                      </Link>

                      {link.submenu.map((sub) => {
                        const Icon = sub.icon
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            onClick={() => setDropdownOpen(null)}
                            className="group/item flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#1B3A6B] transition-all duration-200 hover:bg-gradient-to-r hover:from-[#F26522]/8 hover:to-transparent"
                          >
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 group-hover/item:bg-[#F26522]/12 transition-colors duration-200 shrink-0">
                              <Icon size={15} className="text-[#F26522]" />
                            </span>
                            {sub.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#F26522] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}

          <Link
            href="/how-to-join"
            className="ml-3 bg-[#F26522] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[#d4501a] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Seja Associado
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
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
          menuAberto ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
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
                      {link.submenu.map((sub) => {
                        const Icon = sub.icon
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMenuAberto(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/8 transition-colors"
                          >
                            <Icon size={14} className="text-[#F26522] shrink-0" />
                            {sub.label}
                          </Link>
                        )
                      })}
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
            href="/how-to-join"
            className="mt-2 text-center bg-[#F26522] text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-[#d4501a] transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Seja Associado
          </Link>
        </div>
      </div>
    </header>
  )
}
