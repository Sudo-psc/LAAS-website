import { Plan } from '@/types';

export const plans: Plan[] = [
  {
    id: 'basico-mensal',
    name: 'Básico Mensal',
    category: 'mensal',
    monthlyPrice: 241.50,
    yearlyPrice: 2608.20,
    lensType: 'Lentes Esféricas',
    badge: 'popular',
    features: [
      '6 pares de lentes/ano',
      'Esféricas de hidrogel',
      'Consultas de acompanhamento',
      'Suporte técnico via WhatsApp',
      'Troca em caso de perda (taxa adicional)'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Básico Mensal por R$ 241,50/mês. Quando posso agendar?'
  },
  {
    id: 'premium-mensal',
    name: 'Premium Mensal',
    category: 'mensal',
    monthlyPrice: 317.40,
    yearlyPrice: 3427.92,
    lensType: 'Lentes Tóricas',
    features: [
      '6 pares de lentes tóricas/ano',
      'Correção de astigmatismo',
      'Consultas de acompanhamento',
      'Suporte técnico prioritário',
      '1 troca grátis por perda'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Premium Mensal por R$ 317,40/mês. Quando posso agendar?'
  },
  {
    id: 'elite-mensal',
    name: 'Elite Mensal',
    category: 'mensal',
    monthlyPrice: 408.25,
    yearlyPrice: 4409.10,
    lensType: 'Lentes Multifocais',
    features: [
      '6 pares multifocais/ano',
      'Correção de presbiopia',
      'Consultas ilimitadas',
      'Atendimento VIP',
      '2 trocas grátis por perda'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Elite Mensal por R$ 408,25/mês. Quando posso agendar?'
  },
  {
    id: 'conforto-anual',
    name: 'Conforto Anual',
    category: 'anual',
    monthlyPrice: 180.55,
    yearlyPrice: 1949.94,
    lensType: 'Lentes Esféricas',
    badge: 'economia',
    features: [
      '12 pares de lentes/ano',
      'Economia de até 70%',
      'Pagamento anual facilitado',
      'Consultas de acompanhamento',
      'Suporte técnico via WhatsApp'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Conforto Anual por R$ 180,55/mês (R$ 1.949,94 à vista). Quando posso agendar?'
  },
  {
    id: 'visao-hd-anual',
    name: 'Visão HD Anual',
    category: 'anual',
    monthlyPrice: 271.40,
    yearlyPrice: 2931.12,
    lensType: 'Lentes Tóricas Premium',
    features: [
      '12 pares tóricas/ano',
      'Tecnologia de última geração',
      'Consultas ilimitadas',
      'Suporte prioritário',
      '1 troca grátis por perda'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Visão HD Anual por R$ 271,40/mês (R$ 2.931,12 à vista). Quando posso agendar?'
  },
  {
    id: 'premium-rgp',
    name: 'Premium RGP',
    category: 'rgp',
    monthlyPrice: 499.10,
    yearlyPrice: 5390.28,
    lensType: 'Lentes Rígidas Gás Permeáveis',
    badge: 'premium',
    features: [
      '2 pares RGP/ano',
      'Alta durabilidade',
      'Melhor qualidade óptica',
      'Consultas especializadas',
      'Adaptação personalizada'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Premium RGP por R$ 499,10/mês. Quando posso agendar?'
  },
  {
    id: 'torica-rgp',
    name: 'Tórica RGP',
    category: 'rgp',
    monthlyPrice: 650.90,
    yearlyPrice: 7029.72,
    lensType: 'RGP Tóricas',
    features: [
      '2 pares RGP tóricas/ano',
      'Correção avançada de astigmatismo',
      'Design personalizado',
      'Consultas ilimitadas',
      'Suporte técnico especializado'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Tórica RGP por R$ 650,90/mês. Quando posso agendar?'
  },
  {
    id: 'escleral-premium',
    name: 'Escleral Premium',
    category: 'especial',
    monthlyPrice: 909.65,
    yearlyPrice: 9824.22,
    lensType: 'Lentes Esclerais',
    badge: 'premium',
    features: [
      '1 par de lentes esclerais/ano',
      'Casos complexos (ceratocone avançado)',
      'Adaptação ultra-especializada',
      'Acompanhamento contínuo',
      'Tecnologia de ponta'
    ],
    whatsappMessage: 'Olá! Estou interessado no plano Escleral Premium por R$ 909,65/mês. Quando posso agendar?'
  }
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPlansByCategory = (category: Plan['category']): Plan[] => {
  return plans.filter(plan => plan.category === category);
};
