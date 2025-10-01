'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Calculator, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function ProblemSolutionSection() {
  const tradicionalCost = {
    consulta: 350,
    lentes: 440, // 6 pares x ~R$ 73/par
    revisoes: 150, // 2 revisões x R$ 75
    total: 940
  };

  const laasCost = {
    planoMensal: 162.50,
    total: 1950 // Plano anual
  };

  const savings = tradicionalCost.total * 12 - laasCost.total;
  const savingsPercentage = ((savings / (tradicionalCost.total * 12)) * 100).toFixed(0);

  return (
    <section className="py-20 bg-white" id="problema-solucao">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingDown size={18} />
            <span>O PROBLEMA DOS CUSTOS TRADICIONAIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Você está pagando caro demais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare quanto você gasta atualmente com o modelo tradicional versus o LAAS
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Modelo Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-3xl p-8"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                😰 MODELO TRADICIONAL
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pagamento por Compra</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white rounded-lg p-4">
                <span className="text-gray-700">Consulta inicial</span>
                <span className="font-bold text-gray-900">{formatCurrency(tradicionalCost.consulta)}</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-4">
                <span className="text-gray-700">6 pares de lentes</span>
                <span className="font-bold text-gray-900">{formatCurrency(tradicionalCost.lentes)}</span>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-4">
                <span className="text-gray-700">Revisões (2x)</span>
                <span className="font-bold text-gray-900">{formatCurrency(tradicionalCost.revisoes)}</span>
              </div>
            </div>

            <div className="border-t-2 border-red-300 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-900">Total anual:</span>
                <span className="text-3xl font-bold text-red-600">{formatCurrency(tradicionalCost.total * 12)}</span>
              </div>
              <p className="text-sm text-red-700 font-semibold">+ Custos não planejados com perda/danos</p>
            </div>
          </motion.div>

          {/* Modelo LAAS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Badge "Recomendado" */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold rotate-12">
              ⭐ RECOMENDADO
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎉 LAAS - SARAIVA VISION
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Assinatura Inteligente</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center bg-white rounded-lg p-4">
                <span className="text-gray-700">Plano Conforto Anual</span>
                <span className="font-bold text-gray-900">{formatCurrency(laasCost.planoMensal)}/mês</span>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-green-700 font-semibold mb-2">✅ TUDO INCLUÍDO:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 12 pares de lentes/ano</li>
                  <li>• Consultas de acompanhamento</li>
                  <li>• Suporte via WhatsApp</li>
                  <li>• Sem surpresas ou taxas ocultas</li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-green-300 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-900">Total anual:</span>
                <span className="text-3xl font-bold text-green-600">{formatCurrency(laasCost.total)}</span>
              </div>
              <p className="text-sm text-green-700 font-semibold">Pagamento facilitado à vista ou parcelado</p>
            </div>
          </motion.div>
        </div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center shadow-2xl"
        >
          <Calculator size={48} className="mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Economia Total de {formatCurrency(savings)}/ano
          </h3>
          <p className="text-xl mb-6">
            Isso representa uma economia de <span className="font-bold text-yellow-300">{savingsPercentage}%</span> comparado ao modelo tradicional!
          </p>
          <button
            onClick={() => {
              document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Calcule Sua Economia Personalizada
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
