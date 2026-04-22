import { useEffect, useRef } from 'react'

const diferenciais = [
  { icon: '⚡', title: 'Equipamentos Modernos', desc: 'Aparelhos de alto padrão renovados para o melhor treino' },
  { icon: '💪', title: 'Musculação Completa', desc: 'Área completa para todos os grupos musculares e níveis' },
  { icon: '🚴', title: 'Spinning e Aulas em Grupo', desc: 'Modalidades coletivas com instrutores motivadores' },
  { icon: '🏆', title: 'Instrutores Qualificados', desc: 'Profissionais capacitados para orientar sua evolução' },
  { icon: '📍', title: 'Localização Central', desc: 'No coração de Guapimirim, fácil acesso para todos' },
  { icon: '🕐', title: 'Horário Livre', desc: 'Acesse quando quiser, na sua rotina, no seu ritmo' },
]

export default function Sobre() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="relative py-24 bg-[#080808]">
      {/* Accent border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section tag */}
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-primary" />
          <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Sobre nós</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <h2 className="animate-on-scroll font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide mb-6">
              UM NOVO CONCEITO{' '}
              <span className="text-primary">DE ACADEMIA</span>
            </h2>
            <p className="animate-on-scroll font-body text-muted leading-relaxed mb-4">
              A BVOLT Academia nasceu para transformar a forma como Guapimirim cuida de si mesma. Aqui, autocuidado não é luxo — é rotina. Nossa estrutura foi projetada para oferecer o melhor ambiente de treino da região.
            </p>
            <p className="animate-on-scroll font-body text-muted leading-relaxed mb-8">
              Com equipamentos de última geração, instrutores apaixonados pelo que fazem e uma comunidade que pulsa energia, a BVOLT é mais do que uma academia: é o lugar onde você descobre sua melhor versão.
            </p>
            <div className="animate-on-scroll">
              <button
                onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm tracking-wider uppercase border-b border-primary pb-0.5 hover:gap-4 transition-all"
              >
                Comece agora
                <span>→</span>
              </button>
            </div>

            {/* Decorative number */}
            <div className="mt-12 hidden lg:block">
              <div className="font-display text-[10rem] text-[#111] leading-none select-none">BV</div>
            </div>
          </div>

          {/* Right: diferenciais grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="animate-on-scroll card-hover bg-[#111] border border-[#222] rounded-xl p-5 group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {d.icon}
                </div>
                <h3 className="font-body font-semibold text-white text-sm mb-1.5">{d.title}</h3>
                <p className="font-body text-muted text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
