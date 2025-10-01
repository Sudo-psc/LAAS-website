'use client';

import { motion } from 'framer-motion';
import { Calendar, Eye, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: 'Consulta Inicial',
    description: 'Agendamento via WhatsApp. Avaliação oftalmológica completa e definição do melhor plano para você.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 2,
    icon: Eye,
    title: 'Adaptação',
    description: 'Teste de diferentes marcas e tipos de lentes. Período de adaptação de 15 dias com ajustes inclusos.',
    color: 'from-green-500 to-green-600'
  },
  {
    number: 3,
    icon: CreditCard,
    title: 'Assinatura',
    description: 'Escolha do plano ideal. Primeiro envio grátis e setup de entrega automática programada.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    number: 4,
    icon: Truck,
    title: 'Acompanhamento',
    description: 'Entregas semestrais automáticas. Telemedicina 24/7 incluída e suporte via WhatsApp.',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona o LAAS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 passos simples para você começar a economizar com lentes de contato
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Line connecting steps */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 transform -translate-y-1/2" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Icon Circle */}
                  <div className={`relative bg-gradient-to-br ${step.color} rounded-full p-6 shadow-xl mb-6 z-10`}>
                    <step.icon className="text-white" size={40} />
                    <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden max-w-md mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className={`relative flex-shrink-0 bg-gradient-to-br ${step.color} rounded-full p-4 shadow-lg`}>
                <step.icon className="text-white" size={32} />
                <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-4 border-white">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5533998601427?text=Olá! Gostaria de agendar uma consulta para começar no LAAS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
