# Saraiva Vision LAAS - Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Primeiro serviço de assinatura de lentes de contato do Brasil - Lens-as-a-Service (LAAS)**

Uma landing page moderna e responsiva para a Saraiva Vision Care LTDA, pioneira no modelo LAAS no Brasil, focada em conversão via WhatsApp e educação do mercado sobre lentes de contato por assinatura.

## 🎯 Sobre o Projeto

A Saraiva Vision Care LTDA é pioneira no Brasil em oferecer **Lens-as-a-Service** (LAAS), um modelo inovador de assinatura integrada de lentes de contato. Esta landing page foi desenvolvida com foco principal em:

- **Captura de leads qualificados** através de WhatsApp (canal prioritário)
- **Apresentação clara** dos 8 planos de assinatura disponíveis
- **Educação do mercado** sobre o modelo LAAS
- **Compliance total** com regulamentações médicas (CFM/CRM) e LGPD

### 🚀 Principais Features

- **Hero Section** com proposta de valor clara e CTA WhatsApp prioritário
- **Calculadora de Economia** interativa para demonstrar benefícios
- **Grid de 8 Planos** responsivo com preços mensais e anuais
- **Comparador Visual** entre modelo tradicional vs LAAS
- **Integração WhatsApp** com links contextuais por seção
- **Compliance CFM/LGPD** com disclaimers médicos obrigatórios
- **Performance Otimizada** com Lighthouse Score > 90

## 🛠️ Stack Tecnológica

