import React from 'react';
import { ShieldCheck, Lock, Mail } from 'lucide-react';
import { RotaLogo } from './RotaLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#131b2e] text-slate-400 py-12 px-4 sm:px-6 text-xs border-t border-slate-800">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Top brand & navigation row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative flex items-center justify-center rounded-lg bg-white/10 p-0.5">
                <RotaLogo className="w-full h-full drop-shadow-xs" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-white text-lg tracking-tight">Rota ENEM</span>
                <span className="text-[10px] text-[#ffddb8] font-semibold tracking-wider uppercase">
                  Estratégia • Prática • Revisão
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md text-xs mt-1">
              Método prático de estudo e preparação para o ENEM baseado em Entender, Aplicar, Corrigir e Revisar.
            </p>
          </div>

          {/* Links & Support */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs">
            <div className="flex items-center gap-4 text-slate-300">
              <a href="#arsenal" className="hover:text-white transition-colors">Conteúdo</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Aprovados</a>
              <a href="#garantia" className="hover:text-white transition-colors">Garantia</a>
              <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 mt-1">
              <Mail className="w-3.5 h-3.5 text-[#fea619]" />
              <span>Suporte ao aluno: contato@rotaenem.com.br</span>
            </div>
          </div>
        </div>

        {/* Payment & Security seals row */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4 text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Checkout Seguro Hotmart
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Dados Protegidos (LGPD)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300 font-bold">PIX Instantâneo</span>
            <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300 font-bold">Cartão de Crédito</span>
            <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300 font-bold">Boleto Bancário</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-4 border-t border-slate-800/60 text-slate-500 text-[11px] leading-relaxed space-y-2 text-center">
          <p>
            Aviso Legal: Este treinamento e seus materiais não possuem nenhum vínculo institucional com o Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP) ou com o Ministério da Educação (MEC). Todas as marcas mencionadas pertencem aos seus respectivos proprietários.
          </p>
          <p>
            © {new Date().getFullYear()} Rota ENEM • Estratégia • Prática • Revisão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
