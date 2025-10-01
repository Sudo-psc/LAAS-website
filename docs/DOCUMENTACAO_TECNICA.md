# Documentação Técnica - Saraiva Vision LAAS

**Versão:** 1.0  
**Data:** 01 de outubro de 2025  
**Projeto:** Landing Page LAAS Saraiva Vision  
**Tecnologia:** Next.js 14+ + TypeScript + Tailwind CSS

---

## Índice

1. [Arquitetura do Sistema](#1-arquitetura-do-sistema)
2. [Estrutura de Componentes](#2-estrutura-de-componentes)
3. [Gerenciamento de Estado](#3-gerenciamento-de-estado)
4. [Integrações](#4-integrações)
5. [Performance e Otimizações](#5-performance-e-otimizações)
6. [SEO e Analytics](#6-seo-e-analytics)
7. [Compliance e Segurança](#7-compliance-e-segurança)
8. [Testing e QA](#8-testing-e-qa)
9. [Deploy e Infraestrutura](#9-deploy-e-infraestrutura)
10. [Manutenção e Monitoramento](#10-manutenção-e-monitoramento)

---

## 1. Arquitetura do Sistema

### 1.1 Visão Geral

O projeto utiliza uma arquitetura baseada em **Next.js 14+ com App Router**, proporcionando:

- **Static Site Generation (SSG)** para performance máxima
- **TypeScript** para type safety e melhor experiência de desenvolvimento
- **Tailwind CSS** para styling rápido e consistente
- **Component-based architecture** para reutilização e manutenção

### 1.2 Fluxo de Dados

```
Usuário → Next.js (SSG) → Componentes React → Estado (Zustand) → WhatsApp API
    ↓
Analytics (GA4) → Compliance (LGPD/CFM) → Performance Monitoring
```

### 1.3 Decisões Arquitetônicas

#### Por que Next.js App Router?
- **Performance**: SSG proporciona carregamento instantâneo
- **SEO**: Renderização no servidor para melhor indexação
- **DX**: Melhor experiência de desenvolvimento com React Server Components
- **Escalabilidade**: Arquitetura modular facilita manutenção

#### Por que TypeScript?
- **Type Safety**: Prevenção de erros em tempo de compilação
- **Autocompletion**: Melhor experiência de desenvolvimento
- **Documentação**: Tipos servem como documentação viva
- **Refatoração**: Mudanças seguras em todo o código

#### Por que Tailwind CSS?
- **Performance**: CSS mínimo gerado apenas para classes utilizadas
- **Consistência**: Design system garantido
- **Desenvolvimento Rápido**: Prototipagem sem sair do HTML
- **Customização**: Fácil extensão via config file

---

## 2. Estrutura de Componentes

### 2.1 Hierarquia de Componentes

```
App (layout.tsx)
└── Home (page.tsx)
    ├── HeroSection
    ├── ProblemSolutionSection
    ├── PlansSection
    ├── CalculatorSection
    └── Footer
```

### 2.2 Componentes Principais

#### HeroSection
```typescript
// components/sections/HeroSection.tsx
interface HeroSectionProps {
  onWhatsAppClick: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Lenses de Contato por Assinatura
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600">
              Economize até 70% com o Primeiro LAAS do Brasil
            </p>
            <WhatsAppButton 
              section="hero"
              onClick={onWhatsAppClick}
            />
          </div>
          {/* Visual */}
          <div className="relative">
            <Image
              src="/lenses-hero.png"
              alt="Lenses de contato"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
```

#### PlansSection
```typescript
// components/sections/PlansSection.tsx
interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  badge?: string;
  popular?: boolean;
}

const PlansSection: React.FC = () => {
  const plans: Plan[] = [
    {
      id: 'basico-mensal',
      name: 'Básico Mensal',
      description: 'Para uso diário',
      monthlyPrice: 241.50,
      annualPrice: 2608.20,
      features: ['Lentes esféricas', 'Entrega mensal', 'Suporte 24/7'],
      popular: true
    },
    // ... outros planos
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          8 Planos Sob Medida para Sua Necessidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

#### CalculatorSection
```typescript
// components/sections/CalculatorSection.tsx
interface CalculatorData {
  currentSpending: number;
  lensType: string;
  usageFrequency: string;
}

interface CalculatorResult {
  economy: number;
  percentage: number;
  recommendedPlan: string;
  monthlySavings: number;
}

const CalculatorSection: React.FC = () => {
  const [data, setData] = useState<CalculatorData>({
    currentSpending: 0,
    lensType: '',
    usageFrequency: ''
  });
  
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculateEconomy = (data: CalculatorData): CalculatorResult => {
    // Lógica de cálculo
    const baseEconomy = data.currentSpending * 0.45; // 45% economia média
    return {
      economy: baseEconomy,
      percentage: 45,
      recommendedPlan: 'conforto-anual',
      monthlySavings: baseEconomy / 12
    };
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Calcule Sua Economia Real
        </h2>
        <CalculatorForm
          data={data}
          onChange={setData}
          onCalculate={() => setResult(calculateEconomy(data))}
        />
        {result && <CalculatorResult result={result} />}
      </div>
    </section>
  );
};
```

### 2.3 Componentes Reutilizáveis

#### WhatsAppButton
```typescript
// components/ui/WhatsAppButton.tsx
interface WhatsAppButtonProps {
  section: string;
  message?: string;
  onClick?: (section: string) => void;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  section,
  message,
  onClick,
  className = ''
}) => {
  const handleClick = () => {
    if (onClick) onClick(section);
    
    const defaultMessage = getWhatsAppMessage(section, message);
    const url = generateWhatsAppURL(defaultMessage);
    
    // Track event
    trackWhatsAppClick(section);
    
    // Open WhatsApp
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2 ${className}`}
    >
      <WhatsAppIcon className="w-6 h-6" />
      Falar no WhatsApp Agora
    </button>
  );
};
```

#### PlanCard
```typescript
// components/ui/PlanCard.tsx
interface PlanCardProps {
  plan: Plan;
  onSelect?: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 relative ${
      plan.popular ? 'ring-2 ring-green-500' : ''
    }`}>
      {plan.badge && (
        <div className="absolute -top-3 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {plan.badge}
        </div>
      )}
      
      {plan.popular && (
        <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          MAIS POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-green-600">
          R$ {plan.monthlyPrice.toFixed(2)}
          <span className="text-sm text-gray-500">/mês</span>
        </div>
        <div className="text-sm text-gray-500">
          ou R$ {plan.annualPrice.toFixed(2)} à vista
        </div>
      </div>
      
      <ul className="space-y-2 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      
      <WhatsAppButton
        section="planos"
        message={`Estou interessado no plano ${plan.name} por R$ ${plan.monthlyPrice}/mês`}
        className="w-full"
      />
    </div>
  );
};
```

---

## 3. Gerenciamento de Estado

### 3.1 Zustand Store

Para gerenciar o estado global da aplicação, utilizamos **Zustand** devido à sua simplicidade e performance.

#### Store Principal
```typescript
// store/index.ts
import { create } from 'zustand';

interface AppState {
  // Calculator state
  calculator: {
    currentSpending: number;
    lensType: string;
    usageFrequency: string;
    result: CalculatorResult | null;
  };
  
  // UI state
  ui: {
    activeSection: string;
    isMobileMenuOpen: boolean;
    cookieConsent: 'accepted' | 'rejected' | 'pending';
  };
  
  // Actions
  setCalculatorData: (data: Partial<AppState['calculator']>) => void;
  setUIState: (data: Partial<AppState['ui']>) => void;
  resetCalculator: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  calculator: {
    currentSpending: 0,
    lensType: '',
    usageFrequency: '',
    result: null,
  },
  
  ui: {
    activeSection: 'hero',
    isMobileMenuOpen: false,
    cookieConsent: 'pending',
  },
  
  setCalculatorData: (data) =>
    set((state) => ({
      calculator: { ...state.calculator, ...data }
    })),
  
  setUIState: (data) =>
    set((state) => ({
      ui: { ...state.ui, ...data }
    })),
  
  resetCalculator: () =>
    set((state) => ({
      calculator: {
        currentSpending: 0,
        lensType: '',
        usageFrequency: '',
        result: null,
      }
    })),
}));
```

### 3.2 Hooks Personalizados

#### useCalculator
```typescript
// hooks/useCalculator.ts
import { useAppStore } from '@/store';

export const useCalculator = () => {
  const {
    calculator,
    setCalculatorData,
    resetCalculator
  } = useAppStore();

  const calculateEconomy = (data: typeof calculator) => {
    // Lógica de cálculo baseada nos dados
    const baseEconomy = data.currentSpending * 0.45;
    const recommendedPlan = getRecommendedPlan(data.lensType);
    
    const result = {
      economy: baseEconomy,
      percentage: 45,
      recommendedPlan,
      monthlySavings: baseEconomy / 12
    };

    setCalculatorData({ result });
    return result;
  };

  return {
    calculator,
    setCalculatorData,
    calculateEconomy,
    resetCalculator
  };
};
```

#### useWhatsApp
```typescript
// hooks/useWhatsApp.ts
import { useAppStore } from '@/store';

export const useWhatsApp = () => {
  const { setUIState } = useAppStore();

  const generateWhatsAppURL = (message: string): string => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5533998601427';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const getWhatsAppMessage = (section: string, customMessage?: string): string => {
    const messages = {
      hero: 'Olá! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.',
      planos: customMessage || 'Olá! Estou interessado em um plano. Quando posso agendar?',
      economia: `Oi! Calculei uma economia e gostaria de agendar uma consulta.`,
      duvidas: 'Olá! Tenho algumas dúvidas sobre o LAAS. É possível conversar?'
    };

    return messages[section] || messages.hero;
  };

  const handleWhatsAppClick = (section: string, customMessage?: string) => {
    const message = getWhatsAppMessage(section, customMessage);
    const url = generateWhatsAppURL(message);
    
    // Track analytics
    trackWhatsAppClick(section);
    
    // Update UI state
    setUIState({ activeSection: section });
    
    // Open WhatsApp
    window.open(url, '_blank');
  };

  return {
    generateWhatsAppURL,
    getWhatsAppMessage,
    handleWhatsAppClick
  };
};
```

---

## 4. Integrações

### 4.1 WhatsApp Integration

#### Geração de URLs
```typescript
// lib/whatsapp.ts
interface WhatsAppMessage {
  section: 'hero' | 'planos' | 'economia' | 'duvidas';
  planoId?: string;
  valorCalculado?: number;
  customMessage?: string;
}

export const generateWhatsAppURL = ({
  section,
  planoId,
  valorCalculado,
  customMessage
}: WhatsAppMessage): string => {
  const baseURL = 'https://wa.me/5533998601427';
  
  const messages = {
    hero: 'Olá! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.',
    planos: `Oi! Estou interessado no plano ${planoId}. Quando posso agendar uma consulta?`,
    economia: `Olá! Calculei uma economia de R$ ${valorCalculado}/ano. Quero agendar uma avaliação.`,
    duvidas: 'Olá! Tenho algumas dúvidas sobre o serviço LAAS. Pode me ajudar?'
  };
  
  const message = customMessage || messages[section];
  return `${baseURL}?text=${encodeURIComponent(message)}`;
};
```

#### Componente WhatsApp Float
```typescript
// components/WhatsAppFloat.tsx
const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const url = generateWhatsAppURL({ section: 'hero' });
    trackWhatsAppClick('float-button');
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </button>
  );
};
```

### 4.2 Google Analytics 4

#### Configuração
```typescript
// lib/analytics.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_ID) {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos
export const trackWhatsAppClick = (section: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: section,
  });
};

export const trackCalculatorUse = (economia: number) => {
  event({
    action: 'calculator_use',
    category: 'engagement',
    value: economia,
  });
};

export const trackPlanSelection = (planName: string, price: number) => {
  event({
    action: 'plan_select',
    category: 'conversion',
    label: planName,
    value: price,
  });
};
```

#### Componente Analytics
```typescript
// components/Analytics.tsx
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export const Analytics: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
};
```

### 4.3 Chatbot Integration

#### Embed ChatGPT
```typescript
// components/ChatbotWidget.tsx
const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-4"
      >
        <ChatIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[600px] overflow-hidden">
          <iframe
            src="https://chatgpt.com/g/g-quepJB90J-saraiva-vision-clinica-oftalmologica"
            className="w-full h-full"
            title="Assistente Saraiva Vision"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};
```

---

## 5. Performance e Otimizações

### 5.1 Next.js Config

#### next.config.ts
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagens
  images: {
    domains: ['saraivavision.com.br'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Otimizações experimentais
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Compressão
  compress: true,
  poweredByHeader: false,

  // Headers para performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 5.2 Otimizações de Imagens

#### Componente OptimizedImage
```typescript
// components/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      />
    </div>
  );
};
```

### 5.3 Code Splitting

#### Carregamento Dinâmico de Componentes
```typescript
// components/DynamicComponents.tsx
import dynamic from 'next/dynamic';

