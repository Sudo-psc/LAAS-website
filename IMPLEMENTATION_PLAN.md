# IMPLEMENTATION PLAN - Saraiva Vision LAAS Landing Page

**Version:** 1.0
**Created:** October 1, 2025
**Project:** Landing Page for Lens-as-a-Service (LAAS)
**Status:** Planning Phase

---

## EXECUTIVE SUMMARY

### Project Overview
Development of a high-converting landing page for Saraiva Vision Care LTDA's innovative Lens-as-a-Service (LAAS) subscription model - the first of its kind in Brazil.

### Key Objectives
- **Primary Goal:** Achieve 8% conversion rate via WhatsApp
- **Performance Target:** Lighthouse score >90, LCP <2.5s
- **Compliance:** Full CFM/CRM and LGPD compliance
- **Timeline:** 18 working days (3 sprints)

### Success Metrics
- WhatsApp conversion rate: 8%
- Time on page: >2 minutes
- Bounce rate: <45%
- Calculator engagement: 30% of visitors

---

## PHASE 1: RESEARCH & DISCOVERY ✅

### 1.1 Market Analysis (Completed)
- **Finding:** First LAAS service in Brazil - high novelty factor
- **Target Audience:** Contact lens users spending R$3,500-5,280/year
- **Key Pain Point:** High annual costs (R$5,280) vs LAAS (R$1,950-2,167)
- **Competitive Advantage:** 45-70% cost savings + telemedicine included

### 1.2 User Journey Mapping
```
Entry → Hero (15 sec) → Calculator (45 sec) → Plans (90 sec) → WhatsApp (conversion)
                ↓
Alternative: Hero → Plans → FAQ → WhatsApp (conversion)
```

### 1.3 Technical Requirements
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **State:** Zustand for calculator state
- **Forms:** React Hook Form + Zod validation
- **Analytics:** GA4 + Meta Pixel
- **Hosting:** Vercel (recommended)

---

## PHASE 2: TECHNICAL ARCHITECTURE

### 2.1 System Architecture

```
┌─────────────────────────────────────────────────────┐
│                  USER INTERFACE                     │
│  Next.js 14 SSG + React Components + Tailwind CSS  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────┴──────────────────────────────────┐
│              APPLICATION LAYER                      │
│  • State Management (Zustand)                       │
│  • Analytics Tracking (GA4, Meta Pixel)             │
│  • Form Validation (React Hook Form + Zod)          │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────┴──────────────────────────────────┐
│            EXTERNAL INTEGRATIONS                    │
│  • WhatsApp Business API (wa.me/5533998601427)      │
│  • ChatGPT Custom GPT (iframe embed)                │
│  • Google Analytics 4                               │
│  • Meta Pixel                                       │
│  • Hotjar (optional)                                │
└─────────────────────────────────────────────────────┘
```

### 2.2 Data Models

#### Plan Model
```typescript
interface Plan {
  id: string;
  name: string;
  type: 'esferica' | 'torica' | 'multifocal' | 'rgp' | 'escleral';
  frequency: 'mensal' | 'anual';
  priceMonthly: number;
  priceAnnual: number;
  discount: number; // percentage
  features: string[];
  targetConditions?: string[];
  popular?: boolean;
  bestValue?: boolean;
  medicalComplexity?: 'basic' | 'moderate' | 'complex';
}

// 8 Plans Data
const plans: Plan[] = [
  {
    id: 'basico-mensal',
    name: 'Básico Mensal',
    type: 'esferica',
    frequency: 'mensal',
    priceMonthly: 241.50,
    priceAnnual: 2898,
    discount: 45,
    features: [
      'Lentes esféricas mensais',
      'Reposição a cada 6 meses',
      'Telemedicina incluída',
      'Frete grátis'
    ],
    popular: true
  },
  // ... remaining 7 plans
];
```

#### Calculator Input/Output
```typescript
interface CalculatorInput {
  currentAnnualCost: number;
  lensType: 'esferica' | 'torica' | 'multifocal' | 'rgp';
  usageFrequency: 'diario' | 'ocasional' | 'intensivo';
  currentBrand?: string;
}

interface CalculatorOutput {
  recommendedPlan: Plan;
  annualSavings: number;
  percentageSavings: number;
  laasAnnualCost: number;
  bonusFeatures: string[];
}
```

