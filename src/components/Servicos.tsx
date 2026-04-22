import { useEffect, useRef } from 'react'

const modalidades = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        <circle cx="8" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Musculação',
    desc: 'Área completa de musculação com equipamentos de alto padrão para todos os níveis, do iniciante ao avançado.',
    tag: 'Popular',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="8" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 0114 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
        <circle cx="18" cy="18" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 18h2" />
      </svg>
    ),
    title: 'Spinning',
    desc: 'Aulas de spinning com instrutores motivadores e equipamentos modernos para queimar calorias com energia.',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Aulas em Grupo',
    desc: 'Diversas modalidades em grupo para tornar seu treino mais dinâmico, divertido e motivador.',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Área Aeróbica',
    desc: 'Esteiras, elípticos e equipamentos cardiovasculares modernos para seu condicionamento e saúde.',
    tag: null,
  },
]

export default function Servicos() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={ref} className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-primary" />
          <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Modalidades</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2 className="animate-on-scroll font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            NOSSAS<br />
            <span className="text-primary">MODALIDADES</span>
          </h2>
          <p className="animate-on-scroll font-body text-muted max-w-xs text-sm leading-relaxed">
            Estrutura completa para você treinar do jeito que quiser, com suporte profissional em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {modalidades.map((m) => (
            <div
              key={m.title}
              className="animate-on-scroll card-hover relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 group overflow-hidden"
            >
              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Tag */}
              {m.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-body font-bold uppercase tracking-widest bg-primary text-black px-2 py-0.5 rounded">
                  {m.tag}
                </span>
              )}

              {/* Icon */}
              <div className="text-primary mb-4 group-hover:text-white transition-colors">
                {m.icon}
              </div>

              <h3 className="font-display text-2xl text-white tracking-wider mb-3">{m.title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{m.desc}</p>

              {/* Arrow */}
              <div className="mt-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity font-body text-sm font-semibold flex items-center gap-1.5">
                Saiba mais <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
