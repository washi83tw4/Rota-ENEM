import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, FileText, Sparkles, BookOpen, Smartphone, Clock } from 'lucide-react';
import { ModuleItem } from '../types';

interface ModulePreviewModalProps {
  module: ModuleItem | null;
  onClose: () => void;
  onSelectOffer: () => void;
}

export const ModulePreviewModal: React.FC<ModulePreviewModalProps> = ({
  module,
  onClose,
  onSelectOffer,
}) => {
  if (!module) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00288e] to-[#1e40af] p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#fea619] text-[#131b2e] font-extrabold text-xs uppercase tracking-wider mb-2">
              {module.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">{module.title}</h3>
            {module.tag && (
              <span className="text-xs text-[#ffddb8] font-bold mt-1 inline-block">
                {module.tag}
              </span>
            )}
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <p className="text-sm text-[#444653] leading-relaxed">
              {module.description}
            </p>

            {/* Interactive Preview Mockup Box */}
            <div className="bg-[#f2f3ff] rounded-xl p-4 border border-[#00288e]/10">
              <div className="flex items-center gap-2 mb-2 text-[#00288e] font-bold text-xs">
                <Sparkles className="w-4 h-4 text-[#fea619]" />
                <span>Exemplo do Conteúdo Prático Inclusivo:</span>
              </div>

              {module.id === 'mod-1' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-[#00288e]">Estratégia de Interpretação & Comando:</div>
                  <p className="text-[12px] text-slate-600">
                    Como identificar as palavras-chave do comando da questão, isolar o que realmente está sendo pedido e descartar as duas alternativas distratoras que 80% dos alunos marcam por impulso.
                  </p>
                  <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 font-mono text-[11px]">
                    TRI Coerente: 28 acertos consistentes em fáceis/médias = <strong>812+ Pontos</strong>
                  </div>
                </div>
              )}

              {module.id === 'mod-2' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-[#00288e]">Construção de Redação Passo a Passo:</div>
                  <p className="text-[12px] text-slate-600">
                    Do tema à proposta de intervenção: como formular uma tese clara, selecionar 2 argumentos sólidos, associar repertórios legítimos e preencher os 5 elementos obrigatórios da intervenção.
                  </p>
                </div>
              )}

              {module.id === 'mod-3' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-[#00288e]">Reconhecimento de Padrão em Exatas:</div>
                  <p className="text-[12px] text-slate-600">
                    Aprenda a reconhecer qual modelo matemático ou lei de ciências se aplica à situação descrita no texto antes de sair fazendo contas complexas à toa.
                  </p>
                </div>
              )}

              {module.id === 'mod-4' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-[#00288e]">Análise de Erros & Caderno de Falhas:</div>
                  <p className="text-[12px] text-slate-600">
                    Como categorizar o erro (interpretação, lacuna de conteúdo ou distração) e transformá-lo em uma revisão de 5 minutos que impede que o mesmo erro ocorra no ENEM.
                  </p>
                </div>
              )}

              {module.id === 'mod-5' && (
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-[#00288e]">Gestão de Tempo nas 5 Horas de Exame:</div>
                  <p className="text-[12px] text-slate-600">
                    O que fazer quando uma questão travar, a ordem ideal de resolução (redação, fáceis, médias, difíceis) e como chegar aos últimos 30 minutos com gabarito preenchido sem desespero.
                  </p>
                </div>
              )}
            </div>

            {/* Features check */}
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-bold text-[#131b2e] uppercase tracking-wider">
                Recursos deste pilar:
              </div>
              {module.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#00563a] font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Incluso no acesso completo do método Rota ENEM
            </span>
            <button
              onClick={() => {
                onClose();
                onSelectOffer();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#fea619] hover:bg-[#ffb95f] text-[#131b2e] font-extrabold text-sm transition-all shadow-md cursor-pointer text-center"
            >
              QUERO ME PREPARAR POR R$ 19,90
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
