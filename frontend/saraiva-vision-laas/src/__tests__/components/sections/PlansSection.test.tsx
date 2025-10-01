import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock das funções utilitárias antes de qualquer importação
jest.mock('@/lib/utils', () => ({
  formatCurrency: jest.fn((value) => `R$ ${value.toFixed(2).replace('.', ',')}`),
  generateWhatsAppLink: jest.fn((message) => `https://wa.me/5533998601427?text=${encodeURIComponent(message || '')}`)
}));

// Mock do window.open
global.open = jest.fn();

// Importar após os mocks
import PlansSection from '@/components/sections/PlansSection';
import { plans } from '@/data/plans';

describe('PlansSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o componente corretamente', () => {
    render(<PlansSection />);
    
    expect(screen.getByText('ESCOLHA SEU PLANO IDEAL')).toBeInTheDocument();
    expect(screen.getByText('8 Planos para Todos os Perfis')).toBeInTheDocument();
    expect(screen.getByText('Do básico ao premium - todos com consultas incluídas e economia garantida')).toBeInTheDocument();
  });

  it('deve renderizar todos os 8 planos', () => {
    render(<PlansSection />);
    
    plans.forEach(plan => {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
      expect(screen.getByText(plan.lensType)).toBeInTheDocument();
    });
  });

  it('deve exibir preços formatados corretamente', () => {
    const { formatCurrency } = require('@/lib/utils');
    
    render(<PlansSection />);
    
    plans.forEach(plan => {
      expect(formatCurrency).toHaveBeenCalledWith(plan.monthlyPrice);
    });
  });

  it('deve exibir badges corretamente', () => {
    render(<PlansSection />);
    
    // Verificar badge "popular"
    expect(screen.getByText('🔥 MAIS POPULAR')).toBeInTheDocument();
    
    // Verificar badge "economia"
    expect(screen.getByText('⭐ MAIOR ECONOMIA')).toBeInTheDocument();
    
    // Verificar badge "premium"
    expect(screen.getByText('👑 PREMIUM')).toBeInTheDocument();
  });

  it('deve exibir features de cada plano', () => {
    render(<PlansSection />);
    
    plans.forEach(plan => {
      plan.features.forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
  });

  it('deve ter botões de WhatsApp para cada plano', () => {
    render(<PlansSection />);
    
    const whatsappButtons = screen.getAllByText('Assinar Agora');
    expect(whatsappButtons).toHaveLength(plans.length);
    
    whatsappButtons.forEach(button => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('target', '_blank');
      expect(button).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('deve gerar links do WhatsApp corretamente', () => {
    const { generateWhatsAppLink } = require('@/lib/utils');
    
    render(<PlansSection />);
    
    plans.forEach(plan => {
      expect(generateWhatsAppLink).toHaveBeenCalledWith(plan.whatsappMessage);
    });
  });

  it('deve destacar o plano com badge "economia"', () => {
    render(<PlansSection />);
    
    const economiaPlan = plans.find(plan => plan.badge === 'economia');
    expect(economiaPlan).toBeDefined();
    
    // Verificar se o plano com badge "economia" tem estilos adicionais
    const planCards = screen.getAllByText(economiaPlan!.name).map(text => text.closest('div'));
    const economiaCard = planCards.find(card => card?.textContent?.includes(economiaPlan!.name));
    
    expect(economiaCard).toBeInTheDocument();
  });

  it('deve exibir nota explicativa no final', () => {
    render(<PlansSection />);
    
    expect(screen.getByText(/💡 Importante:/)).toBeInTheDocument();
    expect(screen.getByText(/Todos os planos incluem consultas de acompanhamento/)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Philipe Saraiva Cruz \(CRM-MG 69.870\)/)).toBeInTheDocument();
  });

  it('deve ter links do WhatsApp com mensagens específicas de cada plano', () => {
    const { generateWhatsAppLink } = require('@/lib/utils');
    
    render(<PlansSection />);
    
    plans.forEach(plan => {
      expect(generateWhatsAppLink).toHaveBeenCalledWith(
        expect.stringContaining('interessado')
      );
    });
  });

  it('deve exibir preços mensais e anuais', () => {
    render(<PlansSection />);
    
    plans.forEach(plan => {
      expect(screen.getByText(/\/mês/)).toBeInTheDocument();
      expect(screen.getByText(/à vista/)).toBeInTheDocument();
    });
  });

  it('deve manter estrutura consistente para todos os planos', () => {
    render(<PlansSection />);
    
    plans.forEach(plan => {
      const planElement = screen.getByText(plan.name).closest('div');
      expect(planElement).toBeInTheDocument();
      
      // Verificar se o plano tem todos os elementos necessários
      const planCard = planElement?.closest('div');
      expect(planCard).toContainElement(screen.getByText(plan.name));
      expect(planCard).toContainElement(screen.getByText(plan.lensType));
      
      // Verificar se tem features
      plan.features.forEach(feature => {
        expect(planCard).toContainElement(screen.getByText(feature));
      });
      
      // Verificar se tem botão
      expect(planCard).toContainElement(screen.getByRole('link', { name: 'Assinar Agora' }));
    });
  });
});
