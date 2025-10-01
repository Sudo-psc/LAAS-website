'use client';

import { motion } from 'framer-motion';
import { Gift, Users, Zap, Calendar } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import Image from 'next/image';

export default function PromotionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #9333ea 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, #ec4899 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Gift size={20} />
            <span>PROMOÇÕES ESPECIAIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefícios Exclusivos para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aproveite nossas promoções de lançamento e programa de indicações
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {/* Telemedicina Gratuita - LANÇAMENTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              🚀 LANÇAMENTO
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Gift size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              1 Consulta de Telemedicina GRÁTIS
            </h3>
            <p className="text-white/90 mb-4">
              Promoção exclusiva de lançamento! Consulta por telemedicina <strong>totalmente gratuita</strong> para novos assinantes.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-semibold">
                💻 Consulta online com especialista qualificado
              </p>
            </div>
          </motion.div>

          {/* Paquimetria Gratuita */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Image
                src="/icones/icones sem fundo/eye_check_award_icon.png"
                alt="Paquimetria"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Paquimetria Gratuita
            </h3>
            <p className="text-gray-600 mb-4">
              Exame de espessura corneana <strong>GRATUITO</strong> incluído em todos os planos. Valor comercial: R$ 180.
            </p>
            <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
              <p className="text-sm text-purple-800 font-semibold">
                ✅ Incluído permanentemente em sua assinatura
              </p>
            </div>
          </motion.div>

          {/* Topografia para Primeiros 30 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              VAGAS LIMITADAS
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Zap size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Topografia Corneana GRÁTIS
            </h3>
            <p className="text-white/90 mb-4">
              <strong>Apenas para os primeiros 30 assinantes!</strong> Exame de topografia de córnea gratuito (valor R$ 350).
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-semibold flex items-center gap-2">
                <Calendar size={18} />
                Promoção de lançamento - Seja rápido!
              </p>
            </div>
          </motion.div>

          {/* Programa de Indicação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Indique e Ganhe
            </h3>
            <p className="text-gray-600 mb-4">
              Ganhe <strong>1 MÊS GRÁTIS</strong> para cada amigo que assinar através da sua indicação.
            </p>
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <p className="text-sm text-green-800 font-semibold mb-2">
                💰 Sem limite de indicações!
              </p>
              <p className="text-xs text-green-700">
                Quanto mais você indica, mais meses grátis acumula
              </p>
            </div>
          </motion.div>

          {/* Planos Família */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Users size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Planos Família
            </h3>
            <p className="text-white/90 mb-4">
              Adicione membros da família e ganhe <strong>2 MESES GRÁTIS</strong> para cada novo membro incluído!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-semibold">
                👨‍👩‍👧‍👦 Desconto progressivo - Mais membros, mais economia!
              </p>
            </div>
          </motion.div>

          {/* Sorteio Ray-Ban */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-white text-amber-600 px-3 py-1 rounded-full text-xs font-bold">
              🎁 SORTEIO
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Gift size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Sorteio Ray-Ban
            </h3>
            <p className="text-white/90 mb-4">
              Todos os assinantes participam automaticamente do <strong>sorteio mensal de óculos de sol Ray-Ban</strong> originais!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-semibold">
                🕶️ Sorteio mensal entre todos os assinantes ativos
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={generateWhatsAppLink('Olá! Quero aproveitar as promoções de lançamento e conhecer mais sobre os planos LAAS!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <Gift size={28} />
            Quero Aproveitar as Promoções
          </a>
          <p className="text-sm text-gray-600 mt-4">
            ⚡ As promoções são por tempo limitado. Garanta sua vaga agora!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
