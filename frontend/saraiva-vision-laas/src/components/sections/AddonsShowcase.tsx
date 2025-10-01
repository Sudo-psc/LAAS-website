'use client';

import { motion } from 'framer-motion';
import { Plus, Sparkles, Eye, Shield, Video, Palette } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import type { PlanAddon } from '@/types';

const addons: (PlanAddon & { 
  icon: React.ReactNode; 
  compatiblePlans: string[];
  highlight?: boolean;
})[] = [
  {
    id: 'topografia',
    name: 'Topografia Anual',
    price: 40,
    description: 'Exame completo de mapeamento corneano realizado uma vez por ano',
    icon: <Eye className="text-white" size={32} />,
    compatiblePlans: ['Essencial Mensal'],
    highlight: true,
  },
  {
    id: 'par-emergencia',
    name: 'Par de Emergência Extra',
    price: 50,
    description: 'Par adicional de backup para casos de perda ou emergência',
    icon: <Shield className="text-white" size={32} />,
    compatiblePlans: ['Elite Mensal', 'Premium RGP'],
    highlight: false,
  },
  {
    id: 'lentes-coloridas',
    name: 'Lentes Coloridas',
    price: 30,
    description: 'Par mensal de lentes de contato coloridas para mudar seu visual',
    icon: <Palette className="text-white" size={32} />,
    compatiblePlans: ['Básico Mensal', 'Essencial Mensal', 'Plus Mensal', 'Conforto Anual'],
    highlight: false,
  },
  {
    id: 'telemedicina',
    name: 'Consulta Telemedicina',
    price: 25,
    description: 'Consulta adicional por telemedicina com especialista qualificado',
    icon: <Video className="text-white" size={32} />,
    compatiblePlans: ['Plus Mensal'],
    highlight: false,
  },
];

const futureAddons = [
  {
    name: 'Óculos de Grau Simples',
    price: 80,
    description: 'Armação + lentes de grau simples',
    status: 'Em breve',
  },
  {
    name: 'Óculos Multifocal',
    price: 120,
    description: 'Armação + lentes multifocais premium',
    status: 'Em breve',
  },
  {
    name: 'Atendimento VIP sem Fila',
    price: 60,
    description: 'Prioridade máxima no atendimento',
    status: 'Em breve',
  },
];

export default function AddonsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #7c3aed 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, #06b6d4 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Plus size={20} />
            <span>PERSONALIZE SEU PLANO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Adicione Serviços Extras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expanda seu plano com addons opcionais conforme sua necessidade. 
            <br className="hidden md:block" />
            Mais flexibilidade, mais cuidado com sua visão.
          </p>
        </motion.div>

        {/* Addons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                addon.highlight ? 'border-2 border-purple-300' : ''
              }`}
            >
              {/* Highlight Badge */}
              {addon.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                addon.highlight 
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                  : 'bg-gradient-to-br from-cyan-500 to-blue-600'
              }`}>
                {addon.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addon.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 min-h-[40px]">
                {addon.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-purple-600">
                    +R$ {addon.price}
                  </span>
                  <span className="text-gray-500 text-sm">/mês</span>
                </div>
              </div>

              {/* Compatible Plans Badge */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 font-semibold mb-2">
                  Compatível com:
                </div>
                <div className="flex flex-wrap gap-1">
                  {addon.compatiblePlans.map((plan, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={generateWhatsAppLink(
                  `Olá! Quero adicionar o addon "${addon.name}" (+R$ ${addon.price}/mês) ao meu plano. Pode me ajudar?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Adicionar ao Plano
              </a>
            </motion.div>
          ))}
        </div>

        {/* Future Addons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-100 to-cyan-100 rounded-3xl p-8 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Próximos Addons
                </h3>
                <p className="text-gray-600 text-sm">
                  Novos serviços em desenvolvimento
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {futureAddons.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-sm">
                      {addon.name}
                    </h4>
                    <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      {addon.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs mb-3">
                    {addon.description}
                  </p>
                  <div className="text-purple-600 font-bold">
                    +R$ {addon.price}/mês
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            💡 <strong>Dica:</strong> Você pode adicionar ou remover addons a qualquer momento
          </p>
          <a
            href={generateWhatsAppLink('Olá! Quero saber mais sobre os addons disponíveis e como personalizá-los no meu plano.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Plus size={24} />
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
