import { Plan } from '@/types';

export const plans: Plan[] = [
  // PLANO 1 - Básico Mensal
  {
    id: 'basico-mensal',
    name: 'Básico Mensal',
    category: 'mensal',
    monthlyPrice: 89.00,
    yearlyPrice: 1068.00,
    lensType: 'Lentes Esféricas',
    badge: 'popular',
    isLaunchPromo: true,
    features: [
      '12 pares de lentes esféricas/ano',
      '🎁 LANÇAMENTO: 1 consulta por telemedicina GRÁTIS',
      'Solução de limpeza incluída',
      'Suporte técnico via WhatsApp',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'lentes-coloridas', name: 'Lentes Coloridas', price: 30, description: 'Par de lentes coloridas mensais' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Básico Mensal por R$ 89/mês. Quando posso agendar?'
  },

  // PLANO 2 - Essencial Mensal
  {
    id: 'essencial-mensal',
    name: 'Essencial Mensal',
    category: 'mensal',
    monthlyPrice: 109.00,
    yearlyPrice: 1308.00,
    lensType: 'Lentes Esféricas Premium',
    features: [
      '12 pares de lentes esféricas premium/ano',
      '1 consulta presencial incluída/ano',
      '🎁 Paquimetria GRATUITA',
      'Solução de limpeza incluída',
      'Suporte técnico prioritário',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'topografia', name: 'Topografia Anual', price: 40, description: 'Exame de topografia corneana/ano' },
      { id: 'lentes-coloridas', name: 'Lentes Coloridas', price: 30, description: 'Par de lentes coloridas mensais' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Essencial Mensal por R$ 109/mês. Quando posso agendar?'
  },

  // PLANO 3 - Plus Mensal
  {
    id: 'plus-mensal',
    name: 'Plus Mensal',
    category: 'mensal',
    monthlyPrice: 129.00,
    yearlyPrice: 1548.00,
    lensType: 'Lentes Esféricas + Tóricas',
    features: [
      '12 pares de lentes/ano',
      '1 consulta presencial incluída/ano',
      '1 troca de grau sem custo adicional',
      '🎁 Paquimetria GRATUITA',
      'Solução de limpeza incluída',
      'Suporte técnico prioritário',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'telemedicina', name: 'Consulta Telemedicina', price: 25, description: 'Consulta adicional por telemedicina' },
      { id: 'lentes-coloridas', name: 'Lentes Coloridas', price: 30, description: 'Par de lentes coloridas mensais' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Plus Mensal por R$ 129/mês. Quando posso agendar?'
  },

  // PLANO 4 - Conforto Anual
  {
    id: 'conforto-anual',
    name: 'Conforto Anual',
    category: 'anual',
    monthlyPrice: 99.00,
    yearlyPrice: 1188.00,
    lensType: 'Lentes Esféricas',
    badge: 'economia',
    features: [
      '12 pares de lentes esféricas/ano',
      '1 consulta por telemedicina/ano',
      '1 consulta presencial incluída/ano',
      '1 troca de grau sem custo',
      '1 par reserva de emergência',
      '🎁 Paquimetria GRATUITA',
      'Solução de limpeza incluída',
      'Economia de 23% vs mensal',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'lentes-coloridas', name: 'Lentes Coloridas', price: 30, description: 'Par de lentes coloridas mensais' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Conforto Anual por R$ 99/mês (R$ 1.188 à vista). Quando posso agendar?'
  },

  // PLANO 5 - Premium Mensal
  {
    id: 'premium-mensal',
    name: 'Premium Mensal',
    category: 'mensal',
    monthlyPrice: 179.00,
    yearlyPrice: 2148.00,
    lensType: 'Lentes Tóricas Premium',
    badge: 'premium',
    features: [
      '12 pares de lentes tóricas premium/ano',
      'Até 3 consultas presenciais/ano',
      '1 consulta por telemedicina/ano',
      '🎁 Paquimetria GRATUITA',
      '🎁 Meibografia INCLUSA',
      '2 trocas de grau sem custo',
      'Solução de limpeza incluída',
      'Atendimento prioritário',
      'Participação em sorteios mensais'
    ],
    addons: [],
    whatsappMessage: 'Olá! Estou interessado no plano Premium Mensal por R$ 179/mês. Quando posso agendar?'
  },

  // PLANO 6 - Elite Mensal
  {
    id: 'elite-mensal',
    name: 'Elite Mensal',
    category: 'mensal',
    monthlyPrice: 219.00,
    yearlyPrice: 2628.00,
    lensType: 'Lentes Multifocais',
    badge: 'premium',
    features: [
      '12 pares de lentes multifocais/ano',
      'Até 6 consultas presenciais/ano',
      '1 consulta por telemedicina/ano',
      '🎁 Topografia INCLUSA para todos',
      '🎁 Paquimetria GRATUITA',
      '🎁 Meibografia INCLUSA',
      '🛡️ Seguro contra perda ou roubo',
      'Trocas de grau ilimitadas',
      'Solução de limpeza incluída',
      'Atendimento VIP sem fila',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'par-emergencia', name: 'Par de Emergência Extra', price: 50, description: 'Par adicional de emergência' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Elite Mensal por R$ 219/mês. Quando posso agendar?'
  },

  // PLANO 7 - Premium RGP
  {
    id: 'premium-rgp',
    name: 'Premium RGP',
    category: 'rgp',
    monthlyPrice: 279.00,
    yearlyPrice: 3348.00,
    lensType: 'Lentes Rígidas Gás Permeáveis',
    badge: 'premium',
    features: [
      '2 pares RGP/ano',
      'Até 6 consultas presenciais/ano',
      '1 consulta por telemedicina/ano',
      '🎁 Topografia INCLUSA',
      '🎁 Paquimetria GRATUITA',
      '🎁 Meibografia INCLUSA',
      '🛡️ Seguro contra perda ou roubo',
      'Alta durabilidade e qualidade óptica',
      'Adaptação personalizada',
      'Solução de limpeza específica incluída',
      'Atendimento VIP sem fila',
      'Participação em sorteios mensais'
    ],
    addons: [
      { id: 'par-emergencia', name: 'Par de Emergência Extra', price: 50, description: 'Par adicional RGP de emergência' }
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Premium RGP por R$ 279/mês. Quando posso agendar?'
  },

  // PLANO 8 - Escleral Elite
  {
    id: 'escleral-elite',
    name: 'Escleral Elite',
    category: 'especial',
    monthlyPrice: 349.00,
    yearlyPrice: 4188.00,
    lensType: 'Lentes Esclerais',
    badge: 'premium',
    features: [
      '2 pares de lentes esclerais/ano',
      'Consultas presenciais ilimitadas',
      'Telemedicina disponível 24/7',
      '🎁 Topografia INCLUSA',
      '🎁 Paquimetria GRATUITA',
      '🎁 Meibografia INCLUSA',
      '🛡️ Seguro contra perda ou roubo',
      'Casos complexos (ceratocone avançado)',
      'Adaptação ultra-especializada',
      'Acompanhamento contínuo personalizado',
      'Solução especializada incluída',
      'Atendimento VIP exclusivo',
      'Tecnologia de ponta',
      'Participação em sorteios mensais'
    ],
    addons: [],
    whatsappMessage: 'Olá! Estou interessado no plano Escleral Elite por R$ 349/mês. Quando posso agendar?'
  }
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPlansByCategory = (category: Plan['category']): Plan[] => {
  return plans.filter(plan => plan.category === category);
};
