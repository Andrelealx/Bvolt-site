import { useEffect, useRef, useState } from 'react'

const INSTA = 'https://www.instagram.com/bvolt.academia/'

const fotos = [
  '/fotosevideos/bvolt.academia_487532755_17887970298236688_7461216676606174773_n.jpg', // vista panorâmica academia
  '/fotosevideos/bvolt.academia_487217435_17887833564236688_3794778919397093058_n.jpg', // equipamentos verde-neon
  '/fotosevideos/bvolt.academia_486647117_17887703982236688_9167226951104866497_n.jpg', // halteres 10KG
  '/fotosevideos/bvolt.academia_519819589_17901046797236688_2237980212244078924_n.jpg', // halteres 22.5KG estético
  '/fotosevideos/bvolt.academia_630150039_17924374683236688_1536547566867741529_n.jpg', // homem treinando intensamente
  '/fotosevideos/bvolt.academia_649268733_17928582045236688_3605034589290661172_n.jpg', // senhor treinando
  '/fotosevideos/bvolt.academia_516192393_17899835718236688_5287815090439304399_n.jpg', // mulher alongando kettlebells
  '/fotosevideos/bvolt.academia_540619207_17906277534236688_5879815930483751496_n.jpg', // jardim vertical BVOLT
]

const videos = [
  '/fotosevideos/bvolt.academia.mp4',
  '/fotosevideos/bvolt.academia (1).mp4',
]

const POSTER = '/fotosevideos/bvolt.academia_487532755_17887970298236688_7461216676606174773_n.jpg'

type Aba = 'todos' | 'fotos' | 'videos'

// Lightbox
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl leading-none z-10"
        onClick={onClose}
      >
        ×
      </button>
      <img
        src={src}
        alt="BVOLT Academia"
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

// Card de foto quadrado
function FotoCard({ src, index, onOpen }: { src: string; index: number; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="relative group aspect-square overflow-hidden rounded-xl block w-full"
    >
      <img
        src={src}
        alt="BVOLT Academia"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading={index < 6 ? 'eager' : 'lazy'}
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <svg className="w-8 h-8 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
        </svg>
      </div>
    </button>
  )
}

// Card de vídeo quadrado
function VideoCard({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div
      className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        poster={POSTER}
        preload="none"
        className="w-full h-full object-cover"
      />
      {/* Overlay play/pause */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        playing ? 'bg-black/0 opacity-0 group-hover:opacity-100 group-hover:bg-black/30' : 'bg-black/40'
      }`}>
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl">
          {playing
            ? <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
            : <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          }
        </div>
      </div>
      {/* Badge vídeo */}
      <div className="absolute top-2 left-2">
        <span className="bg-black/70 text-primary text-[10px] font-body font-bold uppercase tracking-widest px-2 py-1 rounded-md flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Vídeo
        </span>
      </div>
    </div>
  )
}

export default function Galeria() {
  const ref = useRef<HTMLDivElement>(null)
  const [aba, setAba] = useState<Aba>('todos')
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const abas: { id: Aba; label: string; count: number }[] = [
    { id: 'todos', label: 'Todos', count: fotos.length + videos.length },
    { id: 'fotos', label: 'Fotos', count: fotos.length },
    { id: 'videos', label: 'Vídeos', count: videos.length },
  ]

  return (
    <section id="galeria" ref={ref} className="relative py-24 bg-[#0a0a0a]">
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">@bvolt.academia</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            NOSSA <span className="text-primary">COMUNIDADE</span>
          </h2>
        </div>

        {/* Abas */}
        <div className="animate-on-scroll flex items-center justify-center gap-2 mb-8">
          {abas.map((a) => (
            <button
              key={a.id}
              onClick={() => setAba(a.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-200 ${
                aba === a.id
                  ? 'bg-primary text-black'
                  : 'bg-[#111] border border-[#222] text-muted hover:border-primary/50 hover:text-white'
              }`}
            >
              {a.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                aba === a.id ? 'bg-black/20 text-black' : 'bg-[#1a1a1a] text-muted'
              }`}>
                {a.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {(aba === 'todos' || aba === 'fotos') && fotos.map((src, i) => (
            <FotoCard key={src} src={src} index={i} onOpen={() => setLightbox(src)} />
          ))}
          {(aba === 'todos' || aba === 'videos') && videos.map((src) => (
            <VideoCard key={src} src={src} />
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-10">
          <a
            href={INSTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#333] bg-[#111] text-white font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(184,240,0,0.15)] transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Siga no @bvolt.academia
          </a>
        </div>
      </div>
    </section>
  )
}
