import { generateWhatsAppLink, formatCurrency, calculateSavings, cn } from '@/lib/utils';
import { whatsappConfig } from '@/data/compliance';

describe('Utils', () => {
  describe('generateWhatsAppLink', () => {
    it('deve gerar link do WhatsApp com mensagem padrão quando nenhuma mensagem é fornecida', () => {
      const expectedLink = `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.defaultMessage)}`;
      const result = generateWhatsAppLink();
      expect(result).toBe(expectedLink);
    });

    it('deve gerar link do WhatsApp com mensagem customizada', () => {
      const customMessage = 'Olá, tenho interesse nos planos';
      const expectedLink = `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(customMessage)}`;
      const result = generateWhatsAppLink(customMessage);
      expect(result).toBe(expectedLink);
    });

    it('deve codificar corretamente caracteres especiais na mensagem', () => {
      const messageWithSpecialChars = 'Olá! Tenho interesse em R$ 100,00';
      const expectedLink = `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(messageWithSpecialChars)}`;
      const result = generateWhatsAppLink(messageWithSpecialChars);
      expect(result).toBe(expectedLink);
    });
  });

  describe('formatCurrency', () => {
    it('deve formatar valores em reais corretamente', () => {
      expect(formatCurrency(100)).toBe('R$ 100,00');
      expect(formatCurrency(1000)).toBe('R$ 1.000,00');
      expect(formatCurrency(1000.5)).toBe('R$ 1.000,50');
      expect(formatCurrency(1000.99)).toBe('R$ 1.000,99');
    });

    it('deve formatar valores decimais corretamente', () => {
      expect(formatCurrency(0.5)).toBe('R$ 0,50');
      expect(formatCurrency(0.99)).toBe('R$ 0,99');
      expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
    });

    it('deve formatar valores grandes corretamente', () => {
      expect(formatCurrency(1000000)).toBe('R$ 1.000.000,00');
      expect(formatCurrency(9999999.99)).toBe('R$ 9.999.999,99');
    });
  });

  describe('calculateSavings', () => {
    it('deve calcular economia corretamente quando LAAS é mais barato', () => {
      const currentCost = 5000;
      const laasCost = 2000;
      const result = calculateSavings(currentCost, laasCost);
      
      expect(result.savings).toBe(3000);
      expect(result.savingsPercentage).toBe(60);
    });

    it('deve calcular economia com casas decimais', () => {
      const currentCost = 3000;
      const laasCost = 1950;
      const result = calculateSavings(currentCost, laasCost);
      
      expect(result.savings).toBe(1050);
      expect(result.savingsPercentage).toBe(35);
    });

    it('deve arredondar porcentagem para uma casa decimal', () => {
      const currentCost = 1000;
      const laasCost = 333.33;
      const result = calculateSavings(currentCost, laasCost);
      
      expect(result.savings).toBeCloseTo(666.67, 2);
      expect(result.savingsPercentage).toBe(66.7);
    });

    it('deve retornar economia zero quando custos são iguais', () => {
      const currentCost = 2000;
      const laasCost = 2000;
      const result = calculateSavings(currentCost, laasCost);
      
      expect(result.savings).toBe(0);
      expect(result.savingsPercentage).toBe(0);
    });

    it('deve retornar economia negativa quando LAAS é mais caro', () => {
      const currentCost = 1000;
      const laasCost = 1500;
      const result = calculateSavings(currentCost, laasCost);
      
      expect(result.savings).toBe(-500);
      expect(result.savingsPercentage).toBe(-50);
    });
  });

  describe('cn', () => {
    it('deve combinar classes CSS corretamente', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
    });

    it('deve ignorar valores falsy', () => {
      expect(cn('class1', null, 'class2', undefined, 'class3')).toBe('class1 class2 class3');
      expect(cn('class1', false, 'class3')).toBe('class1 class3');
      expect(cn('', 'class2', 0)).toBe('class2');
    });

    it('deve retornar string vazia quando todas as classes são falsy', () => {
      expect(cn(null, undefined, false, '')).toBe('');
    });

    it('deve funcionar com uma única classe', () => {
      expect(cn('class1')).toBe('class1');
    });

    it('deve funcionar sem classes', () => {
      expect(cn()).toBe('');
    });
  });
});
