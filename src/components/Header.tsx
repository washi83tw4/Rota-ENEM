import React from 'react';
import { User } from 'lucide-react';
import { RotaLogo } from './RotaLogo';
import { goToHotmartCheckout } from '../config/checkout';

interface HeaderProps {
  onOpenCheckout?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 left-0 w-full z-40 shadow-xs bg-white/95 backdrop-blur-md border-b border-[#c4c5d5]/30 transition-all">
      <div className="w-full max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Brand Logo with Official Static Logo */}
        <a
          href="#"
          id="header-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
        >
          {/* Official Static Logo */}
          <div className="w-11 h-11 relative flex items-center justify-center rounded-xl bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors p-1">
            <RotaLogo className="w-full h-full group-hover:scale-105 transition-transform drop-shadow-xs" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-black text-[#00288e] text-lg sm:text-xl tracking-tight">
                Rota ENEM
              </span>
            </div>
            <span className="text-[11px] text-[#855300] font-bold tracking-tight">
              Estratégia • Prática • Revisão
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="header-nav" className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#444653]">
          <button
            onClick={() => scrollTo('arsenal')}
            className="hover:text-[#00288e] transition-colors cursor-pointer"
          >
            O que inclui
          </button>
          <button
            onClick={() => scrollTo('depoimentos')}
            className="hover:text-[#00288e] transition-colors cursor-pointer"
          >
            Resultados
          </button>
          <button
            onClick={() => scrollTo('garantia')}
            className="hover:text-[#00288e] transition-colors cursor-pointer"
          >
            Garantia
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-[#00288e] transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            id="header-cta-btn"
            onClick={goToHotmartCheckout}
            className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 rounded-xl bg-[#fea619] hover:bg-[#ffb95f] text-[#2a1700] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#fea619]/25 hover:shadow-lg hover:shadow-[#fea619]/35 hover:-translate-y-0.5 active:scale-95 cursor-pointer leading-tight"
          >
            <span className="hidden sm:inline">QUERO ME PREPARAR POR R$ 19,90</span>
            <span className="sm:hidden">ACESSAR POR R$ 19,90</span>
          </button>

          <div
            title="Área do Aluno"
            className="w-8 h-8 rounded-full bg-[#00288e] flex items-center justify-center text-white shrink-0 shadow-xs"
          >
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

