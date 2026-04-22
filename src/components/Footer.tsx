const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const handleLink = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#080808]">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src="/logo.jpg" alt="BVOLT Academia" className="h-16 w-auto object-contain mb-3" />
            <p className="font-body text-muted text-sm leading-relaxed max-w-xs">
              A sua melhor versão começa aqui. Academia moderna em Guapimirim, RJ.
            </p>
            <a
              href="https://www.instagram.com/bvolt.academia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-muted hover:text-primary transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-body text-sm">@bvolt.academia</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs text-muted uppercase tracking-[0.25em] mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
                    className="font-body text-sm text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-body text-xs text-muted uppercase tracking-[0.25em] mb-4">Pronto para começar?</h4>
            <p className="font-body text-muted text-sm mb-4 leading-relaxed">
              Dê o primeiro passo hoje. Sua transformação começa com um clique.
            </p>
            <button
              onClick={() => handleLink('#contato')}
              className="bg-primary text-black font-body font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Matricule-se Agora
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a1a1a] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-muted text-xs">
            © 2025 BVOLT Academia. Todos os direitos reservados.
          </p>
          <p className="font-body text-[#444] text-xs">
            Desenvolvido por{' '}
            <span className="text-muted hover:text-primary transition-colors cursor-default">
              Leal Systems
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
