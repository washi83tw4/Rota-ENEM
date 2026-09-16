import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { goToHotmartCheckout } from '../config/checkout';

interface FinalCtaSectionProps {
  onOpenCheckout?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = () => {
  return (
    <section id="chamada-final" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#00288e] via-[#1e40af] to-[#00288e] text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ffddb8] font-bold text-xs uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#fea619]" /> PREPARAÇÃO COM DIREÇÃO
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Chegue à Semana da Prova Sabendo Exatamente o Que Fazer
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Pare de estudar no escuro. Tenha um caminho claro para entender enunciados, destravar sua redação, praticar de forma estratégica e transformar erros em revisão.
          </p>

          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              onClick={goToHotmartCheckout}
              className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-2xl bg-[#fea619] hover:bg-[#ffb95f] text-[#131b2e] font-black text-lg sm:text-xl shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer ring-4 ring-white/20"
            >
              <span>QUERO ME PREPARAR POR R$ 19,90</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <span className="text-xs text-blue-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3fd298]" /> Tudo isso por apenas R$ 19,90 • Menos que o preço de uma aula particular • Liberação Imediata
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