#### Add-on Model
```typescript
interface Addon {
  id: string;
  name: string;
  type: 'subscription' | 'on-demand';
  priceMonthly?: number;
  pricePerUse?: number;
  description: string;
  category: 'consulta' | 'urgencia' | 'preferencial' | 'extra';
}

const addons: Addon[] = [
  {
    id: 'consulta-semestral',
    name: 'Consulta Semestral',
    type: 'subscription',
    priceMonthly: 12,
    description: 'Check-up e ajustes regulares a cada 6 meses',
    category: 'consulta'
  },
  // ... remaining add-ons
];
```

### 2.3 Component Architecture

```
src/
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles + Tailwind
│   └── api/                     # API routes (if needed)
│
├── components/
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # ⭐ PRIORITY 1
│   │   ├── ProblemSolution.tsx  # Problem/solution comparison
│   │   ├── PlansGrid.tsx        # ⭐ PRIORITY 1
│   │   ├── HowItWorks.tsx       # 4-step timeline
│   │   ├── Differentials.tsx    # Unique selling points
│   │   ├── FAQ.tsx              # Accordion FAQ (15 questions)
│   │   └── ContactFooter.tsx    # ⭐ PRIORITY 1
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Primary/Secondary CTAs
│   │   ├── Card.tsx             # Plan cards
│   │   ├── Badge.tsx            # Badges (ANVISA, Primeiro BR)
│   │   ├── Input.tsx            # Form inputs
│   │   └── Select.tsx           # Dropdowns
│   │
│   ├── features/                # Feature components
│   │   ├── Calculator.tsx       # ⭐ PRIORITY 1 - Economy calculator
│   │   ├── PlanComparator.tsx   # Plan filter/comparison
│   │   ├── AddonCalculator.tsx  # Add-on total calculator
│   │   └── WhatsAppButton.tsx   # Contextual WhatsApp CTA
│   │
│   └── compliance/              # ⭐ MANDATORY
│       ├── CookieBanner.tsx     # LGPD cookie consent
│       └── MedicalDisclaimer.tsx # CFM compliance
│
├── lib/
│   ├── analytics.ts             # GA4 + Meta Pixel tracking
│   ├── whatsapp.ts              # WhatsApp URL generation
│   ├── calculator.ts            # Economy calculation logic
│   └── schemas.ts               # Zod validation schemas
│
├── data/
│   ├── plans.ts                 # 8 subscription plans
│   ├── addons.ts                # Add-on services
│   └── faq.ts                   # FAQ data (15 questions)
│
├── types/
│   └── index.ts                 # TypeScript interfaces
│
└── styles/
    └── theme.css                # Design system tokens
```

---

## PHASE 3: API CONTRACTS & INTEGRATION SPECS

### 3.1 WhatsApp Integration

#### URL Generation
```typescript
// lib/whatsapp.ts
interface WhatsAppContext {
  section: 'hero' | 'planos' | 'economia' | 'duvidas' | 'addons';
  planId?: string;
  calculatedSavings?: number;
  customMessage?: string;
}

export function generateWhatsAppURL(context: WhatsAppContext): string {
  const phone = '5533998601427';
  const baseURL = `https://wa.me/${phone}`;

  const messages = {
    hero: 'Olá! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.',
    planos: `Oi! Estou interessado no plano ${context.planId}. Quando posso agendar uma consulta?`,
    economia: `Olá! Calculei uma economia de R$ ${context.calculatedSavings}/ano com o LAAS. Quero agendar uma avaliação.`,
    duvidas: 'Olá! Tenho algumas dúvidas sobre o serviço LAAS. Pode me ajudar?',
    addons: 'Oi! Quero montar um plano personalizado com add-ons. Pode me ajudar?'
  };

  const message = context.customMessage || messages[context.section];
  return `${baseURL}?text=${encodeURIComponent(message)}`;
}
```

### 3.2 Analytics Events

```typescript
// lib/analytics.ts
export interface AnalyticsEvent {
  event: string;
  category: string;
  label: string;
  value?: number;
  [key: string]: any;
}

