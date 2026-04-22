import { useEffect, useRef, useState } from 'react'

const WA_BASE = 'https://api.whatsapp.com/send?phone=5521996408986'

function mascaraTelefone(valor: string) {
  const nums = valor.replace(/\D/g, '').slice(0, 11)
  if (nums.length <= 2) return nums.length ? `(${nums}` : ''
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`
  if (nums.length <= 10) return `(${nums.slice(0, 2)}) ${nums.slice(2, 6)}-${nums.slice(6)}`
  return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`
}

export default function Contato() {
  const ref = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ nome: '', whatsapp: '', modalidade: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const texto = encodeURIComponent(
      `Olá! Gostaria de fazer minha inscrição na BVOLT.\n\nNome: ${form.nome}\nModalidade: ${form.modalidade || 'A definir'}`
    )
    setTimeout(() => {
      window.open(`${WA_BASE}&text=${texto}`, '_blank')
    }, 800)
  }

  return (
    <section id="contato" ref={ref} className="relative py-24 bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">Contato</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            VENHA FAZER <span className="text-primary">PARTE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-on-scroll">
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wide mb-2">PERFEITO!</h3>
                  <p className="font-body text-muted text-sm">
                    Te redirecionamos para o WhatsApp. Até lá!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl text-white tracking-wide mb-6">ENTRE EM CONTATO</h3>

                  <div>
                    <label className="block font-body text-xs text-muted uppercase tracking-widest mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-muted uppercase tracking-widest mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: mascaraTelefone(e.target.value) })}
                      placeholder="(21) 99999-9999"
                      className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-muted uppercase tracking-widest mb-2">
                      Modalidade de interesse
                    </label>
                    <select
                      value={form.modalidade}
                      onChange={(e) => setForm({ ...form, modalidade: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3.5 font-body text-sm text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111]">Selecione uma modalidade</option>
                      <option value="Musculação" className="bg-[#111]">Musculação</option>
                      <option value="Spinning" className="bg-[#111]">Spinning</option>
                      <option value="Aulas em Grupo" className="bg-[#111]">Aulas em Grupo</option>
                      <option value="Quero conhecer tudo" className="bg-[#111]">Quero conhecer tudo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-black font-body font-bold uppercase tracking-[0.15em] py-4 rounded-xl hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(184,240,0,0.3)] active:scale-[0.98] text-sm mt-2 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Quero me Matricular
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="animate-on-scroll space-y-6">
            <div>
              <h3 className="font-display text-2xl text-white tracking-wide mb-6">ONDE ESTAMOS</h3>
            </div>

            {/* Cards de info */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 bg-[#111] border border-[#1e1e1e] rounded-xl p-4">
                <div className="text-primary text-xl mt-0.5">📍</div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">Endereço</p>
                  <p className="font-body text-muted text-sm mt-0.5">Av. Dedo de Deus, 1.500 — Guapimirim, RJ</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#111] border border-[#1e1e1e] rounded-xl p-4">
                <div className="text-primary text-xl mt-0.5">📸</div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">Instagram</p>
                  <a
                    href="https://www.instagram.com/bvolt.academia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-muted text-sm mt-0.5 hover:text-primary transition-colors"
                  >
                    @bvolt.academia
                  </a>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Dedo+de+Deus,+1500,+Guapimirim,+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#333] text-white font-body font-semibold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl hover:border-primary hover:text-primary transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Abrir no Maps
              </a>
              <a
                href={`${WA_BASE}&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20minha%20inscri%C3%A7%C3%A3o%20na%20BVOLT.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-black font-body font-bold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl hover:bg-primary-dark transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            {/* Google Maps embed — busca pelo endereço real */}
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] h-48">
              <iframe
                title="BVOLT Academia no Mapa"
                src="https://maps.google.com/maps?q=Av.+Dedo+de+Deus,+1500,+Guapimirim,+RJ,+Brasil&output=embed&hl=pt-BR"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
