# CHECKLIST DE QA - SARAIVA VISION LANDING PAGE
## Testes ObrigatÃ³rios PrÃ©-LanÃ§amento

**VersÃ£o:** 1.0  
**Data:** 01 de outubro de 2025  
**ResponsÃ¡vel:** QA Team  
**AprovaÃ§Ã£o:** Dr. Philipe Saraiva Cruz + Equipe TÃ©cnica

---

## 1. TESTES DE FUNCIONALIDADE CRÃTICA

### 1.1 Hero Section âš ï¸ CRÃTICO

**Elementos ObrigatÃ³rios:**
- [ ] Headline "Lentes de Contato por Assinatura - Economize atÃ© 70%" visÃ­vel
- [ ] Subheadline com economia "De R$ 5.280/ano para R$ 1.950/ano" presente
- [ ] Badge mÃ©dico "Dr. Philipe Saraiva Cruz - CRM-MG 69.870" exibido
- [ ] CTA "ðŸ’¬ Falar no WhatsApp Agora" funcionando
- [ ] Link redireciona para: `wa.me/5533998601427?text=...`

**Testes EspecÃ­ficos:**
```
âœ… Desktop 1920x1080: Hero visÃ­vel sem scroll
âœ… Mobile 375x667: Elementos empilhados corretamente
âœ… Tablet 768x1024: Layout responsivo mantido
âœ… Link WhatsApp abre em nova aba
âœ… Mensagem prÃ©-formatada carregada corretamente
```

### 1.2 Calculadora de Economia âš ï¸ CRÃTICO

**Funcionalidade:**
- [ ] Input aceita valores R$ 1.000 - R$ 10.000
- [ ] Dropdown tipo de lente funciona
- [ ] CÃ¡lculo retorna economia correta
- [ ] Resultado mostra valor absoluto + percentual
- [ ] CTA pÃ³s-cÃ¡lculo leva para WhatsApp com valor

**Casos de Teste:**
```
Teste 1: Input R$ 4.000, EsfÃ©rica
Esperado: Economia R$ 1.833/ano (45.8%)
Resultado: [ PASS / FAIL ]

Teste 2: Input R$ 6.000, Multifocal  
Esperado: Economia R$ 1.101/ano (18.4%)
Resultado: [ PASS / FAIL ]

Teste 3: Input R$ 2.000, RGP
Esperado: "Plano similar: R$ 5.989/ano"
Resultado: [ PASS / FAIL ]
```

### 1.3 Planos de Assinatura âš ï¸ CRÃTICO

**Grid de 8 Planos:**
- [ ] BÃ¡sico Mensal: R$ 241,50/mÃªs (R$ 2.608,20 Ã  vista)
- [ ] Premium Mensal: R$ 317,40/mÃªs (R$ 3.427,92 Ã  vista)
- [ ] Elite Mensal: R$ 408,25/mÃªs (R$ 4.409,10 Ã  vista)
- [ ] Conforto Anual: R$ 180,55/mÃªs (R$ 1.949,94 Ã  vista) â­
- [ ] VisÃ£o HD Anual: R$ 271,40/mÃªs (R$ 2.931,12 Ã  vista)
- [ ] Premium RGP: R$ 499,10/mÃªs (R$ 5.390,28 Ã  vista)
- [ ] TÃ³rica RGP: R$ 650,90/mÃªs (R$ 7.029,72 Ã  vista)
- [ ] Escleral Premium: R$ 909,65/mÃªs (R$ 9.824,22 Ã  vista)

**ValidaÃ§Ãµes:**
- [ ] Badge "MAIOR ECONOMIA" no Conforto Anual
- [ ] Badge "MAIS POPULAR" no BÃ¡sico Mensal
- [ ] Todos os preÃ§os batem com a tabela oficial
- [ ] CTAs levam para WhatsApp com plano especÃ­fico
- [ ] Layout responsivo mantÃ©m 4â†’2â†’1 colunas

### 1.4 Links WhatsApp âš ï¸ CRÃTICO

**URLs por SeÃ§Ã£o:**
```
Hero: 
wa.me/5533998601427?text=OlÃ¡! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.

Calculadora:
wa.me/5533998601427?text=Oi! Calculei uma economia de R$ [VALOR]/ano. Gostaria de agendar uma consulta para comeÃ§ar.

Plano EspecÃ­fico:
wa.me/5533998601427?text=OlÃ¡! Estou interessado no [PLANO] por R$ [VALOR]/mÃªs. Quando posso agendar?

DÃºvidas:
wa.me/5533998601427?text=OlÃ¡! Tenho algumas dÃºvidas sobre o LAAS. Ã‰ possÃ­vel conversar?
```