// Key Events to Track
export const EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  CALCULATOR_USE: 'calculator_use',
  PLAN_SELECT: 'plan_select',
  ADDON_ADD: 'addon_add',
  FAQ_EXPAND: 'faq_expand',
  FORM_SUBMIT: 'form_submit',
  PAGE_SCROLL_75: 'scroll_75_percent'
};

export function trackEvent(event: AnalyticsEvent): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', event.event, event);
  }
}
```

### 3.3 Form Validation Schemas

```typescript
// lib/schemas.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  telefone: z.string()
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato: (33) 99860-1427'),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  tipoLente: z.enum(['nao-uso', 'esfericas', 'toricas', 'multifocais', 'rgp']),
  horarioPreferencial: z.enum(['manha', 'tarde', 'sabado']).optional(),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: 'Você deve concordar com a Política de Privacidade' })
  }),
  whatsappContato: z.boolean().default(true),
  newsletter: z.boolean().default(false)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const calculatorSchema = z.object({
  gastoAtual: z.number()
    .min(1000, 'Valor mínimo: R$ 1.000')
    .max(10000, 'Valor máximo: R$ 10.000'),
  tipoLente: z.enum(['esferica', 'torica', 'multifocal', 'rgp']),
  frequenciaUso: z.enum(['diario', 'ocasional', 'intensivo']).optional(),
  marcaAtual: z.string().optional()
});

export type CalculatorData = z.infer<typeof calculatorSchema>;
```

---

## PHASE 4: QUICKSTART GUIDE

### 4.1 Development Setup

```bash
# 1. Initialize Next.js project
npx create-next-app@latest saraiva-vision-laas \
  --typescript \
  --tailwind \
  --app \
  --import-alias "@/*"

cd saraiva-vision-laas

# 2. Install dependencies
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod zustand

# 3. Install dev dependencies
npm install -D @types/node @types/react @types/react-dom

# 4. Create directory structure
mkdir -p src/{components/{sections,ui,features,compliance},lib,data,types,styles}

# 5. Setup environment variables
cat > .env.local << EOF
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_PHONE=5533998601427
EOF

