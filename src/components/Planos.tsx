import { useEffect, useRef, useState } from 'react'

const beneficios = [
  'Isenção de matrícula',
  'Acesso em horário livre',
  'Área de musculação completa',
  'Área aeróbica equipada',
  'Débito automático — não usa o limite do cartão',
]

const faqs = [
  {
    q: 'Como funciona o plano recorrente?',
    a: 'O plano recorrente é cobrado mensalmente de forma automática via débito, sem usar o limite do seu cartão de crédito. Você tem acesso irrestrito à academia durante todo o período.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim! O cancelamento pode ser solicitado com 30 dias de antecedência. Entre em contato com nossa equipe pelo WhatsApp para dar início ao processo.',
  },
  {
    q: 'Tem taxa de matrícula?',
    a: 'No plano recorrente, a taxa de matrícula é isenta! É mais um benefício para quem escolhe o débito automático.',
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#1e1e1e] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#111] transition-colors group"
      >
        <span className="font-body font-semibold text-white text-sm pr-4">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#333] flex items-center justify-center text-primary transition-all duration-300 ${
            open ? 'bg-primary text-black border-primary rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="font-body text-muted text-sm px-5 pb-5 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Planos() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5521996408986&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20BVOLT.',
      '_blank'
    )
  }

  return (
    <section id="planos" ref={ref} className="relative py-24 bg-[#080808]">
      {/* Glow accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Planos</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            ESCOLHA SEU <span className="text-primary">PLANO</span>
          </h2>
        </div>

        {/* Plan Card */}
        <div className="animate-on-scroll flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Most popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-primary text-black text-xs font-body font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                Mais Popular
              </span>
            </div>

            <div className="relative bg-[#111] border border-primary/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(184,240,0,0.1)]">
              {/* Header */}
              <div className="relative p-8 pb-6 border-b border-[#1e1e1e]">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-[10px] font-body font-bold uppercase tracking-widest">
                    Plano Recorrente
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-body text-muted text-lg">R$</span>
                  <span className="font-display text-7xl text-white leading-none">157</span>
                  <div className="flex flex-col mb-2">
                    <span className="font-display text-2xl text-primary">,90</span>
                    <span className="font-body text-muted text-xs">/mês</span>
                  </div>
                </div>
                <p className="font-body text-muted text-xs mt-2 tracking-wide">
                  Débito automático sem comprometer seu cartão
                </p>
              </div>

              {/* Benefits */}
              <div className="p-8 pt-6">
                <ul className="space-y-3.5 mb-8">
                  {beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="font-body text-sm text-[#ccc] leading-tight">{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-primary text-black font-body font-bold uppercase tracking-[0.15em] py-4 rounded-xl hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(184,240,0,0.3)] active:scale-[0.98] text-sm"
                >
                  Matricule-se Agora
                </button>

                <p className="font-body text-muted text-xs text-center mt-4 leading-relaxed">
                  *Cancelamento com 30 dias de antecedência.
                  <br />Para mais informações, fale com a gente!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="animate-on-scroll font-display text-3xl text-white tracking-wide text-center mb-8">
            DÚVIDAS FREQUENTES
          </h3>
          <div className="animate-on-scroll space-y-3">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