### Frontend

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS Modules
- **Componentes**: React Components funcionais
- **Estado**: [Zustand](https://zustand.docs.pmnd.rs/) (para calculadoras)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/) + custom SVGs

### Performance & SEO

- **Rendering**: Static Site Generation (SSG)
- **Images**: Next.js Image Optimization
- **Fonts**: Google Fonts com preload
- **Analytics**: Google Analytics 4 + Meta Pixel
- **Lighthouse**: Score mínimo 90 em todas as métricas

## 📁 Estrutura do Projeto

```
saraiva-vision-laas/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage principal
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Estilos globais
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   # Seção hero principal
│   │   │   ├── ProblemSolutionSection.tsx  # Comparação de custos
│   │   │   ├── PlansSection.tsx  # Grid de planos
│   │   │   ├── CalculatorSection.tsx       # Calculadora de economia
│   │   │   └── Footer.tsx        # Footer com informações
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Botões reutilizáveis
│   │   │   └── Card.tsx          # Cards de plano
│   │   └── compliance/
│   │       ├── CookieBanner.tsx  # Banner LGPD
│   │       └── MedicalDisclaimer.tsx  # Disclaimer CFM
│   ├── data/
│   │   ├── plans.ts              # Dados dos 8 planos
│   │   └── compliance.ts         # Dados de compliance
│   ├── lib/
│   │   ├── utils.ts              # Utilitários gerais
│   │   ├── analytics.ts          # Google Analytics
│   │   └── whatsapp.ts           # Geração de URLs WhatsApp
│   └── types/
│       └── index.ts              # Tipos TypeScript
├── public/
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Sudo-psc/LAAS-website.git
cd LAAS-website/saraiva-vision-laas

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento com Turbopack

# Build
npm run build        # Build para produção com Turbopack
npm run start        # Inicia servidor de produção

# Linting (se configurado)
npm run lint         # Executa ESLint
```

## 📊 Planos de Assinatura

O projeto oferece 8 planos de assinatura para diferentes necessidades:

### Planos Mensais
- **Básico Mensal**: R$ 241,50/mês (R$ 2.608,20 à vista)
- **Premium Mensal**: R$ 317,40/mês (R$ 3.427,92 à vista)
- **Elite Mensal**: R$ 408,25/mês (R$ 4.409,10 à vista)

### Planos Anuais
- **Conforto Anual**: R$ 180,55/mês (R$ 1.949,94 à vista) ⭐ MAIOR ECONOMIA
- **Visão HD Anual**: R$ 271,40/mês (R$ 2.931,12 à vista)

### Planos Especializados
- **Premium RGP**: R$ 499,10/mês (R$ 5.390,28 à vista)
- **Tórica RGP**: R$ 650,90/mês (R$ 7.029,72 à vista)
- **Escleral Premium**: R$ 909,65/mês (R$ 9.824,22 à vista)

## 🎨 Design System

### Cores

```css
:root {
  /* Verde Saúde - Cor principal */
  --verde-primario: #00C851;
  --verde-hover: #00A043;
  --verde-light: #E8F5E8;
  
  /* Azul Confiança */
  --azul-medico: #2E7D32;
  --azul-claro: #E3F2FD;
  
  /* Laranja Economia */
  --laranja-economia: #FF6F00;
}
```

### Tipografia

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Monospace**: SF Mono / Monaco (para preços)

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (opcional)
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX

# Contato (opcional para sobrescrever padrões)
NEXT_PUBLIC_WHATSAPP_NUMBER=5533998601427
```

### Configuração do Next.js

```typescript
// next.config.ts
const nextConfig = {
  images: {
    domains: ['saraivavision.com.br'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com abordagem mobile-first:

- **Mobile**: 320px - 767px (layout empilhado)
- **Tablet**: 768px - 1023px (grid 2 colunas)
- **Desktop**: 1024px+ (grid 4 colunas para planos)

## 🎯 Performance

### Métricas Alvo

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 800ms
- **Lighthouse Score**: > 90

### Otimizações Implementadas

- Imagens otimizadas em WebP/AVIF
- Lazy loading para imagens
- CSS crítico inline
- JavaScript code splitting
- Font preloading
- CDN via Vercel

## 📋 Compliance

### CFM (Conselho Federal de Medicina)

- ✅ Nome "Dr. Philipe Saraiva Cruz" presente
- ✅ CRM "CRM-MG 69.870" acompanha o nome
- ✅ Palavra "MÉDICO" presente junto ao CRM
- ✅ Especialidade "Oftalmologista" mencionada
- ✅ Disclaimer "Consulte riscos e benefícios com seu oftalmologista"

### LGPD (Lei Geral de Proteção de Dados)

- ✅ Banner de cookies com opt-in/out
- ✅ Política de privacidade acessível
- ✅ Consentimento explícito para contato
- ✅ Dados mínimos necessários apenas
- ✅ Google Analytics com consent mode

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

```bash
# Build para produção
npm run build

# Deploy na Vercel (CLI instalada)
vercel --prod
```

### Variáveis de Ambiente na Vercel

Configure as seguintes environment variables no dashboard da Vercel:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## 📈 Analytics

### Eventos Rastreados

```javascript
// Eventos principais
gtag('event', 'whatsapp_click', { section: 'hero' });
gtag('event', 'calculator_use', { savings: 1500 });
gtag('event', 'plan_select', { plan_name: 'Básico Mensal' });
gtag('event', 'form_submit', { type: 'pre-agendamento' });
```

### Métricas de Sucesso

- **Taxa de conversão**: Meta 8%
- **Conversões via WhatsApp**: 60% do total
- **Tempo na página**: Mínimo 2 minutos
- **Taxa de rejeição**: Máximo 45%
- **Uso da calculadora**: 30% dos visitantes

## 🤝 Contribuição

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Saraiva Vision Care LTDA**
- **WhatsApp**: (33) 99860-1427
- **Email**: saraivavision@gmail.com
- **Site**: saraivavision.com.br
- **Instagram**: @saraiva_vision

**Responsável Técnico**
- **Dr. Philipe Saraiva Cruz**
- **CRM-MG**: 69.870
- **Especialidade**: Oftalmologista

---

**Desenvolvido com ❤️ para a Saraiva Vision Care LTDA - Pioneira em Lens-as-a-Service no Brasil**
