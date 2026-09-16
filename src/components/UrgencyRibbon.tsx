import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const UrgencyRibbon: React.FC = () => {
  return (
    <div id="urgency-ribbon" className="w-full bg-[#eaedff] text-[#131b2e] py-2 px-4 border-b border-[#00288e]/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#00288e] text-white text-[10px] font-bold">
            ✓
          </span>
          <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#00288e] font-extrabold">
            MÉTODO ESTRUTURADO: ENTENDER → APLICAR → CORRIGIR → REVISAR
          </span>
        </div>

        <div className="flex items-center gap-2 mx-auto md:mx-0 text-xs text-[#444653] font-medium">
          <span>Menos que o preço de uma aula particular</span>
          <span className="font-extrabold text-[#00563a] bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
            Pagamento Único
          </span>
        </div>
      </div>
    </div>
  );
};