// Carregar componentes pesados apenas quando necessários
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  {
    loading: () => <div>Carregando...</div>,
    ssr: false // Não renderizar no servidor
  }
);

// Carregar componentes só no cliente
const ClientOnlyComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
);
```

### 5.4 Font Optimization

#### next/font
```typescript
// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 6. SEO e Analytics

### 6.1 Meta Tags e Schema Markup

#### Layout SEO
```typescript
// app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Lentes de Contato por Assinatura | Saraiva Vision LAAS',
    template: '%s | Saraiva Vision',
  },
  description: 'Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil. A partir de R$ 180,55/mês com Dr. Philipe Saraiva Cruz CRM-MG 69.870',
  keywords: ['lentes de contato', 'assinatura', 'LAAS', 'Caratinga', 'oftalmologista'],
  authors: [{ name: 'Saraiva Vision Care LTDA' }],
  creator: 'Saraiva Vision Care LTDA',
  publisher: 'Saraiva Vision Care LTDA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saraivavision.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    title: 'Lentes de Contato por Assinatura | Saraiva Vision LAAS',
    description: 'Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil.',
    url: 'https://saraivavision.com.br',
    siteName: 'Saraiva Vision',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saraiva Vision LAAS',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lentes de Contato por Assinatura | Saraiva Vision LAAS',
    description: 'Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

#### Schema Markup
```typescript
// components/SchemaMarkup.tsx
const SchemaMarkup: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Saraiva Vision Care LTDA',
    description: 'Primeiro serviço de assinatura de lentes de contato do Brasil (LAAS)',
    url: 'https://saraivavision.com.br',
    telephone: '+5533998601427',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Catarina Maria Passos, 97',
      addressLocality: 'Caratinga',
      addressRegion: 'MG',
      postalCode: '35300-000',
      addressCountry: 'BR',
    },
    physician: {
      '@type': 'Physician',
      name: 'Dr. Philipe Saraiva Cruz',
      medicalSpecialty: 'Oftalmologia',
      identifier: 'CRM-MG 69.870',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planos LAAS',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Básico Mensal',
          price: '241.50',
          priceCurrency: 'BRL',
          availability: 'InStock',
        },
        // ... outros planos
      ],
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
```

### 6.2 Sitemap e Robots.txt

#### Sitemap Generation
```typescript
// lib/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPlans } from '@/data/plans';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://saraivavision.com.br';
  const plans = await getAllPlans();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const planPages = plans.map((plan) => ({
    url: `${baseUrl}/planos/${plan.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...planPages];
}
```

#### Robots.txt
```typescript
// app/robots.ts/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const baseUrl = 'https://saraivavision.com.br';
  
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
  `.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
```

---

## 7. Compliance e Segurança

### 7.1 LGPD Implementation

#### Cookie Banner
```typescript
// components/compliance/CookieBanner.tsx
const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsent(savedConsent as 'accepted' | 'rejected');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
    
    // Ativar Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          Utilizamos cookies para melhorar sua experiência. 
          <a href="/privacidade" className="underline ml-1">Política de Privacidade</a>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};
```

#### Política de Privacidade
```typescript
// app/privacidade/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      
      <div className="prose max-w-none">
        <h2>Coleta de Dados</h2>
        <p>Coletamos apenas os dados necessários para...</p>
        
        <h2>Uso de Dados</h2>
        <p>Seus dados são utilizados para...</p>
        
        <h2>Compartilhamento de Dados</h2>
        <p>Não compartilhamos seus dados com terceiros...</p>
        
        <h2>Seus Direitos</h2>
        <p>Conforme a LGPD, você tem direito a...</p>
        
        <h2>Cookies</h2>
        <p>Utilizamos cookies para melhorar sua experiência...</p>
        
        <h2>Contato</h2>
        <p>Para exercer seus direitos, entre em contato...</p>
      </div>
    </div>
  );
}
```

### 7.2 CFM Compliance

#### Medical Disclaimer
```typescript
// components/compliance/MedicalDisclaimer.tsx
const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <MedicalIcon className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700">
            <strong className="font-semibold">Responsável Técnico:</strong>{' '}
            Dr. Philipe Saraiva Cruz - CRM-MG 69.870
            <br />
            <strong className="font-semibold">Aviso Legal:</strong>{' '}
            Consulte riscos e benefícios com seu oftalmologista. 
            Os resultados podem variar de acordo com características individuais.
          </p>
        </div>
      </div>
    </div>
  );
};
```

#### CRM Badge Component
```typescript
// components/compliance/CRMBadge.tsx
const CRMBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
      <MedicalIcon className="w-4 h-4" />
      <span>MÉDICO</span>
      <span className="font-semibold">Dr. Philipe Saraiva Cruz</span>
      <span>CRM-MG 69.870</span>
    </div>
  );
};
```

---

## 8. Testing e QA

### 8.1 Estratégia de Testes

#### Testes Unitários com Jest
```typescript
// __tests__/components/Calculator.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorSection } from '@/components/sections/CalculatorSection';

