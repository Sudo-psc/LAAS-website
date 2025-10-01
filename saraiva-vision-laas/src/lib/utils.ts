import { whatsappConfig } from '@/data/compliance';

export const generateWhatsAppLink = (message?: string): string => {
  const encodedMessage = encodeURIComponent(message || whatsappConfig.defaultMessage);
  return `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const calculateSavings = (currentYearlyCost: number, laasYearlyCost: number) => {
  const savings = currentYearlyCost - laasYearlyCost;
  const savingsPercentage = (savings / currentYearlyCost) * 100;
  
  return {
    savings,
    savingsPercentage: Math.round(savingsPercentage * 10) / 10,
  };
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
