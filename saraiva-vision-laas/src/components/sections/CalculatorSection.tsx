'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, MessageCircle } from 'lucide-react';
import { formatCurrency, calculateSavings, generateWhatsAppLink } from '@/lib/utils';

type LensType = 'esferica' | 'torica' | 'multifocal' | 'rgp' | 'escleral';

export default function CalculatorSection() {
  const [currentCost, setCurrentCost] = useState<string>('');
  const [lensType, setLensType] = useState<LensType>('esferica');
  const [result, setResult] = useState<{
    savings: number;
    savingsPercentage: number;
    recommendedPlan: string;
    laasYearlyCost: number;
  } | null>(null);

  const lensTypeMapping: Record<LensType, { name: string; laasYearlyCost: number; planName: string }> = {
    esferica: { name: 'Esféricas', laasYearlyCost: 1949.94, planName: 'Conforto Anual' },
    torica: { name: 'Tóricas (Astigmatismo)', laasYearlyCost: 2931.12, planName: 'Visão HD Anual' },
    multifocal: { name: 'Multifocais (Presbiopia)', laasYearlyCost: 4409.10, planName: 'Elite Mensal' },
    rgp: { name: 'RGP (Rígidas)', laasYearlyCost: 5390.28, planName: 'Premium RGP' },
    escleral: { name: 'Esclerais', laasYearlyCost: 9824.22, planName: 'Escleral Premium' }
  };

  const handleCalculate = () => {
    const cost = parseFloat(currentCost.replace(/[^\d,]/g, '').replace(',', '.'));
    
    if (isNaN(cost) || cost < 1000 || cost > 10000) {
      alert('Por favor, insira um valor entre R$ 1.000 e R$ 10.000');
      return;
    }

    const laasYearlyCost = lensTypeMapping[lensType].laasYearlyCost;
    const { savings, savingsPercentage } = calculateSavings(cost, laasYearlyCost);
    
    setResult({
      savings,
      savingsPercentage,
      recommendedPlan: lensTypeMapping[lensType].planName,
      laasYearlyCost
    });
  };

  const handleWhatsAppClick = () => {
    if (result) {
      const message = `Oi! Calculei uma economia de ${formatCurrency(result.savings)}/ano com o plano ${result.recommendedPlan}. Gostaria de agendar uma consulta para começar.`;
      window.open(generateWhatsAppLink(message), '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" id="calculadora">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator size={18} />
            <span>CALCULADORA DE ECONOMIA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quanto Você Vai Economizar?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Descubra em segundos quanto pode economizar com o LAAS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="space-y-6">
            {/* Input de Custo Atual */}
            <div>
              <label htmlFor="current-cost" className="block text-lg font-bold text-gray-900 mb-2">
                Quanto você gasta com lentes por ano?
              </label>
              <input
                type="text"
                id="current-cost"
                value={currentCost}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setCurrentCost(value ? `R$ ${value}` : '');
                }}
                placeholder="Ex: R$ 5000"
                className="w-full text-2xl font-bold border-2 border-gray-300 rounded-xl px-6 py-4 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-2">
                💡 Insira um valor entre R$ 1.000 e R$ 10.000
              </p>
            </div>

            {/* Dropdown de Tipo de Lente */}
            <div>
              <label htmlFor="lens-type" className="block text-lg font-bold text-gray-900 mb-2">
                Qual tipo de lente você usa?
              </label>
              <select
                id="lens-type"
                value={lensType}
                onChange={(e) => setLensType(e.target.value as LensType)}
                className="w-full text-lg border-2 border-gray-300 rounded-xl px-6 py-4 focus:border-blue-600 focus:outline-none transition-colors cursor-pointer"
              >
                {Object.entries(lensTypeMapping).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão Calcular */}
            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator size={24} />
              Calcular Minha Economia
            </button>

            {/* Resultado */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 space-y-6"
              >
                {/* Card de Economia */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-2 text-green-700 mb-4">
                    <TrendingDown size={32} />
                    <h3 className="text-2xl font-bold">Sua Economia Anual</h3>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {formatCurrency(result.savings)}
                    </div>
                    <div className="text-xl text-green-700 font-semibold">
                      Isso representa {result.savingsPercentage}% de economia!
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Custo atual (anual):</span>
                      <span className="font-bold text-gray-900">{formatCurrency(parseFloat(currentCost.replace(/[^\d,]/g, '').replace(',', '.')))}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Com LAAS ({result.recommendedPlan}):</span>
                      <span className="font-bold text-green-600">{formatCurrency(result.laasYearlyCost)}</span>
                    </div>
                    <div className="border-t-2 border-green-200 pt-2 flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Economia total:</span>
                      <span className="text-2xl font-bold text-green-600">{formatCurrency(result.savings)}</span>
                    </div>
                  </div>
                </div>

                {/* CTA WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} />
                  Quero Economizar {formatCurrency(result.savings)}/ano
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
