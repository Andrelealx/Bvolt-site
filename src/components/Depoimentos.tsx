import { useEffect, useRef, useState } from 'react'

const depoimentos = [
  {
    nome: 'Rafaela Souza',
    tempo: 'Aluna há 8 meses',
    texto: 'A BVOLT mudou minha rotina completamente. Os instrutores são incríveis, sempre atenciosos e motivadores. O ambiente é limpo, moderno e te dá vontade de treinar todo dia!',
    nota: 5,
    inicial: 'R',
    cor: 'bg-primary text-black',
  },
  {
    nome: 'Carlos Henrique',
    tempo: 'Aluno há 1 ano',
    texto: 'Melhor academia de Guapimirim, sem dúvida. Equipamentos sempre em ótimo estado, bastante espaço e o plano recorrente é muito vantajoso. Não me arrependo de ter me matriculado!',
    nota: 5,
    inicial: 'C',
    cor: 'bg-[#222] text-primary',
  },
  {
    nome: 'Juliana Ferreira',
    tempo: 'Aluna há 5 meses',
    texto: 'Entrei sem experiência nenhuma e os instrutores me acolheram muito bem. As aulas de spinning são sensacionais! Já perdi 8kg e me sinto muito mais disposta no dia a dia.',
    nota: 5,
    inicial: 'J',
    cor: 'bg-primary text-black',
  },
  {
    nome: 'Marcos Oliveira',
    tempo: 'Aluno há 2 anos',
    texto: 'Frequento a BVOLT desde o início e só tenho elogios. A estrutura evoluiu muito, tem de tudo para um treino completo. O acesso em horário livre é perfeito para quem trabalha.',
    nota: 5,
    inicial: 'M',
    cor: 'bg-[#222] text-primary',
  },
  {
    nome: 'Patrícia Lima',
    tempo: 'Aluna há 3 meses',
    texto: 'Estava procurando uma academia próxima de casa e a BVOLT superou todas as expectativas. Ótima estrutura, preço justo e um clima muito positivo entre os alunos.',
    nota: 5,
    inicial: 'P',
    cor: 'bg-primary text-black',
  },
]

function Estrelas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Depoimentos() {
  const ref = useRef<HTMLDivElement>(null)
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Auto-avança o carrossel
  useEffect(() => {
    const t = setInterval(() => setAtual((a) => (a + 1) % depoimentos.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setAtual((a) => (a - 1 + depoimentos.length) % depoimentos.length)
  const next = () => setAtual((a) => (a + 1) % depoimentos.length)

  const d = depoimentos[atual]

  return (
    <section id="depoimentos" ref={ref} className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Depoimentos</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            O QUE DIZEM NOSSOS <span className="text-primary">ALUNOS</span>
          </h2>
        </div>

        {/* Carrossel */}
        <div className="animate-on-scroll">
          <div className="relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 md:p-10 min-h-[220px] transition-all duration-500">
            {/* Aspas decorativas */}
            <div className="absolute top-6 right-8 font-display text-8xl text-primary/10 leading-none select-none">"</div>

            <div className="flex items-start gap-5 mb-6">
              {/* Avatar */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-xl ${d.cor}`}>
                {d.inicial}
              </div>
              <div>
                <p className="font-body font-semibold text-white">{d.nome}</p>
                <p className="font-body text-xs text-muted">{d.tempo}</p>
                <div className="mt-1.5">
                  <Estrelas n={d.nota} />
                </div>
              </div>
            </div>

            <p className="font-body text-[#bbb] leading-relaxed text-[15px] relative z-10">
              "{d.texto}"
            </p>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAtual(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === atual ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-[#333] hover:bg-[#555]'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Rating geral */}
        <div className="animate-on-scroll flex justify-center mt-10">
          <div className="flex items-center gap-3 bg-[#111] border border-[#1e1e1e] rounded-full px-6 py-3">
            <Estrelas n={5} />
            <span className="font-body font-bold text-white">5.0</span>
            <span className="font-body text-muted text-sm">· Avaliação dos alunos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
