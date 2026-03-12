import type { NextConfig } from "next";

const securityHeaders = [
  // Impede que o site seja embutido em iframes de outros domínios (anti-clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Impede o navegador de "adivinhar" o tipo de arquivo (anti-MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controla quais informações de referência são enviadas
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Força HTTPS por 1 ano (HSTS)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Restringe APIs sensíveis do navegador
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Content Security Policy — define origens confiáveis para cada tipo de recurso
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: próprios + Vercel Speed Insights + inline do Next.js
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      // Estilos: próprios + Google Fonts + inline
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fontes: próprias + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Imagens: próprias + Sanity CDN + dados inline
      "img-src 'self' data: blob: https://cdn.sanity.io",
      // Iframes: somente YouTube (para os vídeos em Libras)
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://docs.google.com https://www.google.com https://maps.google.com",
      // Conexões de API/fetch: próprias + Sanity
      "connect-src 'self' https://vaonnaw6.api.sanity.io https://cdn.sanity.io https://vitals.vercel-insights.com",
      // Manifests e workers
      "manifest-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        // Aplica os headers em todas as rotas, exceto o Sanity Studio
        source: "/((?!studio).*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
