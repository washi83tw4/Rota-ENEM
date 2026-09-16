import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SisuCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOffer: () => void;
}

export const SisuCalculatorModal: React.FC<SisuCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectOffer,
}) => {
  const [course, setCourse] = useState('Medicina');
  const [redacao, setRedacao] = useState(920);
  const [matematica, setMatematica] = useState(810);
  const [natureza, setNatureza] = useState(740);
  const [humanas, setHumanas] = useState(710);
  const [linguagens, setLinguagens] = useState(680);

  if (!isOpen) return null;

  const average = ((redacao + matematica + natureza + humanas + linguagens) / 5).toFixed(1);
  const isApproved = parseFloat(average) >= 750;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00288e] to-[#1e40af] p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#fea619]" />
              <h3 className="font-extrabold text-base sm:text-lg">
                Simulador Inteligente SISU 2025
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <p className="text-xs text-slate-500">
              Faça uma simulação com as médias que os alunos do <strong className="text-[#00288e]">ENEM Turbo</strong> alcançam seguindo o cronograma e os modelos de redação:
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Curso Alvo:
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00288e]"
              >
                <option value="Medicina">Medicina (Corte aprox: 790 - 815)</option>
                <option value="Direito">Direito (Corte aprox: 730 - 770)</option>
                <option value="Engenharia de Software">Engenharia de Software (Corte aprox: 740 - 780)</option>
                <option value="Odontologia">Odontologia (Corte aprox: 720 - 760)</option>
                <option value="Psicologia">Psicologia (Corte aprox: 710 - 750)</option>
              </select>
            </div>

            {/* Sliders */}
            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Redação (com Modelo Coringa):</span>
                  <span className="text-[#00288e]">{redacao} pts</span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="1000"
                  step="20"
                  value={redacao}
                  onChange={(e) => setRedacao(Number(e.target.value))}
                  className="w-full accent-[#00288e]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Matemática (com TRI Hacker):</span>
                  <span className="text-[#00288e]">{matematica} pts</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="950"
                  step="10"
                  value={matematica}
                  onChange={(e) => setMatematica(Number(e.target.value))}
                  className="w-full accent-[#00288e]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Ciências da Natureza:</span>
                  <span className="text-[#00288e]">{natureza} pts</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="850"
                  step="10"
                  value={natureza}
                  onChange={(e) => setNatureza(Number(e.target.value))}
                  className="w-full accent-[#00288e]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Humanas: {humanas} pts
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="800"
                    step="10"
                    value={humanas}
                    onChange={(e) => setHumanas(Number(e.target.value))}
                    className="w-full accent-[#00288e]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Linguagens: {linguagens} pts
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="780"
                    step="10"
                    value={linguagens}
                    onChange={(e) => setLinguagens(Number(e.target.value))}
                    className="w-full accent-[#00288e]"
                  />
                </div>
              </div>
            </div>

            {/* Simulated Result Card */}
            <div className={`p-4 rounded-xl border ${isApproved ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'} transition-colors`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-600 uppercase">Sua Média Geral:</span>
                  <div className="text-2xl font-black text-[#131b2e]">{average} Pontos</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-600 text-white inline-block mb-1">
                    {isApproved ? '🔥 Alta Probabilidade de Vaga' : '⚡ Aumente na Redação/TRI'}
                  </span>
                  <p className="text-[11px] text-slate-600">Para {course} nas principais Federais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-2 items-center justify-between">
            <span className="text-xs text-slate-500">Recurso complementar incluso no acesso</span>
            <button
              onClick={() => {
                onClose();
                onSelectOffer();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#fea619] hover:bg-[#ffb95f] text-[#131b2e] font-extrabold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              QUERO ME PREPARAR POR R$ 19,90 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
