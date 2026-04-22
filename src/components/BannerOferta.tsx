import { useState } from 'react'

const WA_LINK = 'https://api.whatsapp.com/send?phone=5521996408986&text=Ol%C3%A1!%20Vi%20a%20promo%C3%A7%C3%A3o%20no%20site%20e%20quero%20garantir%20a%20isen%C3%A7%C3%A3o%20de%20matr%C3%ADcula!'

export default function BannerOferta() {
  const [fechado, setFechado] = useState(false)

  if (fechado) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-black">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <span className="text-sm">⚡</span>
          <p className="font-body font-semibold text-sm text-center">
            <span className="font-bold">PROMOÇÃO:</span> Matricule-se agora e ganhe isenção da taxa de matrícula!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 bg-black text-primary font-body font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-[#111] transition-colors whitespace-nowrap"
          >
            Garantir agora →
          </a>
        </div>
        <button
          onClick={() => setFechado(true)}
          className="text-black/60 hover:text-black text-xl leading-none flex-shrink-0"
          aria-label="Fechar"
        >
          ×
        </button>
      </div>
    </div>
  )
}
