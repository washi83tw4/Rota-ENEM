import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#faf8ff] relative">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#00288e] bg-[#eaedff] px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00288e]" /> DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
            Perguntas Frequentes Sobre a Rota ENEM
          </h2>
          <p className="text-sm sm:text-base text-[#444653]">
            Tire todas as suas dúvidas antes de começar. Acesso transparente e imediato.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#c4c5d5]/40 overflow-hidden shadow-xs hover:border-[#00288e]/30 transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#131b2e] cursor-pointer"
                >
                  <span className={isOpen ? 'text-[#00288e]' : ''}>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00288e]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#444653] leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
