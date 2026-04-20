import { NextRequest, NextResponse } from 'next/server'

const PREVIEW_SECRET = 'AVS2025'
const COOKIE_NAME    = 'avs_preview'
const COMING_SOON    = '/em-breve'

// Rotas que nunca são bloqueadas
const PUBLIC_PATHS = [
  COMING_SOON,
  '/favicon.ico',
  '/_next',
  '/logo-avs.svg',
  '/people',
  '/api',
]

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Sempre libera rotas internas e a própria página "em breve"
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Se vier o parâmetro secreto, define o cookie e redireciona sem o ?preview=
  if (searchParams.get('preview') === PREVIEW_SECRET) {
    const url = request.nextUrl.clone()
    url.searchParams.delete('preview')
    const response = NextResponse.redirect(url)
    response.cookies.set(COOKIE_NAME, '1', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    })
    return response
  }

  // Se tiver o cookie de preview, libera
  if (request.cookies.get(COOKIE_NAME)?.value === '1') {
    return NextResponse.next()
  }

  // Caso contrário, redireciona para "em breve"
  const url = request.nextUrl.clone()
  url.pathname = COMING_SOON
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
