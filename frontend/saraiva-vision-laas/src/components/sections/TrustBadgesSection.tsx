'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award, ExternalLink } from 'lucide-react';
import { clinicInfo } from '@/data/compliance';
import Image from 'next/image';

export default function TrustBadgesSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2%, transparent 0%)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Google Reviews Badge */}
          <motion.a
            href={clinicInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{clinicInfo.googleRating}</div>
                <div className="text-sm text-gray-600">{clinicInfo.googleReviews}+ avaliações</div>
              </div>
            </div>
            <ExternalLink size={20} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Pacientes Atendidos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl"
          >
            <Users size={40} className="text-blue-600" />
            <div>
              <div className="text-3xl font-bold text-gray-900">5.000+</div>
              <div className="text-sm text-gray-600 font-medium">Pacientes Atendidos</div>
            </div>
          </motion.div>

          {/* Parceiro Amor e Saúde */}
          <motion.a
            href={clinicInfo.partner.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/icon_amoresaude.png"
                alt="Amor e Saúde"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium">Parceiro Oficial</div>
              <div className="text-xl font-bold text-gray-900">{clinicInfo.partner.name}</div>
            </div>
            <ExternalLink size={18} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Pioneiros no Brasil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 bg-gradient-to-br from-yellow-400 to-orange-400 px-6 py-4 rounded-2xl shadow-2xl"
          >
            <Award size={40} className="text-white" />
            <div className="text-white">
              <div className="text-sm font-medium">Pioneiros no Brasil</div>
              <div className="text-xl font-bold">LAAS - Lentes por Assinatura</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row com Ícones Visuais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8"
        >
          {/* 15 Anos de Experiência */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
            <Image
              src="/icones/icones sem fundo/ten_year_anniversary_badge.png"
              alt="15 anos"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-white">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs opacity-90">Anos de Experiência</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Certificado ANVISA */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
            <Image
              src="/icones/icones sem fundo/blue_shield_checkmark_icon.png"
              alt="ANVISA"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-white">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs opacity-90">Certificado ANVISA</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Suporte 24/7 */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
            <Image
              src="/icones/icones sem fundo/icon_atend24:7.png"
              alt="Suporte 24/7"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs opacity-90">Suporte WhatsApp</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Economia Garantida */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
            <Image
              src="/icones/icones sem fundo/piggy_bank_with_dollar_coin.png"
              alt="Economia"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-white">
              <div className="text-2xl font-bold">48%</div>
              <div className="text-xs opacity-90">Economia Garantida</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