describe('CalculatorSection', () => {
  it('should render calculator form', () => {
    render(<CalculatorSection />);
    
    expect(screen.getByLabelText('Quanto você gasta hoje por ano?')).toBeInTheDocument();
    expect(screen.getByText('Calcular Economia')).toBeInTheDocument();
  });

  it('should calculate economy correctly', () => {
    render(<CalculatorSection />);
    
    const input = screen.getByLabelText('Quanto você gasta hoje por ano?');
    const button = screen.getByText('Calcular Economia');
    
    fireEvent.change(input, { target: { value: '5000' } });
    fireEvent.click(button);
    
    expect(screen.getByText(/Sua economia:/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 2.250/)).toBeInTheDocument();
  });
});
```

#### Testes de Componentes
```typescript
// __tests__/components/WhatsAppButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

// Mock do window.open
global.open = jest.fn();

describe('WhatsAppButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should open WhatsApp with correct message', () => {
    render(<WhatsAppButton section="hero" />);
    
    const button = screen.getByText('Falar no WhatsApp Agora');
    fireEvent.click(button);
    
    expect(global.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/5533998601427'),
      '_blank'
    );
  });

  it('should track analytics event', () => {
    const mockTrack = jest.fn();
    jest.mock('@/lib/analytics', () => ({
      trackWhatsAppClick: mockTrack,
    }));
    
    render(<WhatsAppButton section="hero" />);
    
    const button = screen.getByText('Falar no WhatsApp Agora');
    fireEvent.click(button);
    
    expect(mockTrack).toHaveBeenCalledWith('hero');
  });
});
```

### 8.2 Testes E2E com Playwright

#### Configuração
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});
```

