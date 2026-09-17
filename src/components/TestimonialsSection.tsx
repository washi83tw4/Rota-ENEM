import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote, GraduationCap } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#faf8ff] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#00288e] bg-[#eaedff] px-3.5 py-1 rounded-full mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#00288e]" /> HISTÓRIAS REAIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
            Quem Usou o Rota ENEM Já Garantiu a Vaga Federal
          </h2>
          <p className="text-sm sm:text-base text-[#444653] leading-relaxed">
            Mais de 14.800 estudantes já passaram pelo método. Veja o depoimento espontâneo de quem conquistou a aprovação dos sonhos:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white rounded-2xl border border-[#c4c5d5]/40 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-[#00288e]/30 transition-all relative"
            >
              <div>
                {/* Course tag & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#fea619] text-[#fea619]"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ffddb8] text-[#855300]">
                    {t.courseTag}
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-[#444653] leading-relaxed italic mb-6">
                  {t.feedback}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
                  }}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#00288e]/20"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#131b2e]">{t.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" title="Aluno Verificado" />
                  </div>
                  <span className="text-xs text-[#855300] font-semibold">{t.locationScore}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
