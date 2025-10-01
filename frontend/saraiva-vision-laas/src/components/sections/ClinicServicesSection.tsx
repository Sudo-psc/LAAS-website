'use client';

import { motion } from 'framer-motion';
import { Eye, Activity, Scissors, Baby, FileText, Microscope, ExternalLink } from 'lucide-react';

export default function ClinicServicesSection() {
  const services = [
    {
      icon: <Eye size={32} />,
      title: 'Consultas Oftalmológicas',
      description: 'Exame oftalmológico abrangente com tecnologia de ponta e diagnóstico preciso.',
      color: 'from-blue-500 to-blue-600',
      link: 'https://saraivavision.com.br/servicos/consultas-oftalmologicas'
    },
    {
      icon: <Activity size={32} />,
      title: 'Exames Especializados',
      description: 'Topografia, mapeamento de retina, campo visual e mais exames avançados.',
      color: 'from-green-500 to-emerald-600',
      link: 'https://saraivavision.com.br/servicos/exames-de-refracao'
    },
    {
      icon: <Scissors size={32} />,
      title: 'Cirurgias Oftalmológicas',
      description: 'Catarata, correção de grau, pterígio e procedimentos de pálpebras.',
      color: 'from-purple-500 to-purple-600',
      link: 'https://saraivavision.com.br/servicos/cirurgias-oftalmologicas'
    },
    {
      icon: <Baby size={32} />,
      title: 'Oftalmologia Pediátrica',
      description: 'Cuidado especializado desde o nascimento até a adolescência.',
      color: 'from-pink-500 to-rose-600',
      link: 'https://saraivavision.com.br/servicos/acompanhamento-pediatrico'
    },
    {
      icon: <FileText size={32} />,
      title: 'Laudos Especializados',
      description: 'CNH, concursos públicos, laudos ocupacionais e pareceres médicos.',
      color: 'from-orange-500 to-amber-600',
      link: 'https://saraivavision.com.br/servicos/laudos-especializados'
    },
    {
      icon: <Microscope size={32} />,
      title: 'Tratamentos Avançados',
      description: 'Glaucoma, catarata, degeneração macular e retinopatia diabética.',
      color: 'from-indigo-500 to-indigo-600',
      link: 'https://saraivavision.com.br/servicos/tratamentos-especializados'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50" id="servicos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Eye size={18} />
            <span>OUTROS SERVIÇOS DA CLÍNICA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado Oftalmológico Completo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além do LAAS, oferecemos todos os serviços para cuidar da sua visão com excelência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Link Arrow */}
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <span className="group-hover:translate-x-1 transition-transform">Saiba mais</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologia de Última Geração
          </h3>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Equipamentos modernos incluindo topógrafo corneano, retinógrafo digital, campo visual computadorizado e autorrefrator. Infraestrutura completa para diagnósticos precisos e tratamentos de excelência.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://saraivavision.com.br/servicos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Ver Todos os Serviços</span>
              <ExternalLink size={20} />
            </a>
            <a
              href={`https://wa.me/5533998601427?text=Olá! Gostaria de saber mais sobre os serviços da Saraiva Vision.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