# 6. Start development server
npm run dev
```

### 4.2 Configuration Files

#### next.config.js
```javascript
/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
```

#### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          primario: '#00C851',
          hover: '#00A043',
          light: '#E8F5E8',
        },
        azul: {
          medico: '#2E7D32',
          claro: '#E3F2FD',
        },
        laranja: {
          economia: '#FF6F00',
        },
        cinza: {
          dark: '#263238',
          medio: '#607D8B',
          claro: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

### 4.3 MVP Implementation Order

**Sprint 1 (Days 1-5): Foundation + Priority 1**
1. ✅ Setup project structure
2. ✅ Configure Tailwind + design tokens
3. 🔨 HeroSection with economy headline
4. 🔨 Basic Calculator component
5. 🔨 PlansGrid with 8 plans
6. 🔨 WhatsApp integration
7. ✅ LGPD CookieBanner
8. ✅ CFM MedicalDisclaimer

**Sprint 2 (Days 6-10): Complete MVP**
1. 🔨 ProblemSolution section
2. 🔨 ContactFooter with compliance
3. 🔨 Mobile responsive all sections
4. 🔨 GA4 + Meta Pixel tracking
5. 🔨 Form validation
6. 🧪 Cross-browser testing
7. ⚡ Performance optimization
8. 🚀 Deploy to Vercel

**Sprint 3 (Days 11-15): Nice-to-Have**
1. 🔨 HowItWorks timeline
2. 🔨 Differentials grid
3. 🔨 FAQ accordion
4. 🔨 PlanComparator with filters
5. 🔨 AddonCalculator
6. 🎨 Framer Motion animations
7. 🤖 Chatbot embed
8. 📊 Hotjar integration

---

## PHASE 5: TASKS BREAKDOWN

### 5.1 Priority 1 Tasks (MVP - Week 1-2)

#### Task 1.1: Project Setup
- **Effort:** 4 hours
- **Dependencies:** None
- **Acceptance Criteria:**
  - Next.js 14 project initialized
  - TypeScript configured
  - Tailwind CSS working
  - Folder structure created
  - Environment variables set

#### Task 1.2: Design System Implementation
- **Effort:** 6 hours
- **Dependencies:** Task 1.1
- **Deliverables:**
  - Color palette CSS variables
  - Typography scale
  - Button components (Primary/Secondary)
  - Card component base
- **Acceptance Criteria:**
  - All design tokens defined
  - Reusable components documented

#### Task 1.3: Hero Section
- **Effort:** 8 hours
- **Dependencies:** Task 1.2
- **Components:**
  - Headline + subheadline
  - Dr. Philipe badge
  - WhatsApp CTA
  - Visual side (image/illustration)
- **Acceptance Criteria:**
  - Mobile-first responsive
  - WhatsApp link functional
  - Performance: LCP < 2.5s

#### Task 1.4: Calculator Component
- **Effort:** 12 hours
- **Dependencies:** Task 1.2
- **Logic:**
  - Input validation (Zod)
  - Plan recommendation algorithm
  - Savings calculation
  - Result display
- **Acceptance Criteria:**
  - Accurate calculations
  - Error handling
  - Analytics tracking

#### Task 1.5: Plans Grid
- **Effort:** 10 hours
- **Dependencies:** Task 1.2
- **Components:**
  - 8 plan cards
  - Responsive grid (4x2 → 2x4 → 1x8)
  - Popular/Best Value badges
  - WhatsApp CTAs per plan
- **Acceptance Criteria:**
  - All 8 plans displayed
  - Prices correct
  - Mobile UX optimal

#### Task 1.6: Compliance Components
- **Effort:** 6 hours
- **Dependencies:** None (parallel)
- **Components:**
  - LGPD Cookie Banner
  - Medical Disclaimer (CFM)
  - Privacy Policy page
- **Acceptance Criteria:**
  - LGPD compliant
  - CFM requirements met
  - LocalStorage consent tracking

#### Task 1.7: Analytics Integration
- **Effort:** 4 hours
- **Dependencies:** Task 1.1
- **Setup:**
  - Google Analytics 4
  - Meta Pixel
  - Event tracking utility
- **Acceptance Criteria:**
  - All key events tracked
  - Conversion tracking works
  - Privacy-compliant tracking

#### Task 1.8: Mobile Optimization
- **Effort:** 8 hours
- **Dependencies:** Tasks 1.3-1.5
- **Work:**
  - Test all breakpoints
  - Touch target optimization
  - Mobile performance tuning
- **Acceptance Criteria:**
  - 100% mobile functional
  - Touch targets ≥44x44px
  - Mobile Lighthouse >85

### 5.2 Priority 2 Tasks (Nice-to-Have - Week 3)

#### Task 2.1: How It Works Timeline
- **Effort:** 6 hours
- **Components:** 4-step process visualization

#### Task 2.2: Differentials Section
- **Effort:** 6 hours
- **Components:** 6 USP cards with icons

#### Task 2.3: FAQ Accordion
- **Effort:** 8 hours
- **Components:** 15 Q&A with search/filter

#### Task 2.4: Plan Comparator
- **Effort:** 12 hours
- **Features:** Filter by type, price range, features

#### Task 2.5: Add-on Calculator
- **Effort:** 10 hours
- **Features:** Multi-select add-ons, total calculation

#### Task 2.6: Animations
- **Effort:** 6 hours
- **Library:** Framer Motion
- **Animations:** Scroll reveals, hover effects

#### Task 2.7: Chatbot Integration
- **Effort:** 4 hours
- **Integration:** ChatGPT iframe embed

### 5.3 Priority 3 Tasks (Post-Launch - Week 4+)

#### Task 3.1: A/B Testing Setup
- **Effort:** 6 hours
- **Tool:** Google Optimize
- **Tests:** Headlines, CTAs, pricing display

#### Task 3.2: Performance Optimization
- **Effort:** 8 hours
- **Work:** Image optimization, code splitting, font preloading

#### Task 3.3: SEO Enhancement
- **Effort:** 6 hours
- **Work:** Schema markup, meta tags, sitemap

---

## PHASE 6: DEFINITION OF DONE

### 6.1 MVP Ready Checklist

**Functionality:**
- [ ] Hero displays economy (R$ 5,280 → R$ 1,950)
- [ ] Calculator returns accurate savings
- [ ] All 8 plans visible with correct prices
- [ ] WhatsApp links work: wa.me/5533998601427
- [ ] Mobile 100% functional
- [ ] All CTAs functional

**Compliance:**
- [ ] "Dr. Philipe Saraiva Cruz - CRM-MG 69.870" visible
- [ ] "Consulte riscos e benefícios" disclaimer
- [ ] LGPD cookie banner with opt-in/out
- [ ] Privacy policy accessible
- [ ] Terms of service accessible

**Performance:**
- [ ] Lighthouse Score >85 (mobile)
- [ ] LCP <3s (mobile)
- [ ] All images optimized (WebP/AVIF)
- [ ] CSS critical inline
- [ ] JavaScript lazy-loaded

**Analytics:**
- [ ] GA4 tracking configured
- [ ] Meta Pixel tracking configured
- [ ] Conversion events tracked
- [ ] Error tracking (Sentry optional)

### 6.2 Launch Metrics (Week 1 Post-Launch)

**Target Metrics:**
- Conversion rate: >5% (target: 8%)
- Time on page: >1.5 min (target: 2 min)
- Bounce rate: <50% (target: <45%)
- Calculator usage: >20% (target: 30%)
- WhatsApp conversions: >80% of total

**Monitoring:**
- [ ] GA4 dashboard configured
- [ ] Real User Monitoring (RUM) active
- [ ] Error tracking operational
- [ ] Performance monitoring active

---

## PHASE 7: RISK MANAGEMENT

### 7.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance issues on mobile | Medium | High | Early performance testing, image optimization |
| WhatsApp link issues | Low | High | Thorough testing across devices/browsers |
| Calculator accuracy bugs | Medium | Medium | Unit tests, manual QA with real scenarios |
| LGPD compliance gaps | Low | Critical | Legal review before launch |
| Analytics tracking failures | Medium | Medium | Testing in production-like environment |

### 7.2 Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low conversion rate (<5%) | Medium | High | A/B testing, user feedback, UX improvements |
| High bounce rate (>50%) | Medium | Medium | Performance optimization, compelling copy |
| Low calculator usage (<20%) | Medium | Medium | Better CTA placement, value proposition |
| Mobile UX issues | Low | High | Extensive mobile testing, user testing |
| Compliance violations | Low | Critical | Legal review, medical content verification |

---

## PHASE 8: SUCCESS CRITERIA

### 8.1 Technical Success

✅ **Code Quality**
- TypeScript: Zero errors
- ESLint: Zero warnings
- Test coverage: >70% (critical paths)
- Lighthouse Score: >90 (desktop), >85 (mobile)

✅ **Performance**
- LCP: <2.5s (mobile)
- FID: <100ms
- CLS: <0.1
- TTFB: <800ms

✅ **Functionality**
- All features working as specified
- Cross-browser compatibility (Chrome, Safari, Firefox)
- Mobile responsive (iOS, Android)

### 8.2 Business Success

✅ **Week 1 Post-Launch**
- Conversion rate: >5%
- Time on page: >1.5 min
- Bounce rate: <50%
- Calculator usage: >20%

✅ **Week 4 Post-Launch**
- Conversion rate: >7%
- WhatsApp conversions: >80%
- Time on page: >2 min
- Bounce rate: <45%

✅ **Month 3 Post-Launch**
- Conversion rate: 8%+
- 100+ leads via WhatsApp
- Performance maintained
- Zero critical bugs

---

## NEXT STEPS

1. **Immediate Actions:**
   - [ ] Review and approve this implementation plan
   - [ ] Confirm resource availability
   - [ ] Setup development environment
   - [ ] Begin Sprint 1 (Task 1.1)

2. **Pre-Development:**
   - [ ] Finalize all copy/content
   - [ ] Prepare images/assets
   - [ ] Setup hosting (Vercel account)
   - [ ] Configure domain DNS

3. **Development Start:**
   - [ ] Kickoff meeting with team
   - [ ] Setup project tracking (Jira/Linear)
   - [ ] Daily standups schedule
   - [ ] Sprint planning session

---

**Document Status:** Ready for Implementation
**Last Updated:** October 1, 2025
**Next Review:** Sprint 1 Completion (Day 5)
