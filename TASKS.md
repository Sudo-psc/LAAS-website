# 📋 TASKS - Próximos Passos LAAS Landing Page

**Última atualização:** 1 de outubro de 2025  
**Status do Projeto:** Reestruturação de Preços Concluída ✅  
**Branch:** master  
**Build Status:** ✅ 183 kB First Load JS

---

## 🎯 PRIORIDADE ALTA (Fazer primeiro)

### 1. Criar Componente AddonsShowcase
**Objetivo:** Exibir sistema de addons disponíveis para upsell  
**Localização:** `/src/components/sections/AddonsShowcase.tsx`

**Funcionalidades:**
- [ ] Card para cada addon (topografia, par emergência, lentes coloridas, telemedicina)
- [ ] Preços claramente visíveis (+R$ 25, +R$ 30, +R$ 40, +R$ 50)
- [ ] Badges de compatibilidade (quais planos aceitam cada addon)
- [ ] Animações com Framer Motion
- [ ] Grid responsivo (2 cols mobile, 4 cols desktop)
- [ ] CTAs "Adicionar ao Plano" com WhatsApp link
- [ ] Ícones customizados ou Lucide icons

**Addons Roadmap Futuros:**
- [ ] Óculos de Grau Simples (+R$ 80/mês)
- [ ] Óculos Multifocal (+R$ 120/mês)
- [ ] Atendimento VIP sem fila (+R$ 60/mês) - para planos 1-5

**Design:**
```tsx
// Estrutura sugerida:
<section className="py-20 bg-white">
  <h2>Personalize seu Plano com Addons</h2>
  <p>Adicione serviços extras conforme sua necessidade</p>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {addons.map(addon => (
      <AddonCard 
        key={addon.id}
        name={addon.name}
        price={addon.price}
        description={addon.description}
        compatiblePlans={addon.compatiblePlans}
      />
    ))}
  </div>
</section>
```

---

### 2. Atualizar PlansSection UI
**Objetivo:** Exibir novos recursos visuais dos planos  
**Localização:** `/src/components/sections/PlansSection.tsx`

**Melhorias:**
- [ ] **Badge "LANÇAMENTO"** no Plano 1 (Básico Mensal) - usar `isLaunchPromo`
  - Animação `animate-pulse`
  - Cor: gradiente azul (`from-blue-500 to-indigo-600`)
  - Posição: absolute top-right do card

- [ ] **Ícones de Telemedicina** nos planos que têm consultas online
  - Planos: 1, 3, 4, 5, 6, 7, 8
  - Ícone: `<Video>` do Lucide React
  - **IMPORTANTE:** Não mencionar "ampar.ai"
  - Texto: "Consulta por Telemedicina"

- [ ] **Badge de Seguro** nos planos 6, 7, 8
  - Ícone: 🛡️ ou `<Shield>` do Lucide
  - Cor: verde (`bg-green-100 text-green-800`)
  - Texto: "Seguro Perda/Roubo"

- [ ] **Badge Meibografia** nos planos 5, 6, 7, 8
  - Ícone: `<Microscope>` ou `<Eye>` do Lucide
  - Cor: roxo (`bg-purple-100 text-purple-800`)
  - Texto: "Meibografia Inclusa"

- [ ] **Exibir Addons Disponíveis** abaixo das features
  - Lista de pills com addons compatíveis
  - Exemplo: `<Badge>+ Lentes Coloridas</Badge>`
  - Link para seção AddonsShowcase

- [ ] **Highlight de Economia** no Plano 4 (Conforto Anual)
  - Badge: "23% de economia"
  - Cor: verde com destaque

**Código de Exemplo:**
```tsx
{plan.isLaunchPromo && (
  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
    🚀 LANÇAMENTO
  </div>
)}

{plan.features.includes('Seguro') && (
  <Badge className="bg-green-100 text-green-800">
    <Shield size={14} /> Seguro Perda/Roubo
  </Badge>
)}
```

---

