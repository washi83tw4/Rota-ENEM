import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lock, CheckCircle2, Sparkles, ArrowRight, FileText, CheckCircle, Target, BookOpen, Layers } from 'lucide-react';
import { RotaPlanet3D } from './RotaPlanet3D';
import { goToHotmartCheckout } from '../config/checkout';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#f2f3ff] to-[#faf8ff]">
      {/* Subtle background ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-200/40 via-amber-100/30 to-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* 3D Animated Planet (Centered with generous margin so it never touches the pill below) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-4 sm:mb-6 flex items-center justify-center select-none"
        >
          {/* Soft ambient backlight glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#00288e]/15 via-[#fea619]/15 to-blue-300/20 blur-2xl pointer-events-none -z-10" />
          <RotaPlanet3D className="w-full h-full" />
        </motion.div>

        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#00288e] text-xs sm:text-sm font-bold shadow-xs border border-[#00288e]/15 mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fd298] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00563a]"></span>
          </span>
          <span className="text-[#855300] font-extrabold">🎯 O MÉTODO PRÁTICO: ENTENDER → APLICAR → CORRIGIR → REVISAR</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#131b2e] leading-[1.15] max-w-4xl mb-6"
        >
          Pare de Estudar no Escuro e Comece a{' '}
          <span className="relative inline-block text-[#00288e] decoration-clone">
            Entender o que o ENEM
            <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#fea619]/30 -z-10 rounded-sm"></span>
          </span>{' '}
          Realmente Cobra
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#444653] font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10"
        >
          Aprenda como pensar nas questões, eliminar alternativas absurdas e destravar sua redação do zero. Um caminho claro para <strong className="text-[#131b2e] font-semibold">estudar, praticar com exercícios comentados, corrigir erros e revisar no PDF</strong> sem se perder em montanhas de teoria. <span className="text-[#855300] font-semibold">Tudo isso por apenas R$ 19,90.</span>
        </motion.p>

        {/* Showcase dos Materiais Práticos em PDF e Cadernos de Questões (Substitui o antigo player de vídeo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-3xl rounded-3xl bg-white border-2 border-[#00288e]/15 shadow-xl shadow-blue-900/5 p-6 sm:p-8 mb-8 text-left relative overflow-hidden"
        >
          {/* Top banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#00288e]">
                <FileText className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#855300] block">
                  MATERIAL 100% PRÁTICO EM PDF
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#131b2e]">
                  Direto ao ponto: Exercícios, Guias e Análises Comentadas
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#00563a] font-extrabold text-xs flex items-center gap-1.5 border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Download Imediato
            </span>
          </div>

          {/* Cards Grid of the Method Materials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#00288e]/10 flex items-start gap-3 hover:border-[#00288e]/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#00288e] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Target className="w-4 h-4 text-[#fea619]" />
              </div>
              <div>
                <span className="text-xs font-black text-[#00288e] block mb-0.5">
                  Caderno de Exercícios por Habilidades
                </span>
                <p className="text-[11px] text-[#444653] leading-relaxed">
                  Questões reais do ENEM organizadas pelo ciclo de resolução prática, com passo a passo de como eliminar distratores.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#00288e]/10 flex items-start gap-3 hover:border-[#00288e]/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#00288e] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <BookOpen className="w-4 h-4 text-[#fea619]" />
              </div>
              <div>
                <span className="text-xs font-black text-[#00288e] block mb-0.5">
                  Guia Estruturado de Redação Nota 900+
                </span>
                <p className="text-[11px] text-[#444653] leading-relaxed">
                  Checklist visual anti-erros de corretores, teses prontas para modelar e repertórios legitimados aplicáveis a qualquer tema.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#00288e]/10 flex items-start gap-3 hover:border-[#00288e]/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#00288e] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Layers className="w-4 h-4 text-[#fea619]" />
              </div>
              <div>
                <span className="text-xs font-black text-[#00288e] block mb-0.5">
                  Decodificação do Algoritmo TRI
                </span>
                <p className="text-[11px] text-[#444653] leading-relaxed">
                  Tabelas práticas para entender a coerência pedagógica das questões e pontuar alto acertando fáceis e médias.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#00288e]/10 flex items-start gap-3 hover:border-[#00288e]/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#00288e] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#fea619]" />
              </div>
              <div>
                <span className="text-xs font-black text-[#00288e] block mb-0.5">
                  Caderno de Correção & Revisão Ativa
                </span>
                <p className="text-[11px] text-[#444653] leading-relaxed">
                  Planilhas e fichas de acompanhamento para mapear seus erros e transformá-los em revisões rápidas de 5 minutos.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Highlights Pill */}
          <div className="p-3 bg-[#eaedff]/60 rounded-xl border border-[#00288e]/15 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-extrabold text-[#00288e] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#fea619]" />
              Acesso em PDF completo: leia no celular, tablet ou imprima se preferir
            </span>
            <span className="font-bold text-[#444653]">
              Sem aulas longas • Direto na prática
            </span>
          </div>
        </motion.div>

        {/* Primary Giant Conversion CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-md flex flex-col items-center gap-2.5 mb-10"
        >
          <button
            id="hero-cta-btn"
            onClick={goToHotmartCheckout}
            className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl bg-[#fea619] hover:bg-[#ffb95f] text-[#2a1700] font-extrabold text-base sm:text-xl md:text-2xl shadow-xl shadow-[#fea619]/35 hover:shadow-2xl hover:shadow-[#fea619]/45 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer ring-4 ring-[#fea619]/20 group animate-pulse-slow"
          >
            <span>QUERO ME PREPARAR POR R$ 19,90</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs sm:text-sm font-semibold text-[#444653] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#fea619]" />
            Tudo isso por apenas R$ 19,90 • Menos que uma aula particular • Acesso Imediato
          </span>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-4 border-t border-[#c4c5d5]/40 text-left"
        >
          <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-xs">
            <Lock className="w-5 h-5 text-[#00288e] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#131b2e]">Compra 100% Segura</span>
              <span className="text-[11px] text-[#444653]">Criptografia de ponta</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-xs">
            <Zap className="w-5 h-5 text-[#fea619] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#131b2e]">Acesso Imediato</span>
              <span className="text-[11px] text-[#444653]">Sem mensalidades</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#00563a] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#131b2e]">7 Dias de Garantia</span>
              <span className="text-[11px] text-[#444653]">Risco zero absoluto</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#131b2e]">Hotmart Seguro</span>
              <span className="text-[11px] text-[#444653]">Receba no e-mail agora</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

