prd.md
# DOCUMENTO DE REQUISITOS (PRD) - SARAIVA VISION LANDING PAGE
## Product Requirements Document - Complemento ao SDD

**VersÃ£o:** 1.0  
**Data:** 01 de outubro de 2025  
**Projeto:** Landing Page LAAS Saraiva Vision  

---

## 1. ESPECIFICAÃ‡Ã•ES TÃ‰CNICAS COMPLETAS

### 1.1 Stack TecnolÃ³gico Final

**Frontend:**
```json
{
  "framework": "Next.js 14+ (App Router)",
  "linguagem": "TypeScript",
  "styling": "Tailwind CSS + CSS Modules",
  "componentes": "React Components funcionais",
  "estado": "Zustand para calculadoras",
  "formularios": "React Hook Form + Zod",
  "animacoes": "Framer Motion",
  "icons": "Lucide React + custom SVGs"
}
```

**Performance & SEO:**
```json
{
  "rendering": "Static Site Generation (SSG)",
  "images": "Next.js Image Optimization",
  "fonts": "Google Fonts com preload",
  "analytics": "Google Analytics 4 + Meta Pixel",
  "lighthouse": "Score mÃ­nimo 90 em todas as mÃ©tricas"
}
```

### 1.2 Requisitos de Performance

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTFB (Time to First Byte):** < 800ms

**OtimizaÃ§Ãµes ObrigatÃ³rias:**
```javascript
// next.config.js
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

### 1.3 Schema Markup (SEO)

**Dados Estruturados ObrigatÃ³rios:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Saraiva Vision Care LTDA",
  "description": "Primeiro serviÃ§o de assinatura de lentes de contato do Brasil (LAAS)",
  "url": "https://saraivavision.com.br",
  "telephone": "+5533998601427",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Catarina Maria Passos, 97",
    "addressLocality": "Caratinga",
    "addressRegion": "MG",
    "postalCode": "35300-000",
    "addressCountry": "BR"
  },
  "physician": {
    "@type": "Physician",
    "name": "Dr. Philipe Saraiva Cruz",
    "medicalSpecialty": "Oftalmologia",
    "identifier": "CRM-MG 69.870"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planos LAAS",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "BÃ¡sico Mensal",
        "price": "241.50",
        "priceCurrency": "BRL",
        "availability": "InStock"
      }
    ]
  }
}
```

---

## 2. INTEGRAÃ‡Ã•ES CRÃTICAS

### 2.1 WhatsApp Business API

**ImplementaÃ§Ã£o de Links Contextuais:**
```typescript
// utils/whatsapp.ts
interface WhatsAppMessage {
  section: 'hero' | 'planos' | 'economia' | 'duvidas';
  planoId?: string;
  valorCalculado?: number;
}

export const generateWhatsAppURL = ({
  section,
  planoId,
  valorCalculado
}: WhatsAppMessage): string => {
  const baseURL = 'https://wa.me/5533998601427';
  
  const messages = {
    hero: 'OlÃ¡! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.',
    planos: `Oi! Estou interessado no plano ${planoId}. Quando posso agendar uma consulta?`,
    economia: `OlÃ¡! Calculei uma economia de R$ ${valorCalculado}/ano. Quero agendar uma avaliaÃ§Ã£o.`,
    duvidas: 'OlÃ¡! Tenho algumas dÃºvidas sobre o serviÃ§o LAAS. Pode me ajudar?'
  };
  
  return `${baseURL}?text=${encodeURIComponent(messages[section])}`;
};
```

### 2.2 Analytics e Tracking

**Google Analytics 4 Events:**
```typescript
// utils/analytics.ts
export const trackEvent = (
  eventName: string, 
  parameters: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    });
  }
};

// Eventos EspecÃ­ficos
export const trackWhatsAppClick = (section: string) => {
  trackEvent('whatsapp_click', {
    label: section,
    section: section
  });
};

export const trackCalculatorUse = (economia: number) => {
  trackEvent('calculator_use', {
    label: 'economia_calculada',
    value: economia
  });
};
```

### 2.3 Chatbot Integration

**Iframe Embed do ChatGPT:**
```html
<!-- Chatbot Widget -->
<div id="chatbot-widget" class="fixed bottom-20 right-20 z-50">
  <button id="chatbot-toggle" class="btn-chatbot">
    ðŸ¤– Assistente Virtual
  </button>
  
  <div id="chatbot-iframe" class="hidden">
    <iframe 
      src="https://chatgpt.com/g/g-quepJB90J-saraiva-vision-clinica-oftalmologica"
      width="400" 
      height="600"
      frameborder="0"
      title="Assistente Saraiva Vision"
    ></iframe>
  </div>
</div>
```

---

## 3. COMPLIANCE E LEGAL

### 3.1 LGPD Implementation

**Cookie Banner:**
```tsx
// components/CookieBanner.tsx
import { useState, useEffect } from 'react';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    // Ativar Google Analytics
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          Utilizamos cookies para melhorar sua experiÃªncia. 
          <a href="/privacidade" className="underline">PolÃ­tica de Privacidade</a>
        </p>
        <div className="flex gap-2">
          <button onClick={acceptCookies} className="btn-primary">
            Aceitar
          </button>
          <button onClick={() => setShowBanner(false)} className="btn-secondary">
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};
```