#### Teste E2E Example
```typescript
// e2e/calculator.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Calculator', () => {
  test('should calculate economy correctly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to calculator
    await page.getByText('Calcule Sua Economia Real').scrollIntoViewIfNeeded();
    
    // Fill form
    await page.fill('input[placeholder*="gasta hoje"]', '5000');
    await page.selectOption('select', 'esferica');
    
    // Click calculate
    await page.click('button:has-text("Calcular Economia")');
    
    // Verify result
    await expect(page.locator('text=Sua economia:')).toBeVisible();
    await expect(page.locator('text=R$ 2.250/ano')).toBeVisible();
  });

  test('should open WhatsApp with calculated value', async ({ page }) => {
    await page.goto('/');
    
    // Complete calculator
    await page.fill('input[placeholder*="gasta hoje"]', '3000');
    await page.click('button:has-text("Calcular Economia")');
    
    // Click WhatsApp CTA
    await page.click('button:has-text("Falar no WhatsApp")');
    
    // Verify WhatsApp opened
    await expect(page).toHaveURL(/wa\.me/);
  });
});
```

---

## 9. Deploy e Infraestrutura

### 9.1 Vercel Configuration

#### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/saraiva-vision-laas/$1"
    }
  ],
  "env": {
    "NEXT_PUBLIC_GA_ID": "@ga_id",
    "NEXT_PUBLIC_WHATSAPP_NUMBER": "@whatsapp_number"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_GA_ID": "@ga_id",
      "NEXT_PUBLIC_WHATSAPP_NUMBER": "@whatsapp_number"
    }
  }
}
```

#### Environment Variables
```bash
# .env.production
NEXT_PUBLIC_GA_ID=G-MEASUREMENT_ID
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID
NEXT_PUBLIC_WHATSAPP_NUMBER=5533998601427
NEXT_PUBLIC_SITE_URL=https://saraivavision.com.br
```

### 9.2 CI/CD com GitHub Actions

#### .github/workflows/deploy.yml
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_GA_ID: ${{ secrets.NEXT_PUBLIC_GA_ID }}
          NEXT_PUBLIC_WHATSAPP_NUMBER: ${{ secrets.NEXT_PUBLIC_WHATSAPP_NUMBER }}
      
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 9.3 Monitoring e Error Tracking

#### Sentry Integration
```typescript
// lib/sentry.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});