**Testes:**
- [ ] Todos os links abrem WhatsApp Web/App
- [ ] Mensagens prÃ©-formatadas carregam
- [ ] VariÃ¡veis [VALOR] e [PLANO] sÃ£o substituÃ­das
- [ ] Funciona em mobile (app nativo)
- [ ] Funciona em desktop (web/app)

---

## 2. COMPLIANCE E LEGAL âš–ï¸

### 2.1 CFM - Conselho Federal de Medicina

**ResoluÃ§Ã£o CFM nÂº 2.336/2023 - ObrigatÃ³rio:**
- [ ] Nome "Dr. Philipe Saraiva Cruz" presente
- [ ] CRM "CRM-MG 69.870" acompanha o nome
- [ ] Palavra "MÃ‰DICO" presente junto ao CRM
- [ ] Especialidade "Oftalmologista" mencionada
- [ ] Disclaimer "Consulte riscos e benefÃ­cios com seu oftalmologista" 

**LocalizaÃ§Ãµes ObrigatÃ³rias:**
- [ ] Header/Hero section (badge mÃ©dico)
- [ ] Footer (informaÃ§Ãµes completas)
- [ ] Qualquer seÃ§Ã£o que mencione tratamento
- [ ] Disclaimer em todas as pÃ¡ginas

**ProibiÃ§Ãµes Verificadas:**
- [ ] âœ… NÃ£o promete resultados especÃ­ficos
- [ ] âœ… NÃ£o usa "melhor", "Ãºnico", superlativos
- [ ] âœ… NÃ£o apresenta antes/depois sem contexto educativo
- [ ] âœ… Equipamentos citados sÃ£o certificados ANVISA

### 2.2 LGPD - Lei Geral de ProteÃ§Ã£o de Dados

**Banner de Cookies - ObrigatÃ³rio:**
- [ ] Aparece na primeira visita
- [ ] Texto explica uso de cookies
- [ ] Link para PolÃ­tica de Privacidade
- [ ] BotÃµes "Aceitar" e "Recusar" funcionais
- [ ] Armazena escolha no localStorage
- [ ] Google Analytics sÃ³ ativa apÃ³s aceite

**FormulÃ¡rios LGPD Compliant:**
- [ ] Consentimento explÃ­cito para contato
- [ ] Checkbox separada para WhatsApp
- [ ] Checkbox separada para newsletter (opcional)
- [ ] PolÃ­tica de privacidade linkada
- [ ] Dados mÃ­nimos necessÃ¡rios apenas

**Testes LGPD:**
```
Teste 1: Primeira visita
Resultado: Banner aparece automaticamente [ PASS / FAIL ]

Teste 2: Recusar cookies  
Resultado: Analytics desabilitado [ PASS / FAIL ]

Teste 3: Aceitar cookies
Resultado: GA4 tracking ativo [ PASS / FAIL ]

Teste 4: FormulÃ¡rio sem consentimento
Resultado: Erro de validaÃ§Ã£o [ PASS / FAIL ]
```

### 2.3 ANVISA - RegulamentaÃ§Ã£o Produtos

**Lentes Certificadas:**
- [ ] MenÃ§Ã£o "Lentes certificadas ANVISA" presente
- [ ] Marcas citadas: Johnson & Johnson, Alcon, CooperVision
- [ ] NÃ£o promove lentes sem registro
- [ ] Disclaimers sobre uso adequado

---

## 3. PERFORMANCE E TÃ‰CNICO ðŸš€

### 3.1 Core Web Vitals - Meta < 2.5s LCP

**Lighthouse Audit (Mobile):**
- [ ] Performance Score: â‰¥ 90
- [ ] Accessibility: â‰¥ 95  
- [ ] Best Practices: â‰¥ 90
- [ ] SEO: â‰¥ 95

**MÃ©tricas EspecÃ­ficas:**
```
LCP (Largest Contentful Paint): < 2.5s
Target: < 2.0s [ MEDIDO: ___s ] [ PASS / FAIL ]

FID (First Input Delay): < 100ms  
Target: < 50ms [ MEDIDO: ___ms ] [ PASS / FAIL ]

CLS (Cumulative Layout Shift): < 0.1
Target: < 0.05 [ MEDIDO: ___ ] [ PASS / FAIL ]

TTFB (Time to First Byte): < 800ms
Target: < 600ms [ MEDIDO: ___ms ] [ PASS / FAIL ]
```

**OtimizaÃ§Ãµes Verificadas:**
- [ ] Imagens em WebP/AVIF com fallback
- [ ] Lazy loading implementado
- [ ] Fonts carregadas com preload
- [ ] CSS crÃ­tico inline
- [ ] JavaScript bundle < 100kb gzipped

### 3.2 SEO e Meta Tags

