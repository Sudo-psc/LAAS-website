'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Shield, Star, Users, Zap } from 'lucide-react';
import { clinicInfo } from '@/data/compliance';

export default function AboutClinicSection() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Tecnologia de Ponta',
      description: 'Equipamentos de última geração para diagnósticos precisos e adaptação personalizada de lentes.'
    },
    {
      icon: <Users size={32} />,
      title: 'Mais de 5.000 Pacientes',
      description: 'Milhares de pessoas já confiam na Saraiva Vision para cuidar da sua visão com excelência.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Atendimento Humanizado',
      description: 'Cuidado genuíno e personalizado em cada consulta, priorizando seu bem-estar e conforto.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Parceiro Amor e Saúde',
      description: 'Membro oficial da rede Amor e Saúde, garantindo os mais altos padrões de qualidade e segurança.'
    },
    {
      icon: <Star size={32} />,
      title: '4.9 Estrelas no Google',
      description: `Mais de ${clinicInfo.googleReviews} avaliações positivas de pacientes satisfeitos.`
    },
    {
      icon: <Award size={32} />,
      title: 'Pioneiros no Brasil',
      description: 'Primeira clínica a oferecer LAAS (Lentes as a Service) no Brasil, revolucionando o acesso às lentes.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart size={18} />
            <span>SOBRE A SARAIVA VISION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excelência em Oftalmologia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta e atendimento humanizado com Dr. Philipe Saraiva em Caratinga, MG
          </p>
        </motion.div>

        {/* História da Clínica */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A <strong>Saraiva Vision</strong> nasceu do sonho de oferecer um atendimento oftalmológico de alta qualidade em Caratinga e região, unindo <strong>tecnologia de ponta</strong> a uma abordagem humana e personalizada.
              </p>
              <p>
                Desde nossa fundação, construímos uma reputação sólida baseada na confiança, competência técnica e no compromisso inabalável com a saúde ocular de nossos pacientes. Nossa missão transcende o simples tratamento de doenças oculares - acreditamos na <strong>prevenção</strong> como o melhor caminho para preservar a visão.
              </p>
              <p>
                Como <strong>parceiros oficiais da rede Amor e Saúde</strong>, mantemos os mais altos padrões de qualidade e segurança. Nossa infraestrutura moderna foi projetada para oferecer conforto e tranquilidade durante todo o processo de cuidado com sua visão.
              </p>
              <p>
                Com o lançamento do <strong>LAAS - primeiro serviço de assinatura de lentes de contato do Brasil</strong>, reafirmamos nosso compromisso de tornar o cuidado oftalmológico mais acessível, econômico e conveniente para todos.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dr. Philipe Saraiva */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 p-3 rounded-full">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{clinicInfo.team.doctor.name}</h3>
                <p className="text-blue-300 font-semibold">{clinicInfo.team.doctor.crm} • {clinicInfo.team.doctor.role}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {clinicInfo.team.doctor.bio}
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Sua abordagem combina conhecimento técnico atualizado com um cuidado genuíno pelos pacientes, garantindo não apenas tratamentos eficazes, mas também uma experiência acolhedora e tranquilizadora durante todo o processo de cuidado com a visão.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Cuidar da Sua Visão?
          </h3>
          <p className="text-xl mb-8 text-green-100">
            Agende sua consulta e descubra como o LAAS pode transformar sua experiência com lentes de contato
          </p>
          <a
            href={`https://wa.me/${clinicInfo.phone.replace(/\D/g, '')}?text=Olá! Gostaria de agendar uma consulta para conhecer o LAAS.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Agendar Consulta Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
