'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Star, Video, Shield, Microscope, Plus } from 'lucide-react';
import { plans } from '@/data/plans';
import { formatCurrency, generateWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

export default function PlansSection() {
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'popular':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white';
      case 'economia':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
      case 'premium':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      default:
        return '';
    }
  };

  const getBadgeIcon = (badge?: string) => {
    switch (badge) {
      case 'popular':
        return '/icones/icones sem fundo/flaming_crown_popular_badge.png';
      case 'economia':
        return '/icones/icones sem fundo/piggy_bank_with_dollar_coin.png';
      case 'premium':
        return '/icones/icones sem fundo/diamond_and_star_icon.png';
      default:
        return null;
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'popular':
        return 'MAIS POPULAR';
      case 'economia':
        return 'MAIOR ECONOMIA';
      case 'premium':
        return 'PREMIUM';
      default:
        return '';
    }
  };

  // Verifica se o plano tem telemedicina
  const hasTelemedicine = (features: string[]) => {
    return features.some(f => 
      f.toLowerCase().includes('telemedicina') || 
      f.toLowerCase().includes('telemedicina')
    );
  };

  // Verifica se o plano tem seguro
  const hasInsurance = (features: string[]) => {
    return features.some(f => f.includes('Seguro contra perda ou roubo'));
  };

  // Verifica se o plano tem meibografia
  const hasMeibography = (features: string[]) => {
    return features.some(f => f.includes('Meibografia INCLUSA'));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="planos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star size={18} />
            <span>ESCOLHA SEU PLANO IDEAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            8 Planos para Todos os Perfis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do básico ao premium - todos com consultas incluídas e economia garantida
          </p>
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.badge === 'economia' ? 'ring-4 ring-green-400 transform scale-105' : ''
              }`}
            >
              {/* Badge com Ícone */}
              {plan.badge && (
                <div className={`${getBadgeColor(plan.badge)} text-center py-3 font-bold text-sm flex items-center justify-center gap-2`}>
                  {getBadgeIcon(plan.badge) && (
                    <Image
                      src={getBadgeIcon(plan.badge)!}
                      alt={getBadgeText(plan.badge)}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  {getBadgeText(plan.badge)}
                </div>
              )}

              <div className="p-6 relative">
                {/* Badge LANÇAMENTO - Apenas Plano 1 */}
                {plan.isLaunchPromo && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                    🚀 LANÇAMENTO
                  </div>
                )}

                {/* Nome do Plano */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.lensType}</p>

                {/* Preço */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-blue-600">
                      {formatCurrency(plan.monthlyPrice)}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    ou {formatCurrency(plan.yearlyPrice)} à vista
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges de Benefícios Especiais */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hasTelemedicine(plan.features) && (
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold border border-blue-200">
                      <Video size={12} />
                      <span>Telemedicina</span>
                    </div>
                  )}
                  {hasInsurance(plan.features) && (
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold border border-green-200">
                      <Shield size={12} />
                      <span>Seguro</span>
                    </div>
                  )}
                  {hasMeibography(plan.features) && (
                    <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold border border-purple-200">
                      <Microscope size={12} />
                      <span>Meibografia</span>
                    </div>
                  )}
                  {plan.id === 'conforto-anual' && (
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-full text-xs font-semibold border border-amber-200">
                      <Star size={12} />
                      <span>23% economia</span>
                    </div>
                  )}
                </div>

                {/* Addons Disponíveis */}
                {plan.addons && plan.addons.length > 0 && (
                  <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-xs font-semibold text-purple-900 mb-2 flex items-center gap-1">
                      <Plus size={14} />
                      Addons disponíveis:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {plan.addons.map((addon) => (
                        <span
                          key={addon.id}
                          className="bg-white text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium border border-purple-300"
                        >
                          {addon.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <a
                  href={generateWhatsAppLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.badge === 'economia'
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <MessageCircle size={18} />
                  Assinar Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota Explicativa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-6"
        >
          <p className="text-center text-gray-700">
            <strong>💡 Importante:</strong> Todos os planos incluem consultas de acompanhamento com Dr. Philipe Saraiva Cruz (CRM-MG 69.870) e suporte técnico. Valores sujeitos a alteração. Consulte condições específicas via WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
