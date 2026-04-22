const stats = [
  { value: '8.400+', label: 'Seguidores' },
  { value: '291', label: 'Posts' },
  { value: '∞', label: 'Modalidades' },
  { value: '24h', label: 'Horário Livre' },
]

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/fotosevideos/bvolt.academia_487217435_17887833564236688_3794778919397093058_n.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente sobre o vídeo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-8">
        {/* Badge */}
        <div className="hero-el hero-el-1 flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary text-xs font-body font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
            <span className="animate-pulse">⚡</span>
            Academia nº1 em Guapimirim
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-el hero-el-2 font-display text-center leading-none tracking-wide text-white">
          <span className="block text-[clamp(3.5rem,10vw,9rem)]">A SUA MELHOR</span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)]">
            VERSÃO{' '}
            <span className="text-primary">COMEÇA</span>
          </span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)]">AQUI</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-el hero-el-3 text-center font-body text-muted text-lg sm:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
          Um novo conceito de autocuidado em{' '}
          <span className="text-white font-medium">Guapimirim</span>
        </p>

        {/* CTA Buttons */}
        <div className="hero-el hero-el-4 flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <button
            onClick={() => handleScroll('#contato')}
            className="inline-flex items-center justify-center gap-2 bg-primary text-black font-body font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 rounded hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(184,240,0,0.35)] active:scale-95"
          >
            Garanta sua Vaga
            <span>→</span>
          </button>
          <button
            onClick={() => handleScroll('#planos')}
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body font-semibold uppercase tracking-[0.15em] text-sm px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-all active:scale-95"
          >
            Conheça os Planos
          </button>
        </div>

        {/* Stats strip */}
        <div className="hero-el hero-el-5 mt-16 border-t border-[#1e1e1e] pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="font-display text-[clamp(2rem,4vw,3rem)] text-primary leading-none group-hover:text-white transition-colors">
                  {s.value}
                </div>
                <div className="font-body text-xs text-muted tracking-widest uppercase mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs tracking-widest uppercase text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
