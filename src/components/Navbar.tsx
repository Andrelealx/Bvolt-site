import { useState, useEffect } from 'react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'top-0 bg-[#080808]/90 backdrop-blur-md border-b border-[#222]'
            : 'top-10 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLink('#inicio') }}
            className="flex items-center group"
          >
            <img
              src="/logo.jpg"
              alt="BVOLT Academia"
              className="h-14 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
                  className="font-body text-sm tracking-wider text-muted hover:text-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburguer */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleLink('#contato') }}
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-black text-sm font-body font-bold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-primary-dark transition-colors"
            >
              Matricule-se
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-4 h-0.5 bg-primary transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 pointer-events-auto"
          style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0f0f0f] border-l border-[#222] transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#222]">
          <img src="/logo.jpg" alt="BVOLT Academia" className="h-8 w-auto object-contain" />
          <button onClick={() => setOpen(false)} className="text-muted hover:text-white text-2xl leading-none">
            ×
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-5 flex-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
                className="flex items-center gap-3 px-3 py-3.5 rounded-lg text-muted hover:text-white hover:bg-[#1a1a1a] transition-all font-body tracking-wider"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-60" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-5 border-t border-[#222]">
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleLink('#contato') }}
            className="block text-center bg-primary text-black font-bold uppercase tracking-wider py-3.5 rounded font-body hover:bg-primary-dark transition-colors"
          >
            Matricule-se Agora
          </a>
        </div>
      </aside>
    </>
  )
}