### 3. Criar Seção PremiumStorytelling
**Objetivo:** Storytelling premium CFM-compliant  
**Localização:** `/src/components/sections/PremiumStorytelling.tsx`

**Conteúdo (CFM-compliant):**
- [ ] **Comodidade**
  - "Lentes entregues na sua casa mensalmente"
  - "Nunca mais se preocupe em comprar lentes"
  - "Acompanhamento oftalmológico contínuo"

- [ ] **Exclusividade**
  - "Dr. Philipe Saraiva Cruz - CRM-MG 69.870"
  - "15 anos de experiência em lentes de contato"
  - "Especialização em casos complexos (ceratocone, RGP, esclerais)"
  - "Atendimento VIP nos planos premium"

- [ ] **Qualidade de Visão**
  - "Lentes de última geração aprovadas pela ANVISA"
  - "Tecnologia de ponta para melhor conforto"
  - "Adaptação personalizada para cada caso"
  - "Exames inclusos: paquimetria, topografia, meibografia"

**Estrutura Visual:**
- [ ] Seção com background gradient sutil
- [ ] 3 colunas: Comodidade | Exclusividade | Qualidade
- [ ] Ícones ilustrativos (Lucide ou custom)
- [ ] Foto do Dr. Philipe (usar `/public/drphilipe_perfil.jpeg`)
- [ ] Depoimento/citação profissional
- [ ] CTA para agendar consulta

**Compliance:**
- ❌ Não prometer "cura" ou "resultados garantidos"
- ❌ Não usar linguagem sensacionalista
- ✅ Focar em "conforto", "qualidade", "acompanhamento"
- ✅ Mencionar credenciais (CRM, especialização)
- ✅ Destacar tecnologia e segurança (ANVISA)

---

## 🎨 PRIORIDADE MÉDIA (Fazer em seguida)

### 4. Atualizar CalculatorSection
**Objetivo:** Recalcular economia com novos preços  
**Localização:** `/src/components/sections/CalculatorSection.tsx`

**Mudanças:**
- [ ] Atualizar valores base dos 5 tipos de lente
  - Esféricas: R$ 1.068/ano (R$ 89/mês × 12)
  - Tóricas: R$ 2.148/ano (R$ 179/mês × 12)
  - Multifocais: R$ 2.628/ano (R$ 219/mês × 12)
  - RGP: R$ 3.348/ano (R$ 279/mês × 12)
  - Esclerais: R$ 4.188/ano (R$ 349/mês × 12)

- [ ] Recalcular economia vs modelo tradicional
  - Tradicional: R$ 3.730/ano (mantém valor atual)
  - Economia esféricas: R$ 2.662 (71%)
  - Economia tóricas: R$ 1.582 (42%)
  - Economia multifocais: R$ 1.102 (30%)
  - RGP: R$ 382 (10%)
  - Esclerais: -R$ 458 (-12% mais caro, mas com acompanhamento)

- [ ] Adicionar toggle para incluir addons no cálculo
  - Checkbox: "Incluir addon de topografia (+R$ 480/ano)"
  - Checkbox: "Incluir addon de lentes coloridas (+R$ 360/ano)"
  - Atualizar cálculo dinamicamente

- [ ] Tooltip explicando o que está incluído
  - "Inclui: 12 pares, paquimetria, consultas, solução de limpeza"

---

### 5. Atualizar HeroSection
**Objetivo:** Destacar novo preço de entrada  
**Localização:** `/src/components/sections/HeroSection.tsx`

**Mudanças:**
- [ ] Headline: "A partir de **R$ 89/mês**" (destaque visual)
- [ ] Subheadline: "Lentes de contato por assinatura com acompanhamento oftalmológico"
- [ ] Badge: "🚀 LANÇAMENTO: 1 consulta telemedicina GRÁTIS"
- [ ] Atualizar comparativo:
  - Antes: "~~R$ 3.730/ano~~" (tradicional)
  - Agora: "**R$ 1.068/ano**" (plano básico)
  - Economia: "**71% de economia**" (atualizar de 48%)

