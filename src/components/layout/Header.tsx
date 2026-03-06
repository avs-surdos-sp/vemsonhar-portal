'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'Quem Somos' },
  { href: '/board', label: 'Diretoria' },
  { href: '/projects', label: 'Projetos' },
  { href: '/transparency', label: 'Transparência' },
  { href: '/news', label: 'Notícias' },
  { href: '/contact', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    // Verifica posição inicial ao montar (evita flash transparente no refresh)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuAberto(false)
  }, [pathname])

  // Transparente só na Home — nas demais páginas sempre navy
  const isHome = pathname === '/'
  const solidNav = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${solidNav
          ? 'bg-[#1B3A6B]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#F26522] transition-all duration-100 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="ASESP — Página inicial">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0"
            style={{ background: 'linear-gradient(135deg, #F26522, #ff8c53)' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
              <path d="M6 4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v5.5a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v6.5a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v7.5C18 16 15.5 20 11 20S4 16.314 4 12.5V8a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 1 0V4Z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-extrabold text-base leading-none tracking-tight">
              vemsonhar
            </div>
            <div className="text-[#00B4D8] text-[10px] tracking-[0.18em] uppercase leading-none mt-0.5 font-semibold">
              ASESP
            </div>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/8'
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F26522]" />
                )}
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

      {/* Nav mobile — animated slide down */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuAberto ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ background: 'rgba(27, 58, 107, 0.97)', backdropFilter: 'blur(12px)' }}
        aria-label="Navegação mobile"
      >
        <div className="px-4 py-3 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/8'
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
