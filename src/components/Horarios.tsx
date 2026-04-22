import { useEffect, useRef } from 'react'

const horarios = [
  { dia: 'Segunda', horas: '06:00 — 22:00', aberto: true },
  { dia: 'Terça', horas: '06:00 — 22:00', aberto: true },
  { dia: 'Quarta', horas: '06:00 — 22:00', aberto: true },
  { dia: 'Quinta', horas: '06:00 — 22:00', aberto: true },
  { dia: 'Sexta', horas: '06:00 — 22:00', aberto: true },
  { dia: 'Sábado', horas: '08:00 — 14:00', aberto: true },
  { dia: 'Domingo', horas: 'Fechado', aberto: false },
]

function getDiaAtual() {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return dias[new Date().getDay()]
}

export default function Horarios() {
  const ref = useRef<HTMLDivElement>(null)
  const diaAtual = getDiaAtual()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const hoje = horarios.find((h) => h.dia === diaAtual)

  return (
    <section id="horarios" ref={ref} className="relative py-24 bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-primary" />
          <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Funcionamento</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Título + destaque de hoje */}
          <div>
            <h2 className="animate-on-scroll font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide mb-6">
              HORÁRIOS DE<br />
              <span className="text-primary">FUNCIONAMENTO</span>
            </h2>

            {/* Card "Hoje" */}
            <div className="animate-on-scroll bg-[#111] border border-primary/30 rounded-2xl p-6 inline-block">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-2 h-2 rounded-full ${hoje?.aberto ? 'bg-primary animate-pulse' : 'bg-red-500'}`} />
                <span className="font-body text-xs text-muted uppercase tracking-widest">Hoje — {diaAtual}</span>
              </div>
              <p className="font-display text-4xl text-white tracking-wide">
                {hoje?.aberto ? hoje.horas : 'Fechado'}
              </p>
              {hoje?.aberto && (
                <p className="font-body text-xs text-primary mt-1">Academia aberta agora ⚡</p>
              )}
            </div>
          </div>

          {/* Tabela de horários */}
          <div className="animate-on-scroll">
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden">
              {horarios.map((h, i) => {
                const isHoje = h.dia === diaAtual
                return (
                  <div
                    key={h.dia}
                    className={`flex items-center justify-between px-5 py-4 transition-colors ${
                      isHoje ? 'bg-primary/10 border-l-2 border-primary' : ''
                    } ${i < horarios.length - 1 ? 'border-b border-[#1a1a1a]' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {isHoje && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                      <span className={`font-body font-medium text-sm ${isHoje ? 'text-white' : 'text-muted'}`}>
                        {h.dia}
                        {isHoje && <span className="ml-2 text-[10px] text-primary font-bold uppercase tracking-wider">Hoje</span>}
                      </span>
                    </div>
                    <span className={`font-body text-sm font-semibold ${h.aberto ? (isHoje ? 'text-primary' : 'text-[#ccc]') : 'text-[#444]'}`}>
                      {h.horas}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="font-body text-xs text-muted mt-3 text-center">
              * Horários sujeitos a alteração em feriados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
