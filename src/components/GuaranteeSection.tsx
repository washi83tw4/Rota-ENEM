import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, HeartHandshake } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#faf8ff] border-b border-[#c4c5d5]/30">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border-2 border-[#855300]/20 p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center gap-6 sm:gap-10"
        >
          {/* Golden Seal Badge */}
          <div className="shrink-0 relative">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#855300] via-[#fea619] to-[#ffddb8] p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#131b2e] flex flex-col items-center justify-center text-center p-2 text-white border-2 border-white/20">
                <Shield className="w-8 h-8 text-[#fea619] mb-1" />
                <span className="text-xl sm:text-2xl font-black text-[#fea619] leading-none">
                  7 DIAS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  Garantia Total
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#00563a] bg-emerald-100/70 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> SEU INVESTIMENTO 100% PROTEGIDO
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#131b2e] tracking-tight">
              Garantia Incondicional de Satisfação de 7 Dias
            </h3>
            <p className="text-xs sm:text-sm text-[#444653] leading-relaxed">
              Acesse o método completo, aplique as estratégias de interpretação, estude a estrutura de redação e teste o cronograma prático. Se por qualquer motivo você sentir que o método não te deu mais direção e clareza para o ENEM, basta enviar um único e-mail e estornamos 100% dos seus R$ 19,90.
            </p>
            <p className="text-xs text-[#855300] font-bold flex items-center justify-center md:justify-start gap-1.5 pt-1">
              <HeartHandshake className="w-4 h-4 text-[#fea619]" />
              Sem burocracia, sem perguntas e continuamos amigos. O risco é todo nosso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