- [ ] Manter dual CTAs:
  - Primário: "Quero Economizar Agora"
  - Secundário: "Ver Todos os Planos"

**Visual:**
- [ ] Animação no preço "R$ 89" (count-up effect?)
- [ ] Badge "LANÇAMENTO" piscando sutilmente
- [ ] Ícone de verificação ao lado de cada benefício

---

### 6. Atualizar ProblemSolutionSection
**Objetivo:** Recalcular economia com preço base R$ 89  
**Localização:** `/src/components/sections/ProblemSolutionSection.tsx`

**Mudanças:**
- [ ] **Modelo Tradicional:** Manter R$ 3.730/ano
  - 12 pares @ R$ 220 = R$ 2.640
  - 4 visitas @ R$ 75 = R$ 300
  - 2 perdas/danos @ R$ 220 = R$ 440
  - **Total: R$ 3.730**

- [ ] **Modelo LAAS (novo):** R$ 1.068/ano
  - Plano Básico: R$ 89/mês × 12 = R$ 1.068
  - Inclui: 12 pares + consultas + paquimetria + solução

- [ ] **Economia atualizada:**
  - Valor absoluto: R$ 2.662 (antes era R$ 1.780)
  - Porcentagem: **71%** (antes era 48%)

- [ ] Atualizar badge "Economize até 71%"
- [ ] Manter ícone `eye_check_award_icon.png` no card LAAS

---

## 🔧 PRIORIDADE BAIXA (Melhorias futuras)

### 7. Implementar Contador de Vagas (Topografia Primeiros 30)
**Objetivo:** Criar urgência real  
**Localização:** `/src/components/sections/PromotionsSection.tsx`

**Funcionalidades:**
- [ ] Variável de estado: `vagasRestantes` (iniciar com 30)
- [ ] Decrementar ao assinar (integrar com backend futuro)
- [ ] Exibir "🔥 Apenas X vagas restantes!"
- [ ] Quando = 0, trocar card por "ESGOTADO - Aguarde próxima turma"
- [ ] Persistir em localStorage temporariamente (até ter backend)

**Código sugerido:**
```tsx
const [vagasRestantes, setVagasRestantes] = useState(30);

<div className="text-white font-bold">
  🔥 Apenas {vagasRestantes} vagas restantes!
</div>
```

---

### 8. Definir Regulamento Sorteio Ray-Ban
**Objetivo:** Compliance legal para sorteio  
**Localização:** `/docs/REGULAMENTO_SORTEIO_RAYBAN.md`

**Conteúdo:**
- [ ] Elegibilidade: Todos assinantes com pagamento em dia
- [ ] Frequência: Sorteio mensal (dia 1º de cada mês)
- [ ] Modelo do prêmio: Ray-Ban Wayfarer Classic ou similar (valor ~R$ 600)
- [ ] Mecânica: Sorteio aleatório via plataforma transparente
- [ ] Notificação: Vencedor contatado por WhatsApp/email
- [ ] Retirada: Prêmio entregue no endereço ou retirada na clínica
- [ ] Impostos: Informar responsabilidade (se aplicável)
- [ ] Divulgação: Publicar vencedor nas redes sociais (com autorização)

**Legal:**
- [ ] Consultar advogado para compliance com Lei de Sorteios
- [ ] Verificar necessidade de autorização SECAP/ME
- [ ] Termos e condições aceitos na assinatura

---

### 9. Implementar Sistema de Gestão de Planos Família
**Objetivo:** Backend para adicionar membros  
**Localização:** Futuro painel administrativo

**Features:**
- [ ] Adicionar membro familiar (nome, CPF, data nascimento)
- [ ] Cálculo automático de desconto (2 meses grátis por membro)
- [ ] Limite de membros por plano família (definir: 2-4 membros?)
- [ ] Dashboard para visualizar todos membros
- [ ] Opção de remover membro (com penalidade?)
- [ ] Histórico de descontos acumulados

