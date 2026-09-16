import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const PainVsSolution: React.FC = () => {
  return (
    <section id="comparativo" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f2f3ff]/60 border-y border-[#c4c5d5]/30 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#855300] bg-[#ffddb8] px-3 py-1 rounded-full mb-3">
            <AlertTriangle className="w-3.5 h-3.5" /> CLAREZA VS. FRUSTRAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
            Você Estuda Muito, mas Sente que na Hora da Prova Não Evolui?
          </h2>
          <p className="text-sm sm:text-base text-[#444653] leading-relaxed">
            O problema <span className="font-bold text-[#131b2e]">não é a sua capacidade</span>. É a falta de um método prático. Ficar apenas consumindo conteúdo e acumulando apostilas gera cansaço sem resultado. Veja a diferença:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 sm:p-8 bg-white border-2 border-red-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-red-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#ba1a1a] flex items-center justify-center font-bold">
                    ❌
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#131b2e]">ANTES: Estudando no Escuro</h3>
                    <span className="text-xs font-semibold text-red-600">Muito esforço, pouca direção</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 bg-red-100/60 text-[#ba1a1a] rounded-md">
                  Sem Método
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#444653]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#131b2e]">Lê o enunciado e não entende:</strong> perde tempo em textos longos sem conseguir identificar o que a questão realmente está cobrando.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#131b2e]">Trava na hora da redação:</strong> não sabe como organizar tese, repertório e proposta de intervenção de forma estruturada.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#131b2e]">Aplica fórmulas na situação errada:</strong> tenta decorar contas sem entender qual caminho escolher antes de calcular.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#131b2e]">Não sabe revisar os próprios erros:</strong> faz simulados, erra por pura interpretação e repete as mesmas falhas na prova.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-red-100/80 bg-red-50/50 p-3.5 rounded-xl text-xs font-semibold text-red-800 flex items-center justify-between">
              <span>Sensação frequente:</span>
              <span className="text-sm font-extrabold text-red-600">Conteúdo demais, tempo de menos</span>
            </div>
          </motion.div>

          {/* ENEM Turbo Method */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white via-[#faf8ff] to-[#eaedff] border-2 border-[#00288e]/30 shadow-xl flex flex-col justify-between relative overflow-hidden ring-4 ring-[#00288e]/5"
          >
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fea619] to-[#ffb95f] text-[#131b2e] text-[11px] font-extrabold px-3 py-1 rounded-bl-xl shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> CAMINHO CLARO
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#00288e]/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00288e] text-white flex items-center justify-center font-bold shadow-md shadow-blue-900/30">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#00288e]">DEPOIS: Com o Método Prático</h3>
                    <span className="text-xs font-semibold text-[#00563a]">ENTENDER → APLICAR → CORRIGIR → REVISAR</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#131b2e]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#00288e]">Interpretação por evidências:</strong> aprende a pensar na questão, reconhecer o comando real e eliminar distratores com rapidez.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#00288e]">Redação estruturada do zero:</strong> constrói tese clara, argumentos sólidos e proposta completa sem travar na folha em branco.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#00288e]">Cálculo e conceitos direcionados:</strong> reconhece o padrão do ENEM antes de calcular, evitando perder tempo e pontos preciosos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#00288e]">Revisão inteligente pelos erros:</strong> transforma cada falha em aprendizado focado e chega aos últimos dias com segurança e controle.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#00288e]/15 bg-[#00288e]/10 p-3.5 rounded-xl text-xs font-bold text-[#00288e] flex items-center justify-between">
              <span>Resultado prático:</span>
              <span className="text-base font-extrabold text-[#00288e]">Mais segurança, direção e nota</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
