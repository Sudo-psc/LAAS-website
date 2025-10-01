// Tipos principais da aplicação

export interface PlanAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Plan {
  id: string;
  name: string;
  category: 'mensal' | 'anual' | 'rgp' | 'especial';
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  lensType: string;
  badge?: 'popular' | 'economia' | 'premium';
  whatsappMessage: string;
  addons?: PlanAddon[];
  isLaunchPromo?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  age: number;
  city: string;
  rating: number;
  text: string;
  plan: string;
}

export interface CalculatorResult {
  currentYearlyCost: number;
  laasYearlyCost: number;
  savings: number;
  savingsPercentage: number;
  recommendedPlan: string;
}

export type LensType = 'esferica' | 'torica' | 'multifocal' | 'rgp' | 'escleral';

export interface ComplianceInfo {
  doctorName: string;
  crm: string;
  specialty: string;
  disclaimer: string;
}