**Meta Tags BÃ¡sicas:**
```html
<title>Lentes de Contato por Assinatura | Saraiva Vision LAAS</title>
<meta name="description" content="Economize atÃ© 70% com o primeiro serviÃ§o de assinatura de lentes de contato do Brasil. A partir de R$ 180,55/mÃªs com Dr. Philipe Saraiva Cruz CRM-MG 69.870">
<meta name="keywords" content="lentes de contato, assinatura, LAAS, Caratinga, oftalmologista">
```

**Open Graph:**
- [ ] og:title definido
- [ ] og:description definido
- [ ] og:image (1200x630px)
- [ ] og:url correto
- [ ] og:type = website

**Schema Markup:**
- [ ] LocalBusiness implementado
- [ ] MedicalBusiness structured data
- [ ] Physician information
- [ ] Contact information
- [ ] Address markup

### 3.3 Analytics e Tracking

**Google Analytics 4:**
- [ ] GA4 property configurada: G-XXXXXXXXXX
- [ ] ConversÃµes definidas: whatsapp_click, form_submit
- [ ] E-commerce events para planos
- [ ] Enhanced conversions habilitadas
- [ ] GDPR compliance (consent mode)

**Meta Pixel (opcional):**
- [ ] Pixel ID configurado
- [ ] PageView event
- [ ] Lead event (formulÃ¡rio)
- [ ] Purchase event (seleÃ§Ã£o plano)

**Eventos Customizados:**
```javascript
// Verificar se disparam corretamente
gtag('event', 'whatsapp_click', { section: 'hero' });
gtag('event', 'calculator_use', { savings: 1500 });
gtag('event', 'plan_select', { plan_name: 'BÃ¡sico Mensal' });
```

---

## 4. TESTES DE COMPATIBILIDADE ðŸ“±ðŸ’»

### 4.1 Browsers - Suporte ObrigatÃ³rio

**Desktop (Windows/Mac):**
- [ ] Chrome 120+ (90% compatibilidade)
- [ ] Firefox 115+ (85% compatibilidade)  
- [ ] Safari 16+ (Mac only, 80% compatibilidade)
- [ ] Edge 120+ (85% compatibilidade)

**Mobile (iOS/Android):**
- [ ] Chrome Mobile (Android) â­ PrioritÃ¡rio
- [ ] Safari Mobile (iOS) â­ PrioritÃ¡rio
- [ ] Samsung Internet (Android)
- [ ] Firefox Mobile

**Testes por Browser:**
```
Chrome Desktop: Layout [ ] | Funcionalidade [ ] | Performance [ ]
Firefox: Layout [ ] | Funcionalidade [ ] | Performance [ ]
Safari: Layout [ ] | Funcionalidade [ ] | Performance [ ]
Edge: Layout [ ] | Funcionalidade [ ] | Performance [ ]

Chrome Mobile: Layout [ ] | Funcionalidade [ ] | Performance [ ]
Safari iOS: Layout [ ] | Funcionalidade [ ] | Performance [ ]
```

### 4.2 Dispositivos - Breakpoints

**Mobile (320px - 767px):**
- [ ] iPhone SE (375x667): Layout empilhado
- [ ] iPhone 12 (390x844): Navigation ok  
- [ ] iPhone 12 Pro Max (428x926): NÃ£o estica
- [ ] Samsung Galaxy S21 (360x800): CTAs clicÃ¡veis

**Tablet (768px - 1023px):**
- [ ] iPad (768x1024): Grid 2 colunas
- [ ] iPad Pro (1024x1366): TransiÃ§Ã£o suave
- [ ] Surface Pro (912x1368): HÃ­brido funcionando

**Desktop (1024px+):**
- [ ] 1024x768: MÃ­nimo suportado
- [ ] 1366x768: Laptop padrÃ£o
- [ ] 1920x1080: Full HD ideal
- [ ] 2560x1440: 2K nÃ£o quebra layout

### 4.3 OrientaÃ§Ãµes e InteraÃ§Ãµes

**Mobile EspecÃ­fico:**
- [ ] Portrait mode otimizado
- [ ] Landscape mode funcional
- [ ] Touch targets â‰¥ 44px
- [ ] Scroll suave
- [ ] Pull-to-refresh nÃ£o quebra

**Acessibilidade:**
- [ ] Tab navigation funcionando
- [ ] Focus indicators visÃ­veis
- [ ] Alt texts em imagens
- [ ] Contraste â‰¥ 4.5:1
- [ ] Screen reader friendly

---

## 5. TESTES DE INTEGRAÃ‡ÃƒO ðŸ”—

### 5.1 WhatsApp Links

**CenÃ¡rios de Teste:**
```
Teste 1: Desktop Chrome + WhatsApp Web
- Clicar CTA hero
- Verificar abertura wa.web.whatsapp.com
- Confirmar mensagem prÃ©-preenchida
Resultado: [ PASS / FAIL ]

Teste 2: Android Chrome + WhatsApp App
- Clicar CTA planos  
- Verificar abertura do app nativo
- Confirmar mensagem com plano especÃ­fico
Resultado: [ PASS / FAIL ]

Teste 3: iPhone Safari + WhatsApp App
- Clicar CTA calculadora
- Verificar abertura do app
- Confirmar valor calculado na mensagem
Resultado: [ PASS / FAIL ]
```

