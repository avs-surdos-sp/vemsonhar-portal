// Protótipo — Novo Design "Vivo e Humano"
// Página isolada para avaliação antes de implementar

export default function PrototipoPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', margin: 0, padding: 0 }}>

      {/* ===== HEADER ===== */}
      <header style={{
        background: '#fff',
        borderBottom: '1px solid #eef0f5',
        position: 'sticky', top: 0, zIndex: 50,
        height: 64, display: 'flex', alignItems: 'center',
        padding: '0 40px', justifyContent: 'space-between',
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: '#F26522',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M6 4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v5.5a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v6.5a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v7.5C18 16 15.5 20 11 20S4 16.314 4 12.5V8a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 1 0V4Z" />
            </svg>
          </div>
          <div>
            <div style={{ color: '#1B3A6B', fontWeight: 800, fontSize: 16, lineHeight: 1 }}>vemsonhar</div>
            <div style={{ color: '#F26522', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 2, fontWeight: 700 }}>ASESP</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {['Quem Somos', 'Diretoria', 'Projetos', 'Transparência', 'Notícias', 'Contato'].map(link => (
            <a key={link} href="#" style={{
              padding: '8px 12px', borderRadius: 8,
              color: '#444', fontSize: 13, fontWeight: 500,
              textDecoration: 'none'
            }}>{link}</a>
          ))}
          <a href="#" style={{
            marginLeft: 12, background: '#F26522', color: '#fff',
            padding: '9px 20px', borderRadius: 50, fontSize: 13, fontWeight: 700,
            textDecoration: 'none'
          }}>Seja Associado</a>
          <a href="#" style={{
            marginLeft: 6, border: '2px solid #1B3A6B', color: '#1B3A6B',
            padding: '7px 20px', borderRadius: 50, fontSize: 13, fontWeight: 700,
            textDecoration: 'none'
          }}>Doe</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section style={{
        background: '#fff',
        padding: '80px 40px 60px',
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 60, alignItems: 'center'
      }}>
        {/* Coluna esquerda */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#FEF2EC', border: '1px solid #F26522',
            padding: '6px 16px', borderRadius: 50, marginBottom: 28
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F26522', display: 'block' }} />
            <span style={{ color: '#F26522', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Associação ativa desde 2012
            </span>
          </div>

          {/* Título */}
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.08, color: '#1B3A6B', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            A voz da<br />
            <span style={{ color: '#F26522' }}>Comunidade</span><br />
            Surda paulista
          </h1>

          {/* Subtítulo */}
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
            Representando e defendendo os direitos de surdos em todo o Estado de São Paulo.
            Junte-se a nós e faça parte dessa história.
          </p>

          {/* Botões */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 44 }}>
            <a href="#" style={{
              background: '#F26522', color: '#fff',
              padding: '14px 28px', borderRadius: 50, fontSize: 15, fontWeight: 800,
              textDecoration: 'none', boxShadow: '0 4px 20px rgba(242,101,34,0.35)'
            }}>🤟 Seja Associado</a>
            <a href="#" style={{
              background: '#EAF0FA', color: '#1B3A6B',
              padding: '14px 28px', borderRadius: 50, fontSize: 15, fontWeight: 700,
              textDecoration: 'none'
            }}>Conheça os Projetos</a>
          </div>

          {/* Mini stats */}
          <div style={{ display: 'flex', gap: 36, borderTop: '1px solid #eef0f5', paddingTop: 28 }}>
            {[
              { n: '340+', label: 'Associados' },
              { n: '85+', label: 'Eventos' },
              { n: '12', label: 'Anos' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#1B3A6B', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita — visual */}
        <div style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Blob ciano */}
          <div style={{
            position: 'absolute',
            width: 420, height: 420,
            background: 'linear-gradient(135deg, #00B4D8 0%, #1B3A6B 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%',
            opacity: 0.12
          }} />
          {/* Blob laranja */}
          <div style={{
            position: 'absolute',
            width: 200, height: 200,
            background: '#F26522',
            borderRadius: '70% 30% 50% 50% / 30% 70% 30% 70%',
            bottom: 30, right: 10,
            opacity: 0.10
          }} />

          {/* Card central */}
          <div style={{
            position: 'relative',
            width: 320, height: 360,
            background: '#EAF0FA',
            borderRadius: 32,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            border: '1px solid #d0dcf0'
          }}>
            <div style={{
              width: 72, height: 72, background: '#F26522', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16
            }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <p style={{ color: '#1B3A6B', fontWeight: 700, fontSize: 15, margin: 0 }}>Vídeo em Libras</p>
            <p style={{ color: '#888', fontSize: 13, marginTop: 6 }}>Conheça a ASESP</p>

            {/* Badge navy */}
            <div style={{
              position: 'absolute', top: -14, right: -18,
              background: '#1B3A6B', color: '#fff',
              padding: '7px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700,
              boxShadow: '0 4px 16px rgba(27,58,107,0.25)'
            }}>🤟 Em Libras</div>

            {/* Badge ciano */}
            <div style={{
              position: 'absolute', bottom: -14, left: -18,
              background: '#fff', border: '2px solid #00B4D8',
              padding: '7px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700, color: '#00B4D8',
              boxShadow: '0 4px 16px rgba(0,180,216,0.2)'
            }}>✦ Comunidade ativa</div>
          </div>
        </div>
      </section>

      {/* ===== STATS (navy) ===== */}
      <section style={{ background: '#1B3A6B', padding: '64px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { n: '340+', label: 'Associados ativos', accent: '#F26522' },
            { n: '120+', label: 'Idosos atendidos', accent: '#00B4D8' },
            { n: '85+', label: 'Eventos realizados', accent: '#F26522' },
            { n: '12', label: 'Anos de história', accent: '#00B4D8' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 54, fontWeight: 900, color: s.accent, lineHeight: 1 }}>{s.n}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginTop: 10 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AÇÕES RÁPIDAS ===== */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#F26522', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Participe</span>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1B3A6B', marginTop: 10, marginBottom: 0 }}>Como você pode ajudar</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { titulo: 'Seja Associado', desc: 'Junte-se à maior associação de surdos do Estado de São Paulo e tenha acesso a benefícios exclusivos.', color: '#1B3A6B', cta: '🤟 Associar-se' },
              { titulo: 'Faça uma Doação', desc: 'Seu apoio financia os núcleos, eventos e projetos que transformam vidas na comunidade surda.', color: '#F26522', cta: '💙 Doe agora' },
              { titulo: 'Conheça os Projetos', desc: 'Descubra os núcleos e ações que desenvolvemos para crianças, mulheres, idosos e jovens surdos.', color: '#00B4D8', cta: '→ Ver projetos' },
            ].map(c => (
              <div key={c.titulo} style={{
                borderRadius: 24, border: '1px solid #eef0f5',
                padding: 32, background: '#fff',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  width: 48, height: 6, borderRadius: 3,
                  background: c.color, marginBottom: 20
                }} />
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1B3A6B', marginBottom: 12 }}>{c.titulo}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{c.desc}</p>
                <a href="#" style={{
                  display: 'inline-block',
                  background: c.color, color: '#fff',
                  padding: '10px 22px', borderRadius: 50, fontSize: 13, fontWeight: 700,
                  textDecoration: 'none'
                }}>{c.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJETOS (cinza) ===== */}
      <section style={{ background: '#F5F7FA', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#00B4D8', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>O que fazemos</span>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1B3A6B', marginTop: 10, marginBottom: 0 }}>Projetos e Núcleos</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { titulo: 'Núcleo dos Idosos Surdos', tag: 'Cuidado', color: '#00B4D8', desc: 'Atenção especializada e atividades para idosos da comunidade surda paulista.' },
              { titulo: 'Núcleo das Mulheres Surdas', tag: 'Empoderamento', color: '#F26522', desc: 'Espaço de fortalecimento e protagonismo feminino na comunidade surda.' },
              { titulo: 'Juventude Surda', tag: 'Educação', color: '#1565C0', desc: 'Programas educacionais e culturais para crianças, adolescentes e jovens.' },
              { titulo: 'Cursos em Libras', tag: 'Formação', color: '#1B3A6B', desc: 'Oficinas e cursos com instrutores surdos para a comunidade e para ouvintes.' },
              { titulo: 'Eventos Culturais', tag: 'Cultura', color: '#F26522', desc: 'Festivais, shows e celebrações da identidade e cultura surda paulista.' },
              { titulo: 'Parcerias Institucionais', tag: 'Institucional', color: '#00B4D8', desc: 'Colaborações com escolas bilíngues, universidades e órgãos públicos.' },
            ].map(p => (
              <div key={p.titulo} style={{
                background: '#fff', borderRadius: 20, overflow: 'hidden',
                border: '1px solid #eef0f5',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
              }}>
                <div style={{ height: 5, background: p.color }} />
                <div style={{ padding: '22px 24px' }}>
                  <span style={{
                    background: p.color + '18', color: p.color,
                    fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 50,
                    textTransform: 'uppercase', letterSpacing: '0.08em'
                  }}>{p.tag}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1B3A6B', margin: '12px 0 8px' }}>{p.titulo}</h3>
                  <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENTO + NOTÍCIAS ===== */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

          {/* Próximo evento */}
          <div>
            <span style={{ color: '#F26522', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Agenda</span>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1B3A6B', marginTop: 8, marginBottom: 24 }}>Próximo Evento</h2>
            <div style={{
              borderRadius: 24, border: '2px solid #eef0f5', overflow: 'hidden'
            }}>
              <div style={{ background: '#F26522', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ textAlign: 'center', minWidth: 52 }}>
                  <div style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1 }}>22</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontWeight: 600 }}>Mar</div>
                </div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 16, margin: 0 }}>Assembleia Geral Ordinária ASESP 2026</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4 }}>📍 São Paulo, SP</p>
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  Reunião anual aberta a todos os associados para votação da diretoria e aprovação do planejamento 2026.
                </p>
                <a href="#" style={{
                  display: 'inline-block', background: '#1B3A6B', color: '#fff',
                  padding: '10px 22px', borderRadius: 50, fontSize: 13, fontWeight: 700, textDecoration: 'none'
                }}>Confirmar presença</a>
              </div>
            </div>
          </div>

          {/* Notícias */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
              <div>
                <span style={{ color: '#00B4D8', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Fique por dentro</span>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1B3A6B', marginTop: 8, marginBottom: 0 }}>Últimas Notícias</h2>
              </div>
              <a href="#" style={{ color: '#F26522', fontWeight: 700, textDecoration: 'none', fontSize: 13 }}>Ver todas →</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { tag: 'Evento', cor: '#00B4D8', titulo: 'Festa Junina Surda 2025 reúne 200 participantes', data: '15 Mar' },
                { tag: 'Direitos', cor: '#1B3A6B', titulo: 'ASESP participa de audiência pública sobre educação bilíngue', data: '10 Mar' },
                { tag: 'Formação', cor: '#F26522', titulo: 'Novo curso de Libras: 40 vagas abertas para ouvintes', data: '5 Mar' },
              ].map((n, i) => (
                <a key={n.titulo} href="#" style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: i < 2 ? '1px solid #eef0f5' : 'none',
                  textDecoration: 'none'
                }}>
                  <div style={{
                    width: 80, height: 64, background: '#F5F7FA', borderRadius: 12,
                    flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ color: '#ccc', fontSize: 11 }}>foto</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        background: n.cor + '18', color: n.cor,
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 50
                      }}>{n.tag}</span>
                      <span style={{ color: '#bbb', fontSize: 11 }}>{n.data}</span>
                    </div>
                    <p style={{ color: '#1B3A6B', fontWeight: 700, fontSize: 14, lineHeight: 1.4, margin: 0 }}>{n.titulo}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== CTA DOAÇÕES (laranja bold) ===== */}
      <section style={{ background: '#F26522', padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 320, height: 320, background: 'rgba(255,255,255,0.07)', borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -40,
          width: 240, height: 240, background: 'rgba(0,0,0,0.05)',
          borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%'
        }} />
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.15 }}>
            Cada doação transforma<br />uma vida
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 17, marginBottom: 10, fontWeight: 600 }}>
            R$40 = alimentação de 1 encontro do Núcleo dos Idosos
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 36 }}>
            Contribua via PIX, doação recorrente ou apadrinhando um idoso surdo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{
              background: '#fff', color: '#F26522',
              padding: '14px 32px', borderRadius: 50, fontSize: 15, fontWeight: 800, textDecoration: 'none'
            }}>💙 Fazer uma doação</a>
            <a href="#" style={{
              border: '2px solid rgba(255,255,255,0.6)', color: '#fff',
              padding: '12px 32px', borderRadius: 50, fontSize: 15, fontWeight: 700, textDecoration: 'none'
            }}>Seja Associado</a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: '#1B3A6B', padding: '48px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 4 }}>vemsonhar</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase' }}>ASESP</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 8 }}>© 2026 — Todos os direitos reservados</div>
          </div>
          <div style={{ display: 'flex', gap: 32, color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
            <div>
              <div style={{ color: '#00B4D8', fontWeight: 700, marginBottom: 8 }}>Navegação</div>
              {['Quem Somos', 'Projetos', 'Transparência', 'Contato'].map(l => (
                <div key={l} style={{ marginBottom: 4 }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a></div>
              ))}
            </div>
            <div>
              <div style={{ color: '#00B4D8', fontWeight: 700, marginBottom: 8 }}>Contato</div>
              <div>contato@asesp.org.br</div>
              <div style={{ marginTop: 4 }}>São Paulo, SP</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