### 3.2 Compliance MÃ©dico CFM

**Disclaimers ObrigatÃ³rios:**
```tsx
// components/MedicalDisclaimer.tsx
export const MedicalDisclaimer = () => (
  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <p className="text-sm text-blue-700">
          <strong>ResponsÃ¡vel TÃ©cnico:</strong> Dr. Philipe Saraiva Cruz - CRM-MG 69.870<br/>
          <strong>Aviso Legal:</strong> Consulte riscos e benefÃ­cios com seu oftalmologista. 
          Os resultados podem variar de acordo com caracterÃ­sticas individuais.
        </p>
      </div>
    </div>
  </div>
);
```

---

## 4. CONTEÃšDO E COPYWRITING

### 4.1 Headlines por SeÃ§Ã£o

**Hero Section:**
```
H1: "Lentes de Contato por Assinatura - Economize atÃ© 70% com o Primeiro LAAS do Brasil"

H2: "De R$ 5.280/ano para R$ 1.950/ano - A revoluÃ§Ã£o chegou Ã s suas lentes"

CTA: "ðŸ’¬ Falar no WhatsApp Agora"
```

**Problema-SoluÃ§Ã£o:**
```
H2: "Pare de Pagar Caro por Lentes de Contato"

Problema: "Modelo tradicional custa atÃ© R$ 5.280/ano"
SoluÃ§Ã£o: "Com LAAS vocÃª paga a partir de R$ 180,55/mÃªs"

CTA: "ðŸ“Š Calcular Minha Economia"
```

**Planos:**
```
H2: "8 Planos Sob Medida para Sua Necessidade"

Subhead: "Desde lentes esfÃ©ricas bÃ¡sicas atÃ© esclerais para casos complexos"

CTA: "ðŸ” Comparar Planos"
```

### 4.2 Microcopy para Elementos Interativos

**Calculadora de Economia:**
```
Label: "Quanto vocÃª gasta hoje com lentes por ano?"
Placeholder: "Ex: R$ 3.500"
BotÃ£o: "Calcular Economia"
Resultado: "ðŸ’° VocÃª pode economizar R$ 1.550/ano (44%)"
```

**FormulÃ¡rio de Contato:**
```
Nome: "Seu nome completo"
Telefone: "WhatsApp para contato"
Email: "E-mail (opcional)"
Tipo Lente: "Que tipo de lente vocÃª usa?"
HorÃ¡rio: "Melhor horÃ¡rio para contato"

Checkbox: "â–¡ Li e concordo com a PolÃ­tica de Privacidade"
BotÃ£o: "Agendar pelo WhatsApp"
```

### 4.3 FAQ - Top 15 Perguntas

```
1. Como funciona o sistema de assinatura LAAS?
2. Posso cancelar a qualquer momento?
3. As lentes sÃ£o certificadas pela ANVISA?
4. Como funciona a telemedicina incluÃ­da?
5. Qual o prazo de entrega das lentes?
6. Posso trocar de plano durante a assinatura?
7. O que acontece se eu perder ou danificar uma lente?
8. Como funciona o programa de indicaÃ§Ã£o?
9. HÃ¡ taxa de cancelamento?
10. Preciso ir Ã  clÃ­nica para comeÃ§ar?
11. VocÃªs atendem todo o Brasil?
12. Como funciona o pagamento Ã  vista?
13. Posso incluir add-ons depois?
14. HÃ¡ garantia de adaptaÃ§Ã£o?
15. Como funciona para quem tem ceratocone?
```

---

## 5. ESTRATÃ‰GIA DE CONVERSÃƒO

### 5.1 CTAs PrioritÃ¡rios com Hierarquia

**CTA PrimÃ¡rio (Verde WhatsApp):**
- LocalizaÃ§Ã£o: Hero, apÃ³s calculadora, final de seÃ§Ãµes
- Texto: "ðŸ’¬ Falar no WhatsApp Agora"
- Objetivo: Conversa direta imediata

**CTA SecundÃ¡rio (Azul):**
- LocalizaÃ§Ã£o: Cards de plano, comparador
- Texto: "Ver Detalhes do Plano" / "Comparar Planos"
- Objetivo: ExploraÃ§Ã£o aprofundada

**CTA TerciÃ¡rio (Outline):**
- LocalizaÃ§Ã£o: FAQ, footer
- Texto: "Agendar Consulta" / "Ligar Agora"
- Objetivo: Canais alternativos

### 5.2 Pontos de ConversÃ£o na Jornada

```
1. Hero Section (5-10 segundos)
   â†’ CTA: WhatsApp imediato
   
2. ApÃ³s Calculadora (30-60 segundos)
   â†’ CTA: WhatsApp com economia calculada
   
3. ApÃ³s Explorar Planos (1-2 minutos)
   â†’ CTA: Agendar consulta especÃ­fica
   
4. FAQ Resolution (2-3 minutos)
   â†’ CTA: Tirar dÃºvidas pelo WhatsApp
   
5. SaÃ­da (Exit Intent)
   â†’ Modal: Oferta especial / Desconto
```

