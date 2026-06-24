# VemSonhar — Portal da ASESP

Site institucional da **ASESP** (Associação de Surdos do Estado de São Paulo).

O portal reúne informações sobre a associação, sua diretoria e conselhos, agenda de eventos, notícias da comunidade surda paulista, prestação de contas e canais para entrar em contato ou fazer uma doação.

Desenvolvido com foco em acessibilidade: alto contraste, ajuste de tamanho de fonte, navegação por teclado e marcação semântica.

---

## Stack

| Camada           | Tecnologia                                |
|------------------|--------------------------------------------|
| Framework        | Next.js 16 (App Router) + React 19 + TypeScript |
| Estilização      | Tailwind CSS 4 + Shadcn UI                |
| Carrossel        | Embla Carousel                            |
| CMS              | Sanity (projectId: `vaonnaw6`)            |
| Banco de dados   | Supabase (PostgreSQL)                     |
| Deploy           | Vercel                                    |

---

## Páginas (rotas em PT-BR)

| Rota                              | Descrição                                              |
|-----------------------------------|---------------------------------------------------------|
| `/`                               | Home — Hero carrossel, notícias, doação, eventos, parceiros |
| `/sobre`                          | História, missão, visão, valores e finalidades         |
| `/diretoria`                      | Diretoria, conselhos, organograma e núcleos            |
| `/projetos`                       | Hub com Núcleos e Parcerias                            |
| `/projetos/nucleos`               | Núcleos temáticos                                       |
| `/projetos/parceiros`             | Parcerias institucionais                                |
| `/noticias`                       | Listagem de notícias                                    |
| `/noticias/[slug]`                | Notícia individual                                       |
| `/blog`                           | Artigos e reflexões                                      |
| `/blog/[slug]`                    | Artigo individual                                        |
| `/transparencia/relatorios`       | Relatórios anuais                                        |
| `/transparencia/demonstrativo`    | Demonstrativo financeiro                                 |
| `/transparencia/editais`          | Editais e parcerias                                      |
| `/transparencia/projetos`         | Projetos aprovados                                       |
| `/doacoes`                        | Doação via PIX (copiar chave + WhatsApp)                |
| `/contato`                        | E-mail, WhatsApp, redes sociais, mapa                   |
| `/studio`                         | Sanity Studio (CMS embeddado)                            |

---

## Estrutura de Pastas

```
src/
├── app/                                # Rotas e páginas (App Router)
│   ├── page.tsx                        # Home
│   ├── layout.tsx                      # Layout raiz
│   ├── globals.css                     # Estilos globais e tokens de cor
│   ├── sobre/
│   ├── diretoria/
│   │   ├── page.tsx
│   │   └── MemberCard.tsx              # Card cliente com hover/tap
│   ├── projetos/
│   │   ├── nucleos/
│   │   └── parceiros/
│   ├── noticias/
│   │   ├── [slug]/
│   │   └── NewsClient.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   └── BlogClient.tsx
│   ├── transparencia/
│   │   ├── relatorios/
│   │   ├── demonstrativo/
│   │   ├── editais/
│   │   └── projetos/
│   ├── doacoes/
│   ├── contato/
│   └── studio/                         # Sanity Studio embeddado
│
├── components/
│   ├── layout/                         # AccessibilityBar, Header, Footer, SiteChrome
│   ├── sections/                       # Hero, NewsSection, EventsSection, DonationsCTA, PartnersSection
│   ├── shared/                         # CopyPixButton, BackToTop
│   └── ui/                             # Shadcn primitives (button, input, etc.)
│
├── sanity/
│   ├── config.ts                       # Configuração do Studio
│   └── schemas/                        # noticia, evento, artigo, relatorio, edital, projetoAprovado, demonstrativo
│
└── lib/
    ├── sanity.ts                       # Cliente Sanity + urlFor
    ├── supabase.ts                     # Cliente Supabase
    └── utils.ts                        # Helpers
```

---

## Identidade Visual

Cores da paleta oficial (gerada a partir do logotipo):

| Token            | Valor      | Uso                              |
|------------------|------------|----------------------------------|
| Navy (primário)  | `#14387F`  | Headers, títulos, CTAs principais |
| Navy escuro      | `#061B45`  | Gradientes, contrastes           |
| Laranja          | `#F7931E`  | Destaques, CTAs secundários      |
| Laranja escuro   | `#C27215`  | Hover de laranja                  |
| Azul médio       | `#0069B4`  | Ícones, accent                    |
| Cinza muito claro| `#F8F9FA`  | Background do site                |

---

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm

### 1. Clonar o repositório

```bash
git clone https://github.com/avs-surdos-sp/vemsonhar-portal.git
cd vemsonhar-portal
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=vaonnaw6
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

### 5. Build para produção

```bash
npm run build
npm start
```

### 6. Lint

```bash
npm run lint
```

---

## Acessibilidade (WCAG 2.1 AA)

- Barra de acessibilidade fixa com **ajuste de tamanho de fonte** (3 níveis) e **alto contraste**
- Preferências salvas em `localStorage` (persistem entre sessões)
- `lang="pt-BR"` no `<html>`
- HTML semântico: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- `aria-labelledby` em seções, `aria-hidden` em decorações, `aria-label` em botões sem texto
- Skip link visível no foco (WCAG 2.4.1)
- Navegação completa por teclado
- Respeita `prefers-reduced-motion` em animações

---

## Repositório

**GitHub:** [avs-surdos-sp/vemsonhar-portal](https://github.com/avs-surdos-sp/vemsonhar-portal)
**Branches:** `main` (produção) · `dev` (desenvolvimento)
**Deploy:** [avemsonhar.org.br](https://avemsonhar.org.br)