**Prioridade:** Baixa (implementar após MVP funcionar)

---

### 10. Integração com Gateway de Pagamento
**Objetivo:** Checkout automatizado de addons  
**Tecnologias:** Stripe, Mercado Pago, ou PagSeguro

**Funcionalidades:**
- [ ] Seleção de plano base
- [ ] Checkbox para addons opcionais
- [ ] Cálculo de preço total dinâmico
- [ ] Formulário de checkout
- [ ] Pagamento recorrente (subscription)
- [ ] Webhook para confirmar pagamento
- [ ] Email de confirmação com detalhes do plano

**Prioridade:** Baixa (fase 2 do projeto)

---

### 11. Testes A/B
**Objetivo:** Otimizar conversão  
**Ferramentas:** Google Optimize, Vercel Edge Functions

**Experimentos:**
- [ ] Grid de promoções: 2×3 vs 3×2
- [ ] Ordem dos cards: telemedicina primeiro vs paquimetria primeiro
- [ ] Cores de badges: azul vs verde vs laranja
- [ ] CTA principal: "Quero Economizar" vs "Começar Agora" vs "Ver Planos"
- [ ] Preço de entrada: destacar R$ 89 vs destacar economia 71%

**Métricas:**
- Cliques em CTAs
- Scroll depth (até PlansSection?)
- Tempo na página
- Taxa de conversão (visitante → WhatsApp click)

---

### 12. Analytics Avançado
**Objetivo:** Rastrear comportamento do usuário  
**Ferramentas:** Google Analytics 4, Hotjar, Microsoft Clarity

**Eventos para rastrear:**
- [ ] Clique em cada plano
- [ ] Clique em cada promoção
- [ ] Clique em addons (quando implementado)
- [ ] Scroll até seção X
- [ ] Tempo médio por seção
- [ ] Heatmap de cliques (Hotjar)
- [ ] Session recordings (Clarity)

**Dashboards:**
- [ ] Taxa de conversão por plano
- [ ] Addon mais popular
- [ ] Origem do tráfego (orgânico, pago, social)
- [ ] Dispositivo (mobile vs desktop)

---

## 📊 MÉTRICAS DE SUCESSO (90 dias)

### KPIs Principais
- [ ] **100+ assinantes** (topografia primeiros 30 + 70 posteriores)
- [ ] **15% addon attachment rate** (15 de cada 100 clientes adicionam addon)
- [ ] **10% planos família adoption** (10 de cada 100 clientes trazem família)
- [ ] **5% monthly churn** (95% retention mensal)
- [ ] **30% indicações** (3 indicações a cada 10 clientes)

### Acompanhamento Semanal
- [ ] Novos assinantes/semana
- [ ] Revenue total (MRR - Monthly Recurring Revenue)
- [ ] Addon revenue
- [ ] Churn rate
- [ ] NPS (Net Promoter Score)

**Dashboard sugerido:** Google Sheets + Data Studio

---

## 🐛 BUGS CONHECIDOS / DÍVIDA TÉCNICA

### Nenhum bug crítico no momento ✅

**Observações:**
- Build passando: ✅ 183 kB First Load JS
- TypeScript errors: ✅ Zero
- Kluster validation: ✅ 3/3 aprovado
- Lighthouse score: ⚠️ Não medido ainda

**Melhorias de Performance (futuro):**
- [ ] Lazy load de imagens (já usando Next/Image, ok)
- [ ] Code splitting (já otimizado pelo Next.js)
- [ ] Fontes otimizadas (verificar se usando next/font)
- [ ] Compress imagens PNG para WebP (custom icons)

---

## 📱 RESPONSIVIDADE

