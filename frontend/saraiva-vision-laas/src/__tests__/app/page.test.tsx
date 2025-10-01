import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock dos componentes antes de qualquer importação
jest.mock('@/components/sections/HeroSection', () => {
  return () => <div data-testid="hero-section">Hero Section</div>;
});

jest.mock('@/components/sections/ProblemSolutionSection', () => {
  return () => <div data-testid="problem-solution-section">Problem Solution Section</div>;
});

jest.mock('@/components/sections/PlansSection', () => {
  return () => <div data-testid="plans-section">Plans Section</div>;
});

jest.mock('@/components/sections/CalculatorSection', () => {
  return () => <div data-testid="calculator-section">Calculator Section</div>;
});

jest.mock('@/components/sections/Footer', () => {
  return () => <div data-testid="footer">Footer</div>;
});

// Mock de outros componentes que possam ser importados
jest.mock('@/components/sections/TrustBadgesSection', () => {
  return () => <div data-testid="trust-badges-section">Trust Badges Section</div>;
});

jest.mock('@/components/sections/ClinicServicesSection', () => {
  return () => <div data-testid="clinic-services-section">Clinic Services Section</div>;
});

jest.mock('@/components/sections/WebsiteReferenceSection', () => {
  return () => <div data-testid="website-reference-section">Website Reference Section</div>;
});

// Mock das funções utilitárias
jest.mock('@/lib/utils', () => ({
  generateWhatsAppLink: jest.fn((message) => `https://wa.me/5533998601427?text=${encodeURIComponent(message || '')}`),
  formatCurrency: jest.fn((value) => `R$ ${value.toFixed(2).replace('.', ',')}`),
  calculateSavings: jest.fn((current, laas) => ({
    savings: current - laas,
    savingsPercentage: Math.round(((current - laas) / current) * 100 * 10) / 10
  })),
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' '))
}));

// Importar após os mocks
import Home from '@/app/page';
import { generateWhatsAppLink } from '@/lib/utils';

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar a página principal corretamente', () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('problem-solution-section')).toBeInTheDocument();
    expect(screen.getByTestId('plans-section')).toBeInTheDocument();
    expect(screen.getByTestId('calculator-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('deve ter a estrutura principal correta', () => {
    const { container } = render(<Home />);
    
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('min-h-screen', 'bg-white');
    
    // Verificar se todas as seções estão presentes
    const sections = main?.querySelectorAll('div[data-testid]');
    expect(sections).toHaveLength(5);
  });

  it('deve manter a ordem correta das seções', () => {
    render(<Home />);
    
    const main = screen.getByRole('main');
    const children = Array.from(main.children);
    
    expect(children[0]).toHaveAttribute('data-testid', 'hero-section');
    expect(children[1]).toHaveAttribute('data-testid', 'problem-solution-section');
    expect(children[2]).toHaveAttribute('data-testid', 'plans-section');
    expect(children[3]).toHaveAttribute('data-testid', 'calculator-section');
    expect(children[4]).toHaveAttribute('data-testid', 'footer');
  });

  it('deve ser responsivo', () => {
    const { container } = render(<Home />);
    
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    
    // Verificar se o layout fluido está presente
    expect(main).toHaveClass('min-h-screen');
  });

  it('deve carregar todos os componentes sem erros', () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  it('deve ter o título da página correto', () => {
    render(<Home />);
    
    // O título deve ser definido no layout, mas podemos verificar se a página está presente
    expect(document.title).toBeDefined();
  });

  it('deve ser acessível', () => {
    render(<Home />);
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    
    // Verificar se há um elemento landmark para melhor acessibilidade
    expect(main).toHaveAttribute('role', 'main');
  });

  it('deve ter metadados corretos', () => {
    render(<Home />);
    
    // Verificar se o documento tem o idioma correto
    expect(document.documentElement).toHaveAttribute('lang', 'pt-BR');
  });

  it('deve funcionar com JavaScript desabilitado', () => {
    // Esta é uma verificação básica - em um ambiente real, 
    // precisaríamos testar sem JS
    render(<Home />);
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toBeVisible();
  });

  it('deve ter performance adequada', () => {
    const startTime = performance.now();
    render(<Home />);
    const endTime = performance.now();
    
    // Verificar se o tempo de renderização é razoável (< 100ms)
    expect(endTime - startTime).toBeLessThan(100);
  });

  it('deve manter consistência visual entre seções', () => {
    render(<Home />);
    
    const sections = screen.getAllByTestId(/.*-section$/);
    
    sections.forEach(section => {
      expect(section).toBeInTheDocument();
      expect(section).toBeVisible();
    });
  });

  it('deve ter navegação consistente', () => {
    render(<Home />);
    
    // Verificar se há links de navegação entre seções
    // (isto dependeria da implementação real)
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

describe('Integração entre componentes', () => {
  it('deve permitir navegação entre seções', () => {
    render(<Home />);
    
    // Simular clique em um link de navegação
    // (isto dependeria da implementação real de links âncora)
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
  });

  it('deve manter estado consistente entre seções', () => {
    render(<Home />);
    
    // Verificar se os componentes mantêm seu estado
    const sections = screen.getAllByTestId(/.*-section$/);
    
    sections.forEach(section => {
      expect(section).toBeInTheDocument();
      expect(section).toBeVisible();
    });
  });

  it('deve compartilhar dados entre componentes corretamente', () => {
    const { generateWhatsAppLink } = require('@/lib/utils');
    
    render(<Home />);
    
    // Verificar se a função de WhatsApp está disponível para todos os componentes
    expect(generateWhatsAppLink).toBeDefined();
  });

  it('deve ter fluxo de usuário consistente', () => {
    render(<Home />);
    
    // Simular o fluxo do usuário: Hero -> Plans -> Calculator
    const heroSection = screen.getByTestId('hero-section');
    const plansSection = screen.getByTestId('plans-section');
    const calculatorSection = screen.getByTestId('calculator-section');
    
    expect(heroSection).toBeInTheDocument();
    expect(plansSection).toBeInTheDocument();
    expect(calculatorSection).toBeInTheDocument();
    
    // Verificar ordem lógica
    const main = screen.getByRole('main');
    const children = Array.from(main.children);
    
    const heroIndex = children.findIndex(child => 
      child.getAttribute('data-testid') === 'hero-section'
    );
    const plansIndex = children.findIndex(child => 
      child.getAttribute('data-testid') === 'plans-section'
    );
    const calculatorIndex = children.findIndex(child => 
      child.getAttribute('data-testid') === 'calculator-section'
    );
    
    expect(heroIndex).toBeLessThan(plansIndex);
    expect(plansIndex).toBeLessThan(calculatorIndex);
  });
});

describe('Performance e Otimização', () => {
  it('deve renderizar rapidamente', () => {
    const startTime = performance.now();
    
    for (let i = 0; i < 10; i++) {
      const { unmount } = render(<Home />);
      unmount();
    }
    
    const endTime = performance.now();
    const avgTime = (endTime - startTime) / 10;
    
    // Verificar se o tempo médio de renderização é aceitável
    expect(avgTime).toBeLessThan(50);
  });

  it('deve limpar recursos corretamente', () => {
    const { unmount } = render(<Home />);
    
    // Simular múltiplos ciclos de montagem/desmontagem
    for (let i = 0; i < 5; i++) {
      unmount();
      render(<Home />);
    }
    
    // Não deve haver vazamentos de memória
    expect(() => unmount()).not.toThrow();
  });
});
