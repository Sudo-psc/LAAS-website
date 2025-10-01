import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock das funções utilitárias antes de qualquer importação
jest.mock('@/lib/utils', () => ({
  formatCurrency: jest.fn((value) => `R$ ${value.toFixed(2).replace('.', ',')}`),
  calculateSavings: jest.fn((current, laas) => ({
    savings: current - laas,
    savingsPercentage: Math.round(((current - laas) / current) * 100 * 10) / 10
  })),
  generateWhatsAppLink: jest.fn((message) => `https://wa.me/5533998601427?text=${encodeURIComponent(message || '')}`)
}));

// Mock do window.open
global.open = jest.fn();

// Importar após os mocks
import CalculatorSection from '@/components/sections/CalculatorSection';
import { formatCurrency, calculateSavings } from '@/lib/utils';

describe('CalculatorSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o componente corretamente', () => {
    render(<CalculatorSection />);
    
    expect(screen.getByText('CALCULADORA DE ECONOMIA')).toBeInTheDocument();
    expect(screen.getByText('Quanto Você Vai Economizar?')).toBeInTheDocument();
    expect(screen.getByText('Descubra em segundos quanto pode economizar com o LAAS')).toBeInTheDocument();
  });

  it('deve renderizar o input de custo atual', () => {
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Ex: R$ 5000');
  });

  it('deve renderizar o dropdown de tipo de lente', () => {
    render(<CalculatorSection />);
    
    const select = screen.getByLabelText('Qual tipo de lente você usa?');
    expect(select).toBeInTheDocument();
    
    // Verificar se as opções estão presentes
    expect(screen.getByText('Esféricas')).toBeInTheDocument();
    expect(screen.getByText('Tóricas (Astigmatismo)')).toBeInTheDocument();
    expect(screen.getByText('Multifocais (Presbiopia)')).toBeInTheDocument();
    expect(screen.getByText('RGP (Rígidas)')).toBeInTheDocument();
    expect(screen.getByText('Esclerais')).toBeInTheDocument();
  });

  it('deve formatar corretamente o input de custo', () => {
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    
    fireEvent.change(input, { target: { value: '5000' } });
    expect(input).toHaveValue('R$ 5000');
    
    fireEvent.change(input, { target: { value: '1000' } });
    expect(input).toHaveValue('R$ 1000');
  });

  it('deve permitir apenas números no input de custo', () => {
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input).toHaveValue('');
    
    fireEvent.change(input, { target: { value: '123abc456' } });
    expect(input).toHaveValue('R$ 123456');
  });

  it('deve calcular economia quando o botão é clicado com valores válidos', async () => {
    const mockCalculateSavings = calculateSavings as jest.MockedFunction<typeof calculateSavings>;
    mockCalculateSavings.mockReturnValue({
      savings: 3050.06,
      savingsPercentage: 61
    });

    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const select = screen.getByLabelText('Qual tipo de lente você usa?');
    const button = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.change(select, { target: { value: 'esferica' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(mockCalculateSavings).toHaveBeenCalledWith(5000, 1949.94);
    });
    
    expect(screen.getByText('Sua Economia Anual')).toBeInTheDocument();
  });

  it('deve mostrar alerta para valor abaixo do mínimo', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const button = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '500' } });
    fireEvent.click(button);
    
    expect(alertSpy).toHaveBeenCalledWith('Por favor, insira um valor entre R$ 1.000 e R$ 10.000');
    
    alertSpy.mockRestore();
  });

  it('deve mostrar alerta para valor acima do máximo', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const button = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '15000' } });
    fireEvent.click(button);
    
    expect(alertSpy).toHaveBeenCalledWith('Por favor, insira um valor entre R$ 1.000 e R$ 10.000');
    
    alertSpy.mockRestore();
  });

  it('deve mostrar alerta para valor inválido', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const button = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    
    expect(alertSpy).toHaveBeenCalledWith('Por favor, insira um valor entre R$ 1.000 e R$ 10.000');
    
    alertSpy.mockRestore();
  });

  it('deve exibir resultado do cálculo corretamente', async () => {
    const mockFormatCurrency = formatCurrency as jest.MockedFunction<typeof formatCurrency>;
    mockFormatCurrency.mockImplementation((value) => `R$ ${value.toFixed(2).replace('.', ',')}`);
    
    const mockCalculateSavings = calculateSavings as jest.MockedFunction<typeof calculateSavings>;
    mockCalculateSavings.mockReturnValue({
      savings: 3050.06,
      savingsPercentage: 61
    });

    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const select = screen.getByLabelText('Qual tipo de lente você usa?');
    const button = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.change(select, { target: { value: 'esferica' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Sua Economia Anual')).toBeInTheDocument();
      expect(screen.getByText('R$ 3050,06')).toBeInTheDocument();
      expect(screen.getByText('Isso representa 61% de economia!')).toBeInTheDocument();
    });
  });

  it('deve abrir WhatsApp com mensagem personalizada quando botão é clicado', async () => {
    const mockGenerateWhatsAppLink = jest.requireMock('@/lib/utils').generateWhatsAppLink;
    
    const mockCalculateSavings = calculateSavings as jest.MockedFunction<typeof calculateSavings>;
    mockCalculateSavings.mockReturnValue({
      savings: 3050.06,
      savingsPercentage: 61
    });

    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const select = screen.getByLabelText('Qual tipo de lente você usa?');
    const calculateButton = screen.getByText('Calcular Minha Economia');
    
    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.change(select, { target: { value: 'esferica' } });
    fireEvent.click(calculateButton);
    
    await waitFor(() => {
      const whatsappButton = screen.getByText('Quero Economizar R$ 3050,06/ano');
      expect(whatsappButton).toBeInTheDocument();
    });
    
    const whatsappButton = screen.getByText('Quero Economizar R$ 3050,06/ano');
    fireEvent.click(whatsappButton);
    
    expect(mockGenerateWhatsAppLink).toHaveBeenCalledWith(
      'Oi! Calculei uma economia de R$ 3050,06/ano com o plano Conforto Anual. Gostaria de agendar uma consulta para começar.'
    );
    expect(global.open).toHaveBeenCalledWith(
      'https://wa.me/5533998601427?text=Oi%21%20Calculei%20uma%20economia%20de%20R%24%203050.06%2Fano%20com%20o%20plano%20Conforto%20Anual.%20Gostaria%20de%20agendar%20uma%20consulta%20para%20come%C3%A7ar.',
      '_blank'
    );
  });

  it('deve atualizar cálculo quando tipo de lente é alterado', async () => {
    const mockCalculateSavings = calculateSavings as jest.MockedFunction<typeof calculateSavings>;
    
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta com lentes por ano?');
    const select = screen.getByLabelText('Qual tipo de lente você usa?');
    const button = screen.getByText('Calcular Minha Economia');
    
    // Primeiro cálculo com lente esférica
    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.change(select, { target: { value: 'esferica' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(mockCalculateSavings).toHaveBeenCalledWith(5000, 1949.94);
    });
    
    mockCalculateSavings.mockClear();
    
    // Segundo cálculo com lente tórica
    fireEvent.change(select, { target: { value: 'torica' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(mockCalculateSavings).toHaveBeenCalledWith(5000, 2931.12);
    });
  });
});
