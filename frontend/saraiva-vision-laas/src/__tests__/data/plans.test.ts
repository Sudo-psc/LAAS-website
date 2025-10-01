import { plans, getPlanById, getPlansByCategory } from '@/data/plans';
import { Plan } from '@/types';

describe('Plans Data', () => {
  describe('plans array', () => {
    it('deve ter 8 planos definidos', () => {
      expect(plans).toHaveLength(8);
    });

    it('deve ter todos os planos com propriedades obrigatórias', () => {
      plans.forEach(plan => {
        expect(plan).toHaveProperty('id');
        expect(plan).toHaveProperty('name');
        expect(plan).toHaveProperty('category');
        expect(plan).toHaveProperty('monthlyPrice');
        expect(plan).toHaveProperty('yearlyPrice');
        expect(plan).toHaveProperty('features');
        expect(plan).toHaveProperty('lensType');
        expect(plan).toHaveProperty('whatsappMessage');
        
        expect(typeof plan.id).toBe('string');
        expect(typeof plan.name).toBe('string');
        expect(typeof plan.category).toBe('string');
        expect(typeof plan.monthlyPrice).toBe('number');
        expect(typeof plan.yearlyPrice).toBe('number');
        expect(Array.isArray(plan.features)).toBe(true);
        expect(typeof plan.lensType).toBe('string');
        expect(typeof plan.whatsappMessage).toBe('string');
      });
    });

    it('deve ter preços anuais menores ou iguais ao cálculo mensal (indicando descontos)', () => {
      plans.forEach(plan => {
        const calculatedYearly = plan.monthlyPrice * 12;
        // O preço anual deve ser menor ou igual ao cálculo mensal (desconto)
        expect(plan.yearlyPrice).toBeLessThanOrEqual(calculatedYearly);
      });
    });

    it('deve ter categorias válidas', () => {
      const validCategories = ['mensal', 'anual', 'rgp', 'especial'];
      plans.forEach(plan => {
        expect(validCategories).toContain(plan.category);
      });
    });

    it('deve ter badges válidos quando presentes', () => {
      const validBadges = ['popular', 'economia', 'premium'];
      plans.forEach(plan => {
        if (plan.badge) {
          expect(validBadges).toContain(plan.badge);
        }
      });
    });

    it('deve ter features não vazias', () => {
      plans.forEach(plan => {
        expect(plan.features.length).toBeGreaterThan(0);
        plan.features.forEach(feature => {
          expect(typeof feature).toBe('string');
          expect(feature.trim()).not.toBe('');
        });
      });
    });
  });

  describe('getPlanById', () => {
    it('deve retornar o plano correto quando ID existe', () => {
      const planId = 'basico-mensal';
      const result = getPlanById(planId);
      
      expect(result).toBeDefined();
      expect(result?.id).toBe(planId);
      expect(result?.name).toBe('Básico Mensal');
    });

    it('deve retornar undefined quando ID não existe', () => {
      const result = getPlanById('plano-inexistente');
      expect(result).toBeUndefined();
    });

    it('deve retornar undefined para ID vazio', () => {
      const result = getPlanById('');
      expect(result).toBeUndefined();
    });

    it('deve funcionar com todos os IDs existentes', () => {
      plans.forEach(plan => {
        const result = getPlanById(plan.id);
        expect(result).toBeDefined();
        expect(result?.id).toBe(plan.id);
      });
    });
  });

  describe('getPlansByCategory', () => {
    it('deve retornar planos corretos para categoria mensal', () => {
      const result = getPlansByCategory('mensal');
      
      expect(result.length).toBe(3);
      result.forEach(plan => {
        expect(plan.category).toBe('mensal');
      });
    });

    it('deve retornar planos corretos para categoria anual', () => {
      const result = getPlansByCategory('anual');
      
      expect(result.length).toBe(2);
      result.forEach(plan => {
        expect(plan.category).toBe('anual');
      });
    });

    it('deve retornar planos corretos para categoria rgp', () => {
      const result = getPlansByCategory('rgp');
      
      expect(result.length).toBe(2);
      result.forEach(plan => {
        expect(plan.category).toBe('rgp');
      });
    });

    it('deve retornar planos corretos para categoria especial', () => {
      const result = getPlansByCategory('especial');
      
      expect(result.length).toBe(1);
      result.forEach(plan => {
        expect(plan.category).toBe('especial');
      });
    });

    it('deve retornar array vazio para categoria inexistente', () => {
      const result = getPlansByCategory('categoria-inexistente' as Plan['category']);
      expect(result).toHaveLength(0);
    });

    it('deve manter a ordem original dos planos', () => {
      const mensalPlans = getPlansByCategory('mensal');
      const expectedOrder = ['basico-mensal', 'premium-mensal', 'elite-mensal'];
      
      expect(mensalPlans.map(p => p.id)).toEqual(expectedOrder);
    });
  });

  describe('estrutura de dados', () => {
    it('deve ter IDs únicos', () => {
      const ids = plans.map(plan => plan.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('deve ter nomes de planos únicos', () => {
      const names = plans.map(plan => plan.name);
      const uniqueNames = new Set(names);
      expect(names.length).toBe(uniqueNames.size);
    });

    it('deve ter preços positivos', () => {
      plans.forEach(plan => {
        expect(plan.monthlyPrice).toBeGreaterThan(0);
        expect(plan.yearlyPrice).toBeGreaterThan(0);
      });
    });

    it('deve ter mensagens do WhatsApp não vazias', () => {
      plans.forEach(plan => {
        expect(plan.whatsappMessage.trim()).not.toBe('');
        expect(plan.whatsappMessage.toLowerCase()).toContain('interessado');
      });
    });
  });
});
