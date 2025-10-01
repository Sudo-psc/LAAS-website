'use client';

import { motion } from 'framer-motion';
import { Trophy, Smartphone, Truck, Users, Zap, Shield } from 'lucide-react';

const differentials = [
  {
    icon: Trophy,
    title: 'Primeiro LAAS do Brasil',
    description: 'Pioneiros no modelo de assinatura de lentes de contato no país',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Smartphone,
    title: 'Telemedicina Incluída',
    description: 'Suporte via WhatsApp e consultas virtuais sem custo adicional',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Truck,
    title: 'Frete Grátis Nacional',
    description: 'Entregas programadas automáticas para todo o Brasil',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Programa de Indicação',
    description: 'Ganhe descontos indicando amigos. Sem limite de indicações',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Add-ons sob Demanda',
    description: 'Personalize seu plano com serviços extras quando precisar',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Lentes Certificadas ANVISA',
    description: 'Todos os produtos com certificação e qualidade garantida',
    color: 'from-emerald-500 to-emerald-600'
  }
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher o LAAS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diferenciais únicos que fazem a diferença na sua experiência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center border-2 border-gray-100 hover:border-blue-200">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="text-white" size={40} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl px-6 py-4 shadow-md border-2 border-green-200 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold text-gray-800">Sem Taxas Ocultas</span>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 shadow-md border-2 border-blue-200 flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-semibold text-gray-800">Cancele Quando Quiser</span>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 shadow-md border-2 border-purple-200 flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
            <span className="font-semibold text-gray-800">Garantia de Adaptação</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
