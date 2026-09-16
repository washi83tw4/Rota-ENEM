import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Zap } from 'lucide-react';
import { goToHotmartCheckout } from '../config/checkout';

export const TopUrgencyBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 21,
    minutes: 58,
    seconds: 45,
  });

  useEffect(() => {
    const STORAGE_KEY = 'rota_enem_timer_end';
    let endTimeStr = localStorage.getItem(STORAGE_KEY);
    let endTime: number;

    if (!endTimeStr) {
      endTime = Date.now() + 22 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, endTime.toString());
    } else {
      endTime = parseInt(endTimeStr, 10);
      if (isNaN(endTime) || endTime <= Date.now()) {
        endTime = Date.now() + 22 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, endTime.toString());
      }
    }

    const updateTimer = () => {
      const difference = endTime - Date.now();
      if (difference <= 0) {
        // Reset 22h cycle
        const nextEnd = Date.now() + 22 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, nextEnd.toString());
        setTimeLeft({ hours: 21, minutes: 59, seconds: 59 });
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <div id="top-urgency-bar" className="bg-[#131b2e] text-[#eef0ff] py-2 px-3 sm:px-6 border-b border-white/10 text-xs sm:text-sm">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center">
        {/* Badge */}
        <span className="font-extrabold tracking-wider uppercase bg-[#fea619] px-2.5 py-0.5 rounded-full text-[#131b2e] text-[10px] sm:text-xs shrink-0 flex items-center gap-1 shadow-xs">
          <Zap className="w-3 h-3 text-[#131b2e] fill-current" /> CONDIÇÃO ESPECIAL
        </span>

        {/* Price Contrast */}
        <div className="flex items-center gap-1.5 font-medium">
          <span className="text-slate-400 line-through text-xs">De R$ 59,90</span>
          <span className="text-white font-bold">por apenas</span>
          <span className="text-[#fea619] font-black text-sm">R$ 19,90</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 font-mono text-xs">
          <Timer className="w-3.5 h-3.5 text-[#fea619]" />
          <span className="text-slate-300 text-[11px] font-sans font-medium hidden md:inline">
            Oferta expira em:
          </span>
          <span className="font-bold text-white tracking-wider">
            {formatDigit(timeLeft.hours)}h {formatDigit(timeLeft.minutes)}m {formatDigit(timeLeft.seconds)}s
          </span>
        </div>

        {/* Quick CTA */}
        <button
          onClick={goToHotmartCheckout}
          className="text-[#fea619] hover:text-[#ffb95f] font-bold text-xs inline-flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
        >
          <span>Garantir Vaga</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};