### 5.2 Analytics Tracking

**VerificaÃ§Ã£o Google Analytics:**
- [ ] Real-time users aparecendo
- [ ] Page views registrando
- [ ] Events disparando corretamente
- [ ] Conversions sendo tracked
- [ ] Source/medium corretos

**Debug Mode:**
```javascript
// Usar para debug
gtag('config', 'GA_MEASUREMENT_ID', {
  debug_mode: true
});

// Verificar no console se eventos disparam
```

### 5.3 Performance em ProduÃ§Ã£o

**Testes com Ferramentas:**
- [ ] PageSpeed Insights (Google) > 90
- [ ] GTmetrix Grade A
- [ ] WebPageTest LCP < 2.5s  
- [ ] Lighthouse CI integrado

---

## 6. CHECKLIST FINAL PRÃ‰-LANÃ‡AMENTO âœ…

### 6.1 ConteÃºdo e Dados

**InformaÃ§Ãµes Verificadas:**
- [ ] Todos os preÃ§os conferidos com tabela oficial
- [ ] Telefone WhatsApp correto: (33) 99860-1427
- [ ] Email correto: saraivavision@gmail.com
- [ ] EndereÃ§o: Rua Catarina Maria Passos, 97 - Santa Zita, Caratinga/MG
- [ ] CNPJ: 53.864.119/0001-79
- [ ] HorÃ¡rios: Seg-Sex 8h-18h | SÃ¡b 8h-12h

**Links Externos:**
- [ ] Instagram @saraiva_vision (funciona)
- [ ] Site saraivavision.com.br (ativo)
- [ ] Chatbot link funcionando
- [ ] PolÃ­tica de privacidade completa

### 6.2 Deploy e Infraestrutura

**Vercel/Hosting:**
- [ ] Domain saraivavision.com.br configurado
- [ ] SSL certificado ativo (HTTPS)
- [ ] Redirects www â†’ nÃ£o-www funcionando
- [ ] CDN configurada
- [ ] Backup automÃ¡tico habilitado

**Monitoramento:**
- [ ] Uptime monitoring (99.9% target)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] Analytics dashboards

### 6.3 AprovaÃ§Ã£o MÃ©dica

**Dr. Philipe Saraiva Cruz - Checklist:**
- [ ] âœ… InformaÃ§Ãµes mÃ©dicas corretas
- [ ] âœ… Compliance CFM respeitado  
- [ ] âœ… PreÃ§os e planos aprovados
- [ ] âœ… Disclaimers mÃ©dicos adequados
- [ ] âœ… Imagem profissional mantida

**Assinatura de AprovaÃ§Ã£o:**
```
Dr. Philipe Saraiva Cruz
CRM-MG 69.870
Data: ___/___/2025
Assinatura: _________________
```

---

## 7. PLANO DE ROLLBACK ðŸ”„

### 7.1 CenÃ¡rios de EmergÃªncia

**Se Taxa de ConversÃ£o < 3% nas primeiras 48h:**
- [ ] Verificar tracking Analytics
- [ ] Testar links WhatsApp
- [ ] Revisar headlines principais
- [ ] Checar performance mobile

**Se WhatsApp Links NÃ£o Funcionam:**
- [ ] Rollback para versÃ£o anterior
- [ ] Testar URLs manualmente
- [ ] Verificar encoding de caracteres
- [ ] Validar em diferentes devices

**Se Performance < 85 Lighthouse:**
- [ ] Otimizar imagens mais agressivamente
- [ ] Remover JavaScript nÃ£o-crÃ­tico
- [ ] Implementar lazy loading adicional
- [ ] Considerar CDN premium

### 7.2 Contatos de EmergÃªncia

**Equipe TÃ©cnica:**
- Desenvolvedor Lead: [nome] - [telefone]
- DevOps/Deploy: [nome] - [telefone]  
- QA Lead: [nome] - [telefone]

**NegÃ³cio:**
- Dr. Philipe Saraiva: (33) 99860-1427
- ResponsÃ¡vel Marketing: [nome] - [telefone]

---

**TODOS OS TESTES DEVEM SER EXECUTADOS E APROVADOS ANTES DO LANÃ‡AMENTO OFICIAL DA LANDING PAGE SARAIVA VISION CARE LTDA.**

**ResponsÃ¡vel Final:** Dr. Philipe Saraiva Cruz  
**AprovaÃ§Ã£o TÃ©cnica:** Equipe Desenvolvimento  
**Data Limite:** [definir baseado no cronograma]
