'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, MessageCircle, Info, Plus } from 'lucide-react';
import { formatCurrency, calculateSavings, generateWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

type LensType = 'esferica' | 'torica' | 'multifocal' | 'rgp' | 'escleral';

export default function CalculatorSection() {
  const [currentCost, setCurrentCost] = useState<string>('');
  const [lensType, setLensType] = useState<LensType>('esferica');
  const [topografiaAddon, setTopografiaAddon] = useState(false);
  const [lentesColoridasAddon, setLentesColoridasAddon] = useState(false);
  const [result, setResult] = useState<{
    savings: number;
    savingsPercentage: number;
    recommendedPlan: string;
    laasYearlyCost: number;
    totalWithAddons: number;
  } | null>(null);

  const lensTypeMapping: Record<LensType, { name: string; laasYearlyCost: number; planName: string }> = {
    esferica: { name: 'Esféricas', laasYearlyCost: 1068, planName: 'Básico Mensal' }, // R$ 89/mês x 12
    torica: { name: 'Tóricas (Astigmatismo)', laasYearlyCost: 2148, planName: 'Plus Mensal' }, // R$ 179/mês x 12
    multifocal: { name: 'Multifocais (Presbiopia)', laasYearlyCost: 2628, planName: 'Conforto Mensal' }, // R$ 219/mês x 12
    rgp: { name: 'RGP (Rígidas)', laasYearlyCost: 3348, planName: 'Premium RGP' }, // R$ 279/mês x 12
    escleral: { name: 'Esclerais', laasYearlyCost: 4188, planName: 'Escleral Premium' } // R$ 349/mês x 12
  };

  const addons = {
    topografia: { name: 'Topografia Anual', yearlyPrice: 480 }, // R$ 40/mês x 12
    lentesColoridas: { name: 'Lentes Coloridas', yearlyPrice: 360 } // R$ 30/mês x 12
  };

  const handleCalculate = () => {
    const cost = parseFloat(currentCost.replace(/[^\d,]/g, '').replace(',', '.'));
    
    if (isNaN(cost) || cost < 1000 || cost > 10000) {
      alert('Por favor, insira um valor entre R$ 1.000 e R$ 10.000');
      return;
    }

    const laasYearlyCost = lensTypeMapping[lensType].laasYearlyCost;
    
    // Calcular custo total com addons
    let totalWithAddons = laasYearlyCost;
    if (topografiaAddon) totalWithAddons += addons.topografia.yearlyPrice;
    if (lentesColoridasAddon) totalWithAddons += addons.lentesColoridas.yearlyPrice;
    
    const { savings, savingsPercentage } = calculateSavings(cost, totalWithAddons);
    
    setResult({
      savings,
      savingsPercentage,
      recommendedPlan: lensTypeMapping[lensType].planName,
      laasYearlyCost,
      totalWithAddons
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
            <Image
              src="/icones/icones sem fundo/colorful_calculator_icon.png"
              alt="Calculadora"
              width={24}
              height={24}
              className="object-contain"
            />
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
              <label htmlFor="lens-type" className="block text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                Qual tipo de lente você usa?
                <div className="group relative">
                  <Info size={18} className="text-blue-600 cursor-help" />
                  <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-10">
                    <p className="font-semibold mb-1">✅ Inclui:</p>
                    <ul className="space-y-0.5">
                      <li>• 12 pares/ano</li>
                      <li>• Paquimetria</li>
                      <li>• Consultas de acompanhamento</li>
                      <li>• Solução de limpeza</li>
                    </ul>
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
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

            {/* Addons Opcionais */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Plus size={20} className="text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Addons Opcionais</h3>
              </div>
              
              <div className="space-y-3">
                {/* Toggle Topografia */}
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={topografiaAddon}
                      onChange={(e) => setTopografiaAddon(e.target.checked)}
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        Topografia Anual
                      </span>
                      <p className="text-sm text-gray-600">Mapeamento completo da córnea</p>
                    </div>
                  </div>
                  <span className="font-bold text-purple-600">+R$ 40/mês</span>
                </label>

                {/* Toggle Lentes Coloridas */}
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={lentesColoridasAddon}
                      onChange={(e) => setLentesColoridasAddon(e.target.checked)}
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        Lentes Coloridas
                      </span>
                      <p className="text-sm text-gray-600">Cores naturais e vibrantes</p>
                    </div>
                  </div>
                  <span className="font-bold text-purple-600">+R$ 30/mês</span>
                </label>
              </div>
            </div>

            {/* Botão Calcular */}
            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Image
                src="/icones/icones sem fundo/colorful_calculator_icon.png"
                alt="Calcular"
                width={28}
                height={28}
                className="object-contain"
              />
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
                      <span className="text-gray-700">Plano {result.recommendedPlan}:</span>
                      <span className="font-bold text-gray-900">{formatCurrency(result.laasYearlyCost)}</span>
                    </div>
                    
                    {/* Mostrar addons se selecionados */}
                    {topografiaAddon && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-purple-700">+ Topografia Anual:</span>
                        <span className="font-semibold text-purple-700">{formatCurrency(addons.topografia.yearlyPrice)}</span>
                      </div>
                    )}
                    {lentesColoridasAddon && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-purple-700">+ Lentes Coloridas:</span>
                        <span className="font-semibold text-purple-700">{formatCurrency(addons.lentesColoridas.yearlyPrice)}</span>
                      </div>
                    )}
                    
                    {(topografiaAddon || lentesColoridasAddon) && (
                      <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                        <span className="text-gray-700 font-semibold">Total com LAAS:</span>
                        <span className="font-bold text-green-600">{formatCurrency(result.totalWithAddons)}</span>
                      </div>
                    )}
                    
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