### 5.3 Proposta de Testes A/B

**Teste 1 - Headlines:**
- A: "Economize atÃ© 70% com Lentes por Assinatura"
- B: "Pare de Pagar Caro por Lentes de Contato"
- MÃ©trica: Taxa de clique em CTA hero

**Teste 2 - CTAs:**
- A: "Falar no WhatsApp Agora"
- B: "Calcular Minha Economia GrÃ¡tis"
- MÃ©trica: ConversÃµes totais

**Teste 3 - PreÃ§os:**
- A: Mostrar preÃ§o mensal primeiro
- B: Mostrar economia anual primeiro
- MÃ©trica: Engajamento com planos

---

## 6. MÃ‰TRICAS DE SUCESSO

### 6.1 KPIs e Metas

**ConversÃ£o:**
- Taxa geral de conversÃ£o: **8%** (meta)
- ConversÃ£o via WhatsApp: **60%** das conversÃµes
- ConversÃ£o via formulÃ¡rio: **40%** das conversÃµes

**Engajamento:**
- Tempo mÃ©dio na pÃ¡gina: **2+ minutos**
- PÃ¡ginas por sessÃ£o: **1.3+**
- Taxa de rejeiÃ§Ã£o: **< 45%**

**Calculadora:**
- Uso da calculadora: **30%** dos visitantes
- ConversÃ£o pÃ³s-calculadora: **15%**

### 6.2 Dashboards de Monitoramento

**Google Analytics 4:**
```javascript
// Custom Events para monitorar
gtag('event', 'page_view', {
  page_title: 'Saraiva Vision LAAS',
  page_location: window.location.href
});

gtag('event', 'whatsapp_click', {
  event_category: 'conversion',
  event_label: 'hero_section'
});

gtag('event', 'calculator_complete', {
  event_category: 'engagement',
  value: calculatedSavings
});
```

---

## 7. CHECKLIST DE LANÃ‡AMENTO

### 7.1 PrÃ©-LanÃ§amento (QA)

**Funcionalidade:**
- [ ] Calculadora de economia funcionando
- [ ] Comparador de planos responsivo
- [ ] Links WhatsApp contextuais
- [ ] FormulÃ¡rios com validaÃ§Ã£o
- [ ] Chatbot embed funcionando

**Performance:**
- [ ] Lighthouse Score > 90
- [ ] Imagens otimizadas (WebP/AVIF)
- [ ] Fonts carregando com preload
- [ ] CSS crÃ­tico inline
- [ ] JavaScript lazy loading

**SEO:**
- [ ] Meta tags completas
- [ ] Schema markup implementado
- [ ] Sitemap.xml gerado
- [ ] Robots.txt configurado
- [ ] Open Graph tags

**Compliance:**
- [ ] Banner de cookies LGPD
- [ ] PolÃ­tica de privacidade
- [ ] Disclaimers mÃ©dicos CFM
- [ ] Dr. Philipe CRM em todas as pÃ¡ginas
- [ ] Termos de uso

### 7.2 PÃ³s-LanÃ§amento (30 dias)

**Monitoramento:**
- [ ] Google Analytics configurado
- [ ] Meta Pixel trackings
- [ ] Hotjar para heatmaps
- [ ] Search Console conectado

**OtimizaÃ§Ã£o:**
- [ ] A/B test em headlines
- [ ] Teste de CTAs
- [ ] OtimizaÃ§Ã£o de conversÃ£o
- [ ] Ajustes baseados em dados

---

## 8. ORÃ‡AMENTO E TIMELINE

### 8.1 Estimativa de Desenvolvimento

**Fases do Projeto:**

1. **Setup e Estrutura (3 dias)**
   - ConfiguraÃ§Ã£o Next.js + TypeScript
   - Design system base
   - Estrutura de componentes

2. **Desenvolvimento Core (7 dias)**
   - SeÃ§Ãµes principais
   - Calculadoras interativas
   - Sistema de planos

3. **IntegraÃ§Ãµes (3 dias)**
   - WhatsApp links
   - Analytics
   - Chatbot embed

4. **Compliance e Legal (2 dias)**
   - LGPD implementation
   - Disclaimers CFM
   - PolÃ­ticas

5. **Testing e QA (3 dias)**
   - Testes funcionais
   - Performance audit
   - Cross-browser testing

**Total: 18 dias Ãºteis**

### 8.2 Recursos NecessÃ¡rios

**Equipe MÃ­nima:**
- 1 Desenvolvedor Frontend (Next.js/React)
- 1 Designer UX/UI (Figma â†’ CÃ³digo)
- 1 Copywriter (conteÃºdo mÃ©dico)
- 1 QA/Tester

**Ferramentas:**
- Figma (design)
- Vercel (hosting)
- Google Analytics + Meta Pixel
- Hotjar (analytics comportamental)

---

**Este documento serve como base completa para o desenvolvimento da landing page LAAS da Saraiva Vision, garantindo compliance, performance e conversÃ£o otimizada via WhatsApp.**