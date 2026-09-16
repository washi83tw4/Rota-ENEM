import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, ArrowRight, BookOpen, Layers, Check } from 'lucide-react';
import { MODULES_DATA } from '../data/content';
import { ModuleItem } from '../types';
import { ModulePreviewModal } from './ModulePreviewModal';
import { goToHotmartCheckout } from '../config/checkout';

interface ArsenalSectionProps {
  onOpenCheckout?: () => void;
}

export const ArsenalSection: React.FC<ArsenalSectionProps> = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const mainModule = MODULES_DATA.find((m) => m.largeCard);
  const otherModules = MODULES_DATA.filter((m) => !m.largeCard);

  return (
    <section id="arsenal" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#faf8ff] relative">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#00288e] bg-[#eaedff] px-3 py-1 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5 text-[#00288e]" /> O CAMINHO NA PRÁTICA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
            O Que Você Vai Aprender na Prática com o Método
          </h2>
          <p className="text-sm sm:text-base text-[#444653] leading-relaxed">
            Nada de apostilas infinitas ou teorias intermináveis. Cada pilar foi estruturado para gerar clareza, aplicação nas questões e segurança na prova.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Card (Module 01) */}
          {mainModule && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="lg:col-span-6 xl:col-span-7 bg-white rounded-2xl border-2 border-[#00288e]/20 p-6 sm:p-8 shadow-lg shadow-blue-900/5 flex flex-col justify-between relative overflow-hidden group hover:border-[#00288e]/50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300"
            >
              {/* Subtle ambient light gradient sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-amber-400/0 to-blue-600/0 group-hover:from-blue-500/[0.04] group-hover:via-amber-400/[0.03] group-hover:to-blue-600/[0.05] transition-all duration-500 pointer-events-none" />

              {/* Top badges */}
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-[#00288e] text-white text-xs font-extrabold rounded-md uppercase tracking-wider">
                    {mainModule.badge}
                  </span>
                  {mainModule.tag && (
                    <span className="px-2.5 py-1 bg-[#ffddb8] text-[#855300] text-xs font-extrabold rounded-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#fea619] fill-[#fea619]" />
                      {mainModule.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#131b2e] mb-3 group-hover:text-[#00288e] transition-colors">
                  {mainModule.title}
                </h3>
                <p className="text-sm text-[#444653] leading-relaxed mb-6">
                  {mainModule.description}
                </p>

                {/* Features pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {mainModule.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-[#00563a] bg-[#eaedff] px-2.5 py-1 rounded-md"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphical Preview Mockup */}
              <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#00288e]/10 to-[#00288e]/5 p-4 border border-[#00288e]/15 mb-6 group-hover:border-[#00288e]/30 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-[#00288e] mb-3 pb-2 border-b border-blue-200/50">
                  <span className="font-bold flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> ALGORITMO TRI DECODIFICADO
                  </span>
                  <span className="bg-[#fea619] text-[#131b2e] px-1.5 py-0.5 rounded font-extrabold text-[10px]">
                    800+ PTS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg shadow-xs border border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500">Matemática</div>
                    <div className="text-base font-extrabold text-[#00288e]">28 Acertos = 815 pts</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Com coerência TRI</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-xs border border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500">Natureza</div>
                    <div className="text-base font-extrabold text-[#00288e]">26 Acertos = 770 pts</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Com coerência TRI</div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedModule(mainModule)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00288e] hover:text-[#1e40af] hover:underline cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> Espiar Prévia do Guia
                </button>
                <button
                  onClick={goToHotmartCheckout}
                  className="px-4 py-2 rounded-xl bg-[#fea619] hover:bg-[#ffb95f] text-[#131b2e] font-extrabold text-xs transition-all shadow-xs group-hover:shadow-md group-hover:shadow-amber-500/20 cursor-pointer flex items-center gap-1"
                >
                  Garantir Acesso <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Grid of Other 4 Modules */}
          <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
                className="bg-white rounded-2xl border border-[#c4c5d5]/40 p-5 shadow-xs flex flex-col justify-between hover:shadow-xl hover:shadow-blue-600/10 hover:border-[#00288e]/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle card glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-transparent to-amber-300/0 group-hover:from-blue-500/[0.03] group-hover:to-amber-300/[0.04] transition-all duration-400 pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-[#eaedff] group-hover:bg-[#dfe4ff] text-[#00288e] text-[10px] font-extrabold rounded uppercase tracking-wider mb-2 transition-colors">
                    {module.badge}
                  </span>
                  <h4 className="text-base font-extrabold text-[#131b2e] mb-2 group-hover:text-[#00288e] transition-colors leading-snug">
                    {module.title}
                  </h4>
                  <p className="text-xs text-[#444653] leading-relaxed mb-4 line-clamp-3">
                    {module.description}
                  </p>
                </div>

                <div className="relative z-10">
                  {module.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="text-[11px] font-bold text-[#00563a] bg-emerald-50 px-2 py-1 rounded mb-3 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  <button
                    onClick={() => setSelectedModule(module)}
                    className="w-full py-1.5 rounded-lg border border-slate-200 group-hover:border-[#00288e]/40 group-hover:bg-[#f2f3ff] text-[#00288e] text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" /> Ver Detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Preview Modal */}
      <ModulePreviewModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onSelectOffer={goToHotmartCheckout}
      />
    </section>
  );
};

