'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function HeroSection() {
  const whatsappLink = generateWhatsAppLink();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #2563eb 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, #2563eb 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Médico com Brilho */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border border-blue-200"
          >
            <CheckCircle size={18} className="text-green-600" />
            <span>MÉDICO - Dr. Philipe Saraiva Cruz - CRM-MG 69.870</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Lentes de Contato por{' '}
            <span className="text-blue-600">Assinatura</span>
            <br />
            <span className="text-green-600">Economize até 70%</span>
          </motion.h1>

          {/* Subheadline com Economia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              O primeiro serviço de assinatura de lentes de contato do Brasil
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl px-6 py-4">
              <span className="text-gray-600 line-through text-lg">De R$ 5.280/ano</span>
              <span className="text-3xl font-bold text-green-600">para R$ 1.950/ano</span>
            </div>
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              Falar no WhatsApp Agora
            </a>
            
            <button
              onClick={() => {
                document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300"
            >
              Calcular Minha Economia
            </button>
          </motion.div>

          {/* Trust Indicators com Visual Aprimorado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-gray-800">Primeiro no Brasil</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-gray-800">Sem taxas ocultas</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-gray-800">Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-sm font-semibold text-gray-800">Consultas incluídas</span>
            </div>
          </motion.div>

          {/* Link para Site Principal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8"
          >
            <a
              href="https://saraivavision.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              <span>Conheça todos os nossos serviços em saraivavision.com.br</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
