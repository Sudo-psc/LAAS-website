'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

export default function WebsiteReferenceSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left Side - Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-white p-6 rounded-full shadow-2xl">
                    <Globe size={64} className="text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles size={16} />
                  <span>CONHEÇA NOSSA CLÍNICA</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mais Que Lentes de Contato
                </h3>
                
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  O LAAS é apenas uma das inovações da <strong>Saraiva Vision</strong>. Oferecemos atendimento oftalmológico completo: consultas, exames avançados, cirurgias, pediatria e muito mais.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://saraivavision.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Visitar Site Oficial</span>
                    <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://saraivavision.com.br/servicos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-4 rounded-full text-lg font-bold transition-all duration-300"
                  >
                    <span>Ver Todos os Serviços</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4 text-center md:text-left">
                <strong>Explore também:</strong>
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="https://saraivavision.com.br/sobre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Sobre Nós
                </a>
                <a
                  href="https://saraivavision.com.br/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Blog
                </a>
                <a
                  href="https://saraivavision.com.br/podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Podcast
                </a>
                <a
                  href="https://agendarconsulta.com/perfil/dr-philipe-cruz-1678973613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Agendamento Online
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
