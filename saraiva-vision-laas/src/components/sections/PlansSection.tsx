'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Check, Star } from 'lucide-react';
import { plans } from '@/data/plans';
import { formatCurrency, generateWhatsAppLink } from '@/lib/utils';

export default function PlansSection() {
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'popular':
        return 'bg-blue-500 text-white';
      case 'economia':
        return 'bg-green-500 text-white';
      case 'premium':
        return 'bg-purple-500 text-white';
      default:
        return '';
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'popular':
        return '🔥 MAIS POPULAR';
      case 'economia':
        return '⭐ MAIOR ECONOMIA';
      case 'premium':
        return '👑 PREMIUM';
      default:
        return '';
    }
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
              {/* Badge */}
              {plan.badge && (
                <div className={`${getBadgeColor(plan.badge)} text-center py-2 font-bold text-sm`}>
                  {getBadgeText(plan.badge)}
                </div>
              )}

              <div className="p-6">
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
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

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
