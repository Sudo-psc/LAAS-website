'use client';

import { motion } from 'framer-motion';
import { Home, Award, Eye, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import { generateWhatsAppLink } from '@/lib/utils';

export default function PremiumStorytelling() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, #9333ea 2%, transparent 0%)`,
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-white/20">
            <Award size={20} />
            <span>EXCELÊNCIA EM LENTES DE CONTATO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comodidade, Exclusividade e Qualidade de Visão
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mais de 15 anos dedicados ao cuidado especializado com sua visão
          </p>
        </motion.div>

        {/* 3 Colunas: Comodidade | Exclusividade | Qualidade */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Comodidade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Home className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Comodidade</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Lentes entregues na sua casa mensalmente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Nunca mais se preocupe em comprar lentes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Acompanhamento oftalmológico contínuo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Solução de limpeza incluída em todos os planos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Suporte técnico via WhatsApp sempre disponível</span>
              </li>
            </ul>
          </motion.div>

          {/* Exclusividade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 border-2 border-white/30 shadow-2xl transform md:scale-105"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Exclusividade</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span><strong>Dr. Philipe Saraiva Cruz</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span>CRM-MG 69.870 - Especialista em Lentes de Contato</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span>15 anos de experiência dedicados à sua visão</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span>Especialização em casos complexos (ceratocone, RGP, esclerais)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
                <span>Atendimento VIP nos planos premium</span>
              </li>
            </ul>
          </motion.div>

          {/* Qualidade de Visão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Qualidade de Visão</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Lentes de última geração aprovadas pela ANVISA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Tecnologia de ponta para melhor conforto</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Adaptação personalizada para cada caso</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Exames inclusos: paquimetria, topografia, meibografia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Acompanhamento contínuo da saúde ocular</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Seção Dr. Philipe com Foto e Depoimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-16"
        >
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
            {/* Foto Dr. Philipe */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/drphilipe_perfil.jpeg"
                  alt="Dr. Philipe Saraiva Cruz - CRM-MG 69.870"
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Citação e Credenciais */}
            <div>
              <div className="mb-4">
                <div className="text-6xl text-purple-400 font-serif leading-none mb-2">"</div>
                <p className="text-xl md:text-2xl font-medium italic mb-4">
                  Minha missão é proporcionar conforto visual excepcional através de tecnologia avançada e acompanhamento personalizado. Cada paciente recebe atenção individualizada para garantir a melhor experiência com lentes de contato.
                </p>
                <div className="text-6xl text-purple-400 font-serif leading-none text-right">"</div>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <p className="text-lg font-bold mb-1">Dr. Philipe Saraiva Cruz</p>
                <p className="text-white/80 text-sm mb-2">CRM-MG 69.870</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold border border-purple-400/30">
                    Especialista em Lentes de Contato
                  </span>
                  <span className="bg-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold border border-purple-400/30">
                    15+ Anos de Experiência
                  </span>
                  <span className="bg-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold border border-purple-400/30">
                    Casos Complexos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Diferenciais Únicos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Por que escolher a Saraiva Vision?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-bold mb-2">Atendimento Ágil</h4>
              <p className="text-white/80 text-sm">
                Consultas presenciais e telemedicina disponíveis
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-bold mb-2">Segurança ANVISA</h4>
              <p className="text-white/80 text-sm">
                Todas as lentes são 100% aprovadas e regulamentadas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="font-bold mb-2">15 Anos de Confiança</h4>
              <p className="text-white/80 text-sm">
                Milhares de pacientes satisfeitos em Caratinga e região
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl mb-6 text-white/90">
            Agende sua consulta e descubra o plano ideal para você
          </p>
          <a
            href={generateWhatsAppLink('Olá! Gostaria de agendar uma consulta com o Dr. Philipe para conhecer os planos LAAS e iniciar meu acompanhamento oftalmológico.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-purple-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <Award size={28} />
            Agendar Consulta Especializada
          </a>
          <p className="text-sm text-white/60 mt-4">
            📍 Rua Catarina Maria Passos 97, Caratinga-MG • ⭐ 4.9 (102+ avaliações Google)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
