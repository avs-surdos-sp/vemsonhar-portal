import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, BarChart2, ClipboardList, CheckSquare, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transparência | ASESP',
  description:
    'Prestação de contas da ASESP — relatórios anuais, demonstrativo financeiro, editais e projetos aprovados.',
}

const relatorios = [
  {
    ano: '2024',
    titulo: 'Relatório Anual 2024',
    desc: 'Atividades realizadas, impacto social, balanço de associados e eventos do exercício.',
    status: 'disponível',
    badge: 'Mais recente',
    badgeColor: '#00B4D8',
  },
  {
    ano: '2023',
    titulo: 'Relatório Anual 2023',
    desc: 'Consolidação dos projetos, crescimento dos núcleos e parceiras institucionais.',
    status: 'disponível',
    badge: null,
    badgeColor: null,
  },
  {
    ano: '2022',
    titulo: 'Relatório Anual 2022',
    desc: 'Retomada das atividades presenciais pós-pandemia e expansão da base de associados.',
    status: 'disponível',
    badge: null,
    badgeColor: null,
  },
]

const financeiro = [
  { categoria: 'Mensalidades de associados', valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Doações e contribuições', valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Projetos e editais aprovados', valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Patrocínios institucionais', valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Núcleos e projetos sociais', valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Eventos e atividades culturais', valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Custos administrativos', valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Cursos e formação', valor: 'R$ —', tipo: 'Despesa' },
]

const editais = [
  {
    titulo: 'Edital de Parceria — Secretaria de Direitos da Pessoa com Deficiência',
    status: 'Em vigor',
    statusColor: '#00B4D8',
    ano: '2024',
    desc: 'Convênio para desenvolvimento de ações de acessibilidade e inclusão da pessoa surda no Estado de SP.',
  },
  {
    titulo: 'Edital de Fomento Cultural — Fundo Municipal de Cultura',
    status: 'Em vigor',
    statusColor: '#00B4D8',
    ano: '2023',
    desc: 'Apoio a eventos culturais da comunidade surda, incluindo a Festa Junina Surda e o Setembro Azul.',
  },
  {
    titulo: 'Edital de Projetos Sociais — Instituto XYZ',
    status: 'Concluído',
    statusColor: '#888',
    ano: '2022',
    desc: 'Projeto de formação profissional para jovens surdos realizado em parceria com empresa privada.',
  },
]

const projetosAprovados = [
  {
    titulo: 'Núcleo dos Idosos Surdos — Expansão 2024',
    orgao: 'Secretaria Estadual de Assistência Social',
    valor: 'A divulgar',
    status: 'Em execução',
    statusColor: '#F26522',
  },
  {
    titulo: 'Cursos de Libras para a Comunidade',
    orgao: 'Fundo Municipal de Acessibilidade',
    valor: 'A divulgar',
    status: 'Em execução',
    statusColor: '#F26522',
  },
  {
    titulo: 'Setembro Azul — Festival Cultural Surdo',
    orgao: 'Fundo Estadual de Cultura',
    valor: 'A divulgar',
    status: 'Concluído',
    statusColor: '#00B4D8',
  },
]

export default function TransparenciaPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label text-[#00B4D8] mb-3">Prestação de contas</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Transparência
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A ASESP acredita na transparência como pilar da confiança. Aqui você encontra relatórios, balanço financeiro, editais e projetos aprovados.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Relatórios Anuais */}
        <section aria-labelledby="relatorios-titulo">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={20} className="text-[#1B3A6B]" aria-hidden="true" />
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest">Documentos</p>
          </div>
          <h2 id="relatorios-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Relatórios Anuais
          </h2>
          <ul className="space-y-4 list-none">
            {relatorios.map((r) => (
              <li
                key={r.ano}
                className="group flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-white text-sm"
                    style={{ background: '#1B3A6B' }}
                  >
                    {r.ano}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1B3A6B] text-base">{r.titulo}</h3>
                      {r.badge && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ background: r.badgeColor ?? '#00B4D8' }}
                        >
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-base">{r.desc}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 flex items-center gap-2 text-base font-bold text-[#1B3A6B] border border-[#1B3A6B]/30 rounded-full px-4 py-2 hover:bg-[#1B3A6B] hover:text-white transition-all duration-200"
                  aria-label={`Baixar ${r.titulo}`}
                >
                  <Download size={14} aria-hidden="true" />
                  Baixar
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4 text-center">
            * PDFs serão disponibilizados após aprovação em Assembleia Geral.
          </p>
        </section>

        {/* Demonstrativo Financeiro */}
        <section aria-labelledby="financeiro-titulo">
          <div className="flex items-center gap-3 mb-2">
            <BarChart2 size={20} className="text-[#1B3A6B]" aria-hidden="true" />
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest">Finanças</p>
          </div>
          <h2 id="financeiro-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-4 tracking-tight">
            Demonstrativo Financeiro Simplificado
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-2xl">
            Apresentamos abaixo as categorias de receitas e despesas da ASESP. Os valores detalhados constam nos relatórios anuais e são auditados pelo Conselho Fiscal.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Receitas */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100" style={{ background: '#eaeff7' }}>
                <h3 className="font-bold text-[#1B3A6B] text-sm uppercase tracking-wide">Receitas</h3>
              </div>
              <ul className="divide-y divide-gray-50 list-none">
                {financeiro.filter(f => f.tipo === 'Receita').map((f) => (
                  <li key={f.categoria} className="flex items-center justify-between px-6 py-4">
                    <span className="text-gray-600 text-sm">{f.categoria}</span>
                    <span className="font-bold text-[#1B3A6B] text-sm">{f.valor}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Despesas */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100" style={{ background: '#fef2ec' }}>
                <h3 className="font-bold text-[#F26522] text-sm uppercase tracking-wide">Despesas</h3>
              </div>
              <ul className="divide-y divide-gray-50 list-none">
                {financeiro.filter(f => f.tipo === 'Despesa').map((f) => (
                  <li key={f.categoria} className="flex items-center justify-between px-6 py-4">
                    <span className="text-gray-600 text-sm">{f.categoria}</span>
                    <span className="font-bold text-[#F26522] text-sm">{f.valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Valores consolidados disponíveis nos relatórios anuais aprovados em Assembleia.
          </p>
        </section>

        {/* Editais e Parcerias */}
        <section aria-labelledby="editais-titulo">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList size={20} className="text-[#1B3A6B]" aria-hidden="true" />
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest">Convênios</p>
          </div>
          <h2 id="editais-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Editais e Parcerias
          </h2>
          <ul className="space-y-4 list-none">
            {editais.map((e) => (
              <li
                key={e.titulo}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{
                        color: e.statusColor,
                        borderColor: e.statusColor + '40',
                        background: e.statusColor + '12',
                      }}
                    >
                      {e.status}
                    </span>
                    <span className="text-xs text-gray-400">{e.ano}</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-300" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-base mb-2 leading-snug">{e.titulo}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{e.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Projetos Aprovados */}
        <section aria-labelledby="projetos-aprovados-titulo">
          <div className="flex items-center gap-3 mb-2">
            <CheckSquare size={20} className="text-[#1B3A6B]" aria-hidden="true" />
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest">Em execução</p>
          </div>
          <h2 id="projetos-aprovados-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Projetos Aprovados
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-bold text-[#1B3A6B] text-xs uppercase tracking-wide">Projeto</th>
                  <th className="text-left px-6 py-4 font-bold text-[#1B3A6B] text-xs uppercase tracking-wide">Órgão financiador</th>
                  <th className="text-left px-6 py-4 font-bold text-[#1B3A6B] text-xs uppercase tracking-wide">Valor</th>
                  <th className="text-left px-6 py-4 font-bold text-[#1B3A6B] text-xs uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                {projetosAprovados.map((p) => (
                  <tr key={p.titulo} className="hover:bg-[#f9fafb] transition-colors">
                    <td className="px-6 py-4 font-medium text-[#1B3A6B] leading-snug">{p.titulo}</td>
                    <td className="px-6 py-4 text-gray-500">{p.orgao}</td>
                    <td className="px-6 py-4 text-gray-500">{p.valor}</td>
                    <td className="px-6 py-4">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          color: p.statusColor,
                          background: p.statusColor + '18',
                        }}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1B3A6B, #1565C0)' }}
          aria-labelledby="cta-transparencia"
        >
          <h2 id="cta-transparencia" className="text-2xl font-extrabold text-white mb-3">
            Dúvidas sobre as contas?
          </h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto text-base leading-relaxed">
            Entre em contato com a diretoria. A ASESP está comprometida com a máxima transparência para seus associados e a sociedade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F26522] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4501a] transition-colors hover:shadow-lg"
            >
              Falar com a diretoria
            </Link>
            <Link
              href="/how-to-join"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              🤟 Seja Associado
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