export const captureError = (error: Error, context?: any) => {
  Sentry.captureException(error, {
    extra: context,
  });
};
```

#### Error Boundary Component
```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    captureError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo deu errado</h1>
            <p className="text-gray-600 mb-6">
              Estamos trabalhando para resolver o problema.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 10. Manutenção e Monitoramento

### 10.1 Health Checks

#### Health Check Endpoint
```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check database connection if applicable
    // Check external services
    // Check environment variables
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      uptime: process.uptime(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
```

### 10.2 Performance Monitoring

#### Web Vitals Tracking
```typescript
// lib/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(metric: any) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom monitoring service
  if (metric.value > (metric.name === 'CLS' ? 0.1 : metric.name === 'FID' ? 100 : 2500)) {
    console.warn(`Poor ${metric.name}:`, metric);
  }
}

// Initialize in app/layout.tsx
if (typeof window !== 'undefined') {
  getCLS(reportWebVitals);
  getFID(reportWebVitals);
  getFCP(reportWebVitals);
  getLCP(reportWebVitals);
  getTTFB(reportWebVitals);
}
```

### 10.3 Backup e Recovery

#### Database Backup Strategy (se aplicável)
```yaml
# backup-strategy.yaml
schedule:
  - frequency: daily
    time: "02:00"
    retention: 30 days
  
  - frequency: weekly
    time: "02:00"
    retention: 12 weeks
    
  - frequency: monthly
    time: "02:00"
    retention: 12 months

encryption:
  enabled: true
  algorithm: AES-256

storage:
  primary: s3
  secondary: local
  
monitoring:
  success_notifications: true
  failure_alerts: true
  retention_check: true
```

### 10.4 Documentation Updates

#### Automated Documentation
```typescript
// scripts/generate-docs.ts
import { generateComponentDocs } from './utils/component-docs';
import { generateApiDocs } from './utils/api-docs';

async function generateDocumentation() {
  try {
    // Generate component documentation
    await generateComponentDocs('./src/components');
    
    // Generate API documentation
    await generateApiDocs('./src/app/api');
    
    // Update README with latest stats
    await updateReadme();
    
    console.log('Documentation generated successfully');
  } catch (error) {
    console.error('Error generating documentation:', error);
    process.exit(1);
  }
}

generateDocumentation();
```

---

Esta documentação técnica serve como referência completa para desenvolvedores, mantenedores e equipes de DevOps, garantindo a continuidade e qualidade do projeto Saraiva Vision LAAS.
