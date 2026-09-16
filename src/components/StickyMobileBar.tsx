import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RotaLogo } from './RotaLogo';
import { goToHotmartCheckout } from '../config/checkout';

interface StickyMobileBarProps {
  onOpenCheckout?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = () => {
  return (
    <div
      id="sticky-mobile-bar"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center justify-between gap-3"
    >
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-[#855300] uppercase tracking-wider flex items-center gap-1">
          <RotaLogo className="w-3.5 h-3.5" />
          ROTA ENEM
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-black text-[#00288e]">R$ 19,90</span>
          <span className="text-[10px] text-slate-500 font-semibold">único</span>
        </div>
      </div>

      <button
        id="mobile-sticky-cta"
        onClick={goToHotmartCheckout}
        className="flex-1 py-2.5 px-4 rounded-xl bg-[#fea619] hover:bg-[#ffb95f] text-[#2a1700] font-black text-xs tracking-tight shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
      >
        <span>QUERO ME PREPARAR</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