**Testar em:**
- [ ] iPhone 12/13/14 (375px)
- [ ] iPhone 12/13/14 Pro Max (428px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop 1920px
- [ ] Desktop 4K (3840px)

**Seções críticas:**
- [ ] HeroSection (CTAs visíveis?)
- [ ] PlansSection (cards legíveis em mobile?)
- [ ] PromotionsSection (grid 2x3 quebra bem?)
- [ ] Footer (informações acessíveis?)

---

## 🚀 DEPLOY

**Status atual:** Repositório GitHub atualizado ✅

**Próximos passos de deploy:**
- [ ] Escolher plataforma: Vercel (recomendado) ou Netlify
- [ ] Conectar repositório GitHub
- [ ] Configurar variáveis de ambiente (se necessário)
- [ ] Custom domain: laas.saraivavision.com.br ou similar
- [ ] SSL certificate (automático na Vercel)
- [ ] Analytics + SEO
  - [ ] Google Search Console
  - [ ] Sitemap.xml
  - [ ] robots.txt
  - [ ] Meta tags OpenGraph
  - [ ] Schema.org markup (Medical Business)

---

## 📞 CONTATOS E INFORMAÇÕES

**Clínica:** Saraiva Vision  
**Endereço:** Rua Catarina Maria Passos 97, Caratinga-MG  
**Telefone:** (Adicionar na documentação)  
**WhatsApp:** (Adicionar na documentação)  
**Dr. Responsável:** Dr. Philipe Saraiva Cruz - CRM-MG 69.870  
**Google Reviews:** 4.9★ (102+ avaliações)  
**Parceria:** Amor e Saúde

**Repositório:** https://github.com/Sudo-psc/LAAS-website.git  
**Branch:** master  
**Último commit:** 6f92987 (docs: resumo de preços)

---

## ✅ CHECKLIST ANTES DO LANÇAMENTO

### Conteúdo
- [x] 8 planos configurados com preços corretos
- [x] 6 promoções criadas
- [x] Addons definidos (4 disponíveis)
- [ ] Imagens otimizadas (converter PNG → WebP)
- [x] Textos revisados (CFM-compliant)
- [x] Informações da clínica (endereço, CRM, CNPJ)

### Técnico
- [x] Build sem erros
- [x] TypeScript strict mode
- [ ] Lighthouse score > 90
- [ ] Teste em 3+ navegadores (Chrome, Safari, Firefox)
- [ ] Teste em 3+ dispositivos mobile
- [x] Git commits organizados
- [ ] Documentação README.md atualizada

### Legal
- [x] Disclaimer CFM no footer
- [x] CNPJ e dados da empresa
- [ ] Política de Privacidade (LGPD)
- [ ] Termos de Uso
- [ ] Regulamento do sorteio Ray-Ban
- [ ] Cookie banner (já implementado ✅)

### Marketing
- [ ] Meta title e description otimizados
- [ ] OpenGraph tags (Facebook/WhatsApp preview)
- [ ] Favicon configurado
- [ ] Google Analytics instalado
- [ ] Facebook Pixel (opcional)
- [ ] WhatsApp Business configurado

---

## 🎓 APRENDIZADOS E DECISÕES

### Decisões de Design
- **Pricing psicológico:** R$ 89, 109, 129 (não R$ 90, 110, 130)
- **Cores contrastantes:** Hierarquia visual clara nas promoções
- **Badges animados:** `animate-pulse` apenas em promos urgentes
- **Grid responsivo:** 1 col mobile → 2 tablet → 3 desktop

### Decisões de Negócio
- **Entrada baixa (R$ 89):** Maximizar conversão, compensar com addons
- **Topografia primeiros 30:** Criar escassez artificial e urgência
- **Sorteio Ray-Ban:** Engajamento contínuo, não apenas na aquisição
- **Planos família:** Aumentar LTV e reduzir churn (família não cancela junto)

### Decisões Técnicas
- **Next.js 15:** App Router + Turbopack para build rápido
- **Framer Motion:** Animações suaves sem peso excessivo
- **TypeScript strict:** Prevenir bugs em produção
- **Tailwind CSS 4:** Utility-first para desenvolvimento rápido

---

**Última revisão:** 1 de outubro de 2025  
**Próxima revisão:** Após completar tarefas de Prioridade Alta  
**Responsável:** Philipe Saraiva Cruz
