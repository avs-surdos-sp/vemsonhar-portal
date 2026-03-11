# VemSonhar — Portal da ASESP

Este é o site oficial da **ASESP** (Associação dos Surdos do Estado de São Paulo).

O portal reúne informações sobre a associação, seus projetos e núcleos, agenda de eventos, notícias da comunidade surda paulista, prestação de contas e canais para quem queira se associar, fazer uma doação ou entrar em contato.

O site foi desenvolvido com foco em acessibilidade, incluindo suporte a vídeos em Língua Brasileira de Sinais (Libras), alto contraste e navegação por teclado.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js (App Router) + React + TypeScript |
| Estilização | Tailwind CSS + Shadcn UI |
| CMS | Sanity |
| Deploy | Vercel |

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — Hero, estatísticas, ações, projetos, eventos e notícias |
| `/about` | História, missão, visão e valores |
| `/board` | Diretoria, conselhos e estrutura administrativa |
| `/projects` | Projetos da ASESP |
| `/projects/nucleos` | Núcleos e projetos específicos |
| `/partners` | Parcerias institucionais |
| `/news` | Notícias e comunicados |
| `/news/[slug]` | Notícia individual |
| `/blog` | Artigos e reflexões |
| `/blog/[slug]` | Artigo individual |
| `/transparency` | Hub de transparência |
| `/transparency/relatorios` | Relatórios anuais |
| `/transparency/demonstrativo` | Demonstrativo financeiro |
| `/transparency/editais` | Editais e chamadas públicas |
| `/transparency/projetos` | Projetos aprovados com financiamento |
| `/how-to-join` | Como se associar |
| `/donations` | Chave PIX para doações |
| `/contact` | Endereço, e-mail, WhatsApp e redes sociais |

---

## Estrutura de Pastas

```
src/
├── app/                        # Rotas e páginas (App Router)
│   ├── page.tsx                # Home
│   ├── layout.tsx              # Layout raiz
│   ├── globals.css             # Estilos globais e tokens de cor
│   ├── about/
│   ├── board/
│   ├── blog/
│   ├── contact/
│   ├── donations/
│   ├── how-to-join/
│   ├── news/
│   ├── partners/
│   ├── projects/
│   └── transparency/
│       ├── relatorios/
│       ├── demonstrativo/
│       ├── editais/
│       └── projetos/
│
├── components/
│   ├── layout/                 # Header, Footer, SiteChrome
│   ├── sections/               # Seções da home page
│   └── shared/                 # Componentes reutilizáveis
│
├── sanity/
│   └── schemas/                # Schemas do CMS (noticia, evento, projeto, artigo…)
│
└── lib/
    ├── sanity.ts               # Cliente Sanity
    └── supabase.ts             # Cliente Supabase
```

---

## Acessibilidade (WCAG 2.1 AA)

- Vídeos em Libras em todas as páginas (componente `LibrasVideo`)
- Barra de acessibilidade com alto contraste e ajuste de tamanho de texto
- `lang="pt-BR"` no `<html>`
- HTML semântico: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- `aria-labelledby` em todas as seções
- `aria-hidden="true"` em elementos decorativos
- `aria-label` em botões sem texto visível
- Navegação completa por teclado
- `role="status"` e `role="alert"` nos feedbacks de formulários

---

## Repositório

**GitHub:** [avs-surdos-sp/vemsonhar-portal](https://github.com/avs-surdos-sp/vemsonhar-portal)
**Branch principal:** `main`
