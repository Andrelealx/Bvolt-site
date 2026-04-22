import { useEffect, useRef, useState } from 'react'

const fotos = [
  { src: '/fotosevideos/bvolt.academia_486647117_17887703982236688_9167226951104866497_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_487217435_17887833564236688_3794778919397093058_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_487532755_17887970298236688_7461216676606174773_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_496557423_17892536865236688_8996537732074790439_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_516192393_17899835718236688_5287815090439304399_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_519819589_17901046797236688_2237980212244078924_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_526698605_17903105910236688_1793431826861254644_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_539562539_17906277552236688_2929594926043112521_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_540398917_17906277561236688_6212658996534662579_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_540619207_17906277534236688_5879815930483751496_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_562388765_17911042290236688_5761775995543296751_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_630150039_17924374683236688_1536547566867741529_n.jpg', alt: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia_649268733_17928582045236688_3605034589290661172_n.jpg', alt: 'BVOLT Academia' },
]

const videos = [
  { src: '/fotosevideos/bvolt.academia.mp4', label: 'BVOLT Academia' },
  { src: '/fotosevideos/bvolt.academia (1).mp4', label: 'BVOLT Academia' },
]

function VideoCard({ src }: { src: string; label: string }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggle = () => {
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
      className="relative group rounded-xl overflow-hidden cursor-pointer break-inside-avoid mb-3"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        poster="/fotosevideos/bvolt.academia_496557423_17892536865236688_8996537732074790439_n.jpg"
        preload="none"
        className="w-full object-cover"
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${playing ? 'bg-black/0 opacity-0 group-hover:opacity-100' : 'bg-black/40'}`}>
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
          {playing ? (
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
      <div className="absolute bottom-2 left-2">
        <span className="bg-black/60 text-primary text-[10px] font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded">
          ▶ Vídeo
        </span>
      </div>
    </div>
  )
}

export default function Galeria() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" ref={ref} className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs text-primary tracking-[0.3em] uppercase">@bvolt.academia</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none tracking-wide">
            NOSSA <span className="text-primary">COMUNIDADE</span>
          </h2>
          <p className="font-body text-muted mt-3 text-sm">
            Faça parte do movimento. Siga a gente no Instagram!
          </p>
        </div>

        {/* Grid masonry com fotos e vídeos intercalados */}
        <div className="animate-on-scroll columns-2 md:columns-3 gap-3">
          {fotos.slice(0, 4).map((foto, i) => (
            <a
              key={i}
              href="https://www.instagram.com/bvolt.academia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block break-inside-avoid rounded-xl overflow-hidden mb-3"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-body text-xs text-white tracking-widest uppercase">Ver no Instagram</span>
              </div>
            </a>
          ))}

          {/* Vídeos intercalados */}
          {videos.map((v, i) => (
            <VideoCard key={i} src={v.src} label={v.label} />
          ))}

          {fotos.slice(4).map((foto, i) => (
            <a
              key={i + 4}
              href="https://www.instagram.com/bvolt.academia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block break-inside-avoid rounded-xl overflow-hidden mb-3"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-body text-xs text-white tracking-widest uppercase">Ver no Instagram</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="animate-on-scroll text-center mt-12">
          <a
            href="https://www.instagram.com/bvolt.academia/"
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
