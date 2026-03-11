'use client'

import { usePathname } from 'next/navigation'
import AccessibilityBar from './AccessibilityBar'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '@/components/shared/BackToTop'

/**
 * Renderiza o "chrome" do site (barra de acessibilidade, header, footer)
 * apenas fora do /studio — o Sanity Studio precisa da tela toda livre.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <AccessibilityBar />
      <Header />
      {/* pt-[100px] = barra acessibilidade (36px) + header (64px) */}
      <div id="main-content" className="flex-1 pt-[100px]">
        {children}
      </div>
      <Footer />
      <BackToTop />
    </>
  )
}
