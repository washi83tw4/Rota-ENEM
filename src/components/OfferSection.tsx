import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, CreditCard, QrCode, ArrowRight, Sparkles } from 'lucide-react';
import { goToHotmartCheckout } from '../config/checkout';

interface OfferSectionProps {
  onOpenCheckout?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = () => {
  const deliverables = [
    'Material 100% em PDF: Prático, direto ao ponto para ler no celular, tablet ou imprimir',
    'Interpretação & Resolução: Aprenda a pensar na questão, reconhecer evidências no comando e eliminar alternativas absurdas',
    'Método Completo de Redação: Saia do tema até a redação pronta com tese, argumentos, repertório e intervenção',
    'Checklist Anti-Erros de Redação: Saiba exatamente onde os corretores tiram pontos e blinde seu texto',
    'Matemática Aplicada ao ENEM: Reconheça qual cálculo usar antes de sair aplicando fórmulas na situação errada',
    'Linguagens & Humanas por Evidências: Entenda o que o texto base realmente pede sem cair em pegadinhas',
    'Ciências da Natureza com Foco em Raciocínio: Conecte conceitos de Biologia, Química e Física a problemas do cotidiano',
    'Caderno de Exercícios Práticos Comentados: Pratique o ciclo, descubra por que errou e transforme cada erro em evolução',
    'Plano de Revisão & Reta Final: Chegue à semana da prova sabendo o que revisar e como administrar as 5 horas de exame',
  ];

  return (
    <section id="oferta" className="py-20 px-4 sm:px-6 bg-[#131b2e] text-white relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/20 via-amber-500/15 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Section Top Tag */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fea619] text-[#131b2e] font-black text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> ACESSO COMPLETO AO MÉTODO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Tudo o Que Você Precisa para Chegar à Prova com Direção
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Um investimento pequeno para entrar no ENEM com muito mais segurança, clareza nas questões e um método comprovado de preparação.
          </p>
        </div>

        {/* The Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white text-[#131b2e] p-6 sm:p-10 shadow-2xl border-4 border-[#fea619] relative"
        >
          {/* Top Ribbons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-[#00288e]">
                  MATERIAL 100% PRÁTICO EM PDF • EXERCÍCIOS & GUIAS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#131b2e]">
                Método Rota ENEM
              </h3>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-[#eaedff] text-[#00288e] font-black text-xs sm:text-sm flex items-center gap-1.5">
              ENTENDER → APLICAR → CORRIGIR → REVISAR
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
              O QUE VOCÊ VAI APRENDER NA PRÁTICA:
            </span>
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="p-6 rounded-2xl bg-[#faf8ff] border-2 border-[#00288e]/15 text-center mb-6">
            <div className="text-xs font-bold text-[#855300] uppercase tracking-wider mb-1">
              Menos que o preço de uma aula particular
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mb-2">
              <div className="text-4xl sm:text-5xl font-black text-[#00288e] tracking-tight">
                R$ 19,90
              </div>
              <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                Pagamento Único • Sem Mensalidades
              </span>
            </div>
            <p className="text-xs text-[#00563a] font-bold flex items-center justify-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#fea619]" /> Liberação imediata após a confirmação do pagamento
            </p>
          </div>

          {/* Big CTA */}
          <button
            id="offer-checkout-btn"
            onClick={goToHotmartCheckout}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#fea619] hover:bg-[#ffb95f] text-[#2a1700] font-black text-lg sm:text-xl md:text-2xl shadow-xl shadow-[#fea619]/35 hover:shadow-2xl hover:shadow-[#fea619]/45 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ring-4 ring-[#fea619]/20 group mb-4"
          >
            <span>QUERO ME PREPARAR POR R$ 19,90</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Micro assurances */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-emerald-600" /> PIX com liberação instantânea
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#00288e]" /> Cartão de crédito aprovado na hora
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00563a]" /> 7 Dias de Garantia Incondicional
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

