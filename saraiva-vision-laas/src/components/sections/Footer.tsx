'use client';

import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { complianceInfo, clinicInfo, whatsappConfig } from '@/data/compliance';
import { generateWhatsAppLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Saraiva Vision</h3>
            <p className="text-sm mb-4">
              Clínica oftalmológica especializada em lentes de contato com o primeiro serviço de assinatura do Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${clinicInfo.socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href={`https://facebook.com/${clinicInfo.socialMedia.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${clinicInfo.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-white transition-colors">
                  {clinicInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mt-2"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Calculadora
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('problema-solucao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
              </li>
            </ul>
          </div>

          {/* Informações Médicas */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Informações Médicas</h3>
            <div className="bg-gray-800 rounded-lg p-4 text-sm">
              <p className="font-semibold text-white mb-1">{complianceInfo.doctorName}</p>
              <p className="text-gray-400 mb-1">{complianceInfo.crm}</p>
              <p className="text-gray-400">{complianceInfo.specialty}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Disclaimer CFM */}
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6 mb-8">
          <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
            ⚠️ Aviso Importante - Resolução CFM nº 1.974/11
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            {complianceInfo.disclaimer}
          </p>
          <p className="text-sm text-gray-400 mt-3">
            Este site não substitui consulta médica presencial. Todos os procedimentos e tratamentos devem ser realizados após avaliação clínica individualizada por profissional habilitado.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} {clinicInfo.fullName}. Todos os direitos reservados.</p>
          <p className="mt-2">
            CNPJ: {clinicInfo.cnpj} | {complianceInfo.doctorName} - {complianceInfo.crm}
          </p>
          <p className="mt-2 text-xs">
            Desenvolvido com ❤️ para revolucionar o acesso a lentes de contato no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
