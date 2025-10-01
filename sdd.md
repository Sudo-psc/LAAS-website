# ESPECIFICAÃ‡Ã•ES TÃ‰CNICAS DETALHADAS - LANDING PAGE SARAIVA VISION CARE LTDA
## Documento de Desenvolvimento Orientado por EspecificaÃ§Ãµes (SDD)

**VersÃ£o:** 1.0  
**Data:** 01 de outubro de 2025  
**Cliente:** Saraiva Vision Care LTDA  
**Projeto:** Landing Page para Lens-as-a-Service (LAAS)  
**Arquiteto:** EspecificaÃ§Ãµes SDD para Desenvolvimento  

---

## 1. VISÃƒO GERAL DO PROJETO

### 1.1 Contexto e Objetivos

A Saraiva Vision Care LTDA Ã© pioneira no Brasil em oferecer **Lens-as-a-Service** (LAAS), um modelo inovador de assinatura integrada de lentes de contato. Esta especificaÃ§Ã£o tÃ©cnica define os requisitos para desenvolvimento de uma landing page otimizada para conversÃ£o, com foco principal em:

- **Captura de leads qualificados** atravÃ©s de WhatsApp (canal prioritÃ¡rio)
- **ApresentaÃ§Ã£o clara** dos 8 planos de assinatura disponÃ­veis
- **EducaÃ§Ã£o do mercado** sobre o modelo LAAS
- **Compliance total** com regulamentaÃ§Ãµes mÃ©dicas (CFM/CRM) e LGPD

### 1.2 MÃ©tricas de Sucesso

**KPIs PrimÃ¡rios:**
- Taxa de conversÃ£o via WhatsApp: **meta 8%** (acima da mÃ©dia de 7.4% para serviÃ§os mÃ©dicos)
- Tempo na pÃ¡gina: **mÃ­nimo 2 minutos**
- Taxa de rejeiÃ§Ã£o: **mÃ¡ximo 45%**

**KPIs SecundÃ¡rios:**
- Engajamento com calculadora de economia: **30% dos visitantes**
- Clicks em planos de assinatura: **25% dos visitantes**
- Preenchimento de formulÃ¡rio de contato: **5% dos visitantes**

---

## 2. ARQUITETURA DE INFORMAÃ‡ÃƒO

### 2.1 Mapa de NavegaÃ§Ã£o

```
Landing Page Saraiva Vision
â”œâ”€â”€ Hero Section
â”‚   â”œâ”€â”€ Headline Principal
â”‚   â”œâ”€â”€ Subheadline (economia)
â”‚   â”œâ”€â”€ CTA Principal (WhatsApp)
â”‚   â””â”€â”€ Badge de ConfianÃ§a (Dr. Philipe)
â”œâ”€â”€ Problema-SoluÃ§Ã£o
â”‚   â”œâ”€â”€ Custos Tradicionais
â”‚   â”œâ”€â”€ SoluÃ§Ã£o LAAS
â”‚   â””â”€â”€ Calculadora de Economia
â”œâ”€â”€ Planos e PreÃ§os
â”‚   â”œâ”€â”€ Grade 8 Planos
â”‚   â”œâ”€â”€ Comparador Interativo
â”‚   â”œâ”€â”€ Add-ons DisponÃ­veis
â”‚   â””â”€â”€ Programa de IndicaÃ§Ã£o
â”œâ”€â”€ Como Funciona
â”‚   â”œâ”€â”€ Fluxo em 4 Etapas
â”‚   â”œâ”€â”€ Processo de Assinatura
â”‚   â””â”€â”€ BenefÃ­cios Ãšnicos
â”œâ”€â”€ Diferenciais e Credibilidade
â”‚   â”œâ”€â”€ Primeiro no Brasil
â”‚   â”œâ”€â”€ CertificaÃ§Ãµes ANVISA
â”‚   â”œâ”€â”€ Telemedicina IncluÃ­da
â”‚   â””â”€â”€ Depoimentos (quando disponÃ­veis)
â”œâ”€â”€ FAQ
â”‚   â”œâ”€â”€ 15 Perguntas Frequentes
â”‚   â”œâ”€â”€ Compliance MÃ©dico
â”‚   â””â”€â”€ LGPD e Privacidade
â””â”€â”€ Contato/ConversÃ£o
    â”œâ”€â”€ InformaÃ§Ãµes da ClÃ­nica
    â”œâ”€â”€ WhatsApp PrioritÃ¡rio
    â”œâ”€â”€ Chatbot Integrado
    â””â”€â”€ FormulÃ¡rio de PrÃ©-agendamento
```

### 2.2 Hierarquia de ConteÃºdo

**Prioridade Alta (Above the Fold):**
1. Headline principal com proposta de valor
2. Economia estimada (45-70%)
3. CTA WhatsApp primÃ¡rio
4. Badge mÃ©dico (Dr. Philipe Saraiva Cruz - CRM-MG 69.870)

**Prioridade MÃ©dia (Second Fold):**
1. ComparaÃ§Ã£o custos tradicionais vs LAAS
2. Calculadora interativa de economia
3. Grade de planos com preÃ§os

**Prioridade Baixa (Bottom Sections):**
1. Como funciona detalhado
2. FAQ expandida
3. InformaÃ§Ãµes de contato completas

### 2.3 Fluxo de UsuÃ¡rio - Jornada de ConversÃ£o

```
Visitante chega na pÃ¡gina
        â†“
LÃª headline + economia potencial
        â†“
[DECISÃƒO] Interessado?
    â†“ SIM                    â†“ NÃƒO
Usa calculadora          Sai da pÃ¡gina
    â†“
VÃª economia personalizada
    â†“
Explora planos de assinatura
    â†“
[DECISÃƒO] Plano adequado?
    â†“ SIM                    â†“ NÃƒO
Clica CTA WhatsApp       LÃª mais sobre como funciona
    â†“                           â†“
Conversa no WhatsApp     Retorna aos planos
    â†“                           â†“
CONVERSÃƒO              Clica CTA WhatsApp
                                â†“
                        CONVERSÃƒO
```

---

## 3. WIREFRAMES DESCRITIVOS DETALHADOS

### 3.1 Hero Section

**Layout:**
- Container full-width com gradient background
- Grid 60/40 (conteÃºdo/visual) em desktop
- Stacked em mobile

**Elementos ObrigatÃ³rios:**

**Headline Principal (H1):**
```
"Lentes de Contato por Assinatura
Economize atÃ© 70% com o Primeiro LAAS do Brasil"
```

**Subheadline (H2):**
```
"De R$ 5.280/ano para R$ 1.950/ano - A revoluÃ§Ã£o chegou Ã s suas lentes"
```

**Badge de Credibilidade:**
```
[MÃ‰DICO] Dr. Philipe Saraiva Cruz - CRM-MG 69.870
Especialista em AdaptaÃ§Ã£o de Lentes de Contato
```

**CTA Principal:**
```
[BOTÃƒO VERDE] ðŸ’¬ Falar no WhatsApp Agora
```

**CTA SecundÃ¡rio:**
```
[LINK] ðŸ“± (33) 99860-1427 - LigaÃ§Ã£o Direta
```

**Visual Side:**
- Imagem de lentes de contato high-tech
- Badge "ANVISA Certificado"
- Badge "Primeiro no Brasil"

### 3.2 Problema-SoluÃ§Ã£o Section

**Layout:**
- Duas colunas contrastantes
- Vermelho (problema) vs Verde (soluÃ§Ã£o)

**Coluna Esquerda - Problema:**
```
âŒ MODELO TRADICIONAL (CUSTOSO)
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
Lentes mensais:      R$ 4.200/ano
Consultas:           R$ 400/ano  
SoluÃ§Ãµes limpeza:    R$ 480/ano
RevisÃ£o de grau:     R$ 200/ano
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
TOTAL:               R$ 5.280/ano
```

**Coluna Direita - SoluÃ§Ã£o:**
```
âœ… SARAIVA VISION LAAS
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
Plano Conforto Anual: R$ 180,55/mÃªs
                     R$ 2.167/ano
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
ECONOMIA:            R$ 3.113/ano
                     (59% menos)
```

**Calculadora de Economia (Centralizada):**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  ðŸ’° CALCULE SUA ECONOMIA REAL          â”‚
â”‚                                         â”‚
â”‚  Quanto gasta hoje por ano?             â”‚
â”‚  [R$ ______ ] (input)                  â”‚
â”‚                                         â”‚
â”‚  Tipo de lente atual:                   â”‚
â”‚  [â–¼ Selecionar] (dropdown)             â”‚
â”‚                                         â”‚
â”‚  [CALCULAR ECONOMIA] (botÃ£o)           â”‚
â”‚                                         â”‚
â”‚  SUA ECONOMIA: R$ ___/ano               â”‚
â”‚  (__% de desconto)                      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 3.3 Planos e PreÃ§os Section

**Layout:**
- Grid responsivo 4x2 (desktop) â†’ 2x4 (tablet) â†’ 1x8 (mobile)
- Cards com destaque para melhor custo-benefÃ­cio

**Card Structure (para cada plano):**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ [BADGE] Mais EconÃ´mico              â”‚ â† Condicional
â”‚                                     â”‚
â”‚ NOME DO PLANO                       â”‚
â”‚ DescriÃ§Ã£o breve do tipo de lente    â”‚
â”‚                                     â”‚
â”‚ R$ XXX,XX/mÃªs                       â”‚
â”‚ ou R$ X.XXX,XX Ã  vista              â”‚
â”‚                                     â”‚
â”‚ âœ“ BenefÃ­cio 1                       â”‚
â”‚ âœ“ BenefÃ­cio 2                       â”‚
â”‚ âœ“ BenefÃ­cio 3                       â”‚
â”‚                                     â”‚
â”‚ [SELECIONAR PLANO] (botÃ£o)          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Planos com Destaque Visual:**
1. **Conforto Anual** - Badge "MAIOR ECONOMIA"
2. **BÃ¡sico Mensal** - Badge "MAIS POPULAR"
3. **Escleral Premium** - Badge "CASOS COMPLEXOS"

**Comparador Interativo:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ COMPARAR PLANOS                                         â”‚
â”‚                                                         â”‚
â”‚ Filtros:                                                â”‚
â”‚ â–¡ EsfÃ©ricas â–¡ TÃ³ricas â–¡ Multifocais â–¡ RGP â–¡ Esclerais   â”‚
â”‚ â–¡ Mensal â–¡ Anual                                        â”‚
â”‚ Faixa de preÃ§o: [R$ 180] â”€â”€â”€â”€â”€â—â”€â”€â”€ [R$ 910]           â”‚
â”‚                                                         â”‚
â”‚ [X planos encontrados]                                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 3.4 Add-ons Section

**Layout:**
- Grid 4x2 para add-ons principais
- Calculadora de valor total no final

**Add-on Card:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ NOME DO ADD-ON                â”‚
â”‚ Breve descriÃ§Ã£o               â”‚
â”‚                               â”‚
â”‚ R$ XX/mÃªs ou R$ XX sob demanda â”‚
â”‚                               â”‚
â”‚ â–¡ Adicionar ao plano          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Calculadora de Add-ons:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ MONTE SEU PLANO PERSONALIZADO          â”‚
â”‚                                         â”‚
â”‚ Plano base:    [Dropdown] R$ XXX/mÃªs   â”‚
â”‚ Add-ons:       [Lista selecionados]    â”‚
â”‚                                         â”‚
â”‚ â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”    â”‚
â”‚ TOTAL MENSAL:  R$ XXX,XX               â”‚
â”‚ TOTAL ANUAL:   R$ X.XXX,XX             â”‚
â”‚                                         â”‚
â”‚ [SOLICITAR ORÃ‡AMENTO] (WhatsApp)       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 3.5 Como Funciona Section

**Layout:**
- Timeline horizontal (desktop) / vertical (mobile)
- 4 etapas numeradas

**Timeline Structure:**
```
1ï¸âƒ£ CONSULTA INICIAL
    â†“
Agendamento via WhatsApp
AvaliaÃ§Ã£o oftalmolÃ³gica completa
DefiniÃ§Ã£o do melhor plano

    â†“
2ï¸âƒ£ ADAPTAÃ‡ÃƒO
    â†“
Teste de diferentes marcas
PerÃ­odo de adaptaÃ§Ã£o de 15 dias
Ajustes necessÃ¡rios inclusos

    â†“
3ï¸âƒ£ ASSINATURA
    â†“
Escolha do plano ideal
Primeiro envio grÃ¡tis
Setup de entrega automÃ¡tica

    â†“
4ï¸âƒ£ ACOMPANHAMENTO
    â†“
Entregas semestrais automÃ¡ticas
Telemedicina 24/7 incluÃ­da
Suporte via WhatsApp
```

### 3.6 Diferenciais Section

**Layout:**
- Grid 3x2 com Ã­cones grandes
- Badges de certificaÃ§Ã£o

**Diferenciais Cards:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚        ðŸ† ÃCONE GRANDE             â”‚
â”‚                                     â”‚
â”‚ DIFERENCIAL PRINCIPAL               â”‚
â”‚ DescriÃ§Ã£o detalhada do benefÃ­cio    â”‚
â”‚ Ãºnico que oferecemos                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Lista de Diferenciais:**
1. ðŸ‡§ðŸ‡· **Primeiro LAAS do Brasil**
2. ðŸ“± **Telemedicina IncluÃ­da**
3. ðŸšš **Frete GrÃ¡tis Nacional**
4. ðŸ‘¥ **Programa de IndicaÃ§Ã£o**
5. âš¡ **Add-ons sob Demanda**
6. ðŸ¥ **Lentes Certificadas ANVISA**

### 3.7 FAQ Section

**Layout:**
- AcordeÃ£o expansÃ­vel
- Busca interna
- CategorizaÃ§Ã£o por temas

**Estrutura FAQ:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ ðŸ” Buscar pergunta... [input]                      â”‚
â”‚                                                     â”‚
â”‚ Categorias:                                         â”‚
â”‚ [Todas] [Planos] [Pagamento] [MÃ©dico] [TÃ©cnico]   â”‚
â”‚                                                     â”‚
â”‚ â–¼ Como funciona a assinatura?                      â”‚
â”‚   [Resposta expandida...]                          â”‚
â”‚                                                     â”‚
â”‚ â–¶ Posso cancelar a qualquer momento?               â”‚
â”‚ â–¶ As lentes sÃ£o certificadas pela ANVISA?          â”‚
â”‚ â–¶ Como funciona a telemedicina?                    â”‚
â”‚                                                     â”‚
â”‚ [VER TODAS AS PERGUNTAS] (expandir)                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 3.8 Contato/Footer Section

**Layout:**
- 3 colunas: ClÃ­nica + Contato + Legal

**Coluna 1 - InformaÃ§Ãµes da ClÃ­nica:**
```
SARAIVA VISION CARE LTDA
CNPJ: 53.864.119/0001-79

Dr. Philipe Saraiva Cruz
CRM-MG 69.870
Especialista em Lentes de Contato

Rua Catarina Maria Passos, 97
Santa Zita, Caratinga/MG

â° Seg-Sex: 8h-18h | SÃ¡b: 8h-12h
```

**Coluna 2 - Contato PrioritÃ¡rio:**
```
ðŸ’¬ WhatsApp: (33) 99860-1427
ðŸ“§ Email: saraivavision@gmail.com
ðŸŒ Site: saraivavision.com.br
ðŸ“± Instagram: @saraiva_vision

ðŸ¤– Chatbot 24/7:
[ACESSAR CHATBOT] (link)
```

**Coluna 3 - Legal e Compliance:**
```
ðŸ“‹ PolÃ­tica de Privacidade
ðŸ”’ Termos de Uso  
âš–ï¸ LGPD Compliance
ðŸ¥ CÃ³digo de Ã‰tica MÃ©dica CFM

ðŸŽ¯ "Consulte riscos e benefÃ­cios 
com seu oftalmologista"
```

---

## 4. ESPECIFICAÃ‡Ã•ES FUNCIONAIS

### 4.1 Calculadora de Economia

**Funcionalidade Principal:**
Input de gastos atuais â†’ Output de economia personalizada

**Inputs NecessÃ¡rios:**
```javascript
{
  gastoAtual: number, // R$ por ano
  tipoLente: string,  // "esferica"|"torica"|"multifocal"|"rgp"
  frequenciaUso: string, // "diario"|"ocasional"|"intensivo"
  marcaAtual: string // opcional
}
```

**LÃ³gica de CÃ¡lculo:**
```javascript
function calcularEconomia(dados) {
  const planosRecomendados = filtrarPlanos(dados.tipoLente);
  const melhorPlano = encontrarMelhorCustoBeneficio(planosRecomendados);
  
  const custoAnualLAAS = melhorPlano.precoMensal * 12;
  const economia = dados.gastoAtual - custoAnualLAAS;
  const percentualEconomia = (economia / dados.gastoAtual) * 100;
  
  return {
    planoRecomendado: melhorPlano,
    economiaAnual: economia,
    percentualDesconto: percentualEconomia,
    economiaBonus: calcularBeneficiosAdicionais()
  };
}
```

**Interface de Resultado:**
```
ðŸ’° SUA ECONOMIA PERSONALIZADA
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
Gasto atual:          R$ X.XXX/ano
Com Saraiva Vision:   R$ X.XXX/ano
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
ECONOMIA TOTAL:       R$ X.XXX/ano
                      (XX% de desconto)

âœ… Plano recomendado: [NOME]
âœ… Telemedicina incluÃ­da
âœ… Frete grÃ¡tis
âœ… Garantia de adaptaÃ§Ã£o

[FALAR NO WHATSAPP] [VER PLANO]
```

### 4.2 Comparador de Planos

**Funcionalidade:**
Filtros mÃºltiplos â†’ Grid responsivo com planos filtrados

**Filtros DisponÃ­veis:**
```javascript
{
  tipoLente: ["esfericas", "toricas", "multifocais", "rgp", "esclerais"],
  modalidade: ["mensal", "anual"],
  faixaPreco: {min: 180, max: 910},
  necessidadeEspecial: ["ceratocone", "presbiopia", "astigmatismo"]
}
```

**Features do Comparador:**
- **Filtro por tipo:** Checkbox mÃºltipla seleÃ§Ã£o
- **Slider de preÃ§o:** Range R$ 180 - R$ 910
- **OrdenaÃ§Ã£o:** PreÃ§o â†‘â†“, Economia â†‘â†“, Popularidade
- **ComparaÃ§Ã£o direta:** AtÃ© 3 planos lado-a-lado
- **Reset filtros:** BotÃ£o limpar tudo

**Estado dos Cards Filtrados:**
```javascript
// Card visÃ­vel
.plano-card.ativo {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease;
}

// Card oculto por filtro
.plano-card.inativo {
  opacity: 0.3;
  transform: scale(0.95);
  pointer-events: none;
}

// Card em destaque (melhor match)
.plano-card.recomendado {
  border: 2px solid #00C851;
  box-shadow: 0 4px 20px rgba(0,200,81,0.3);
}
```

### 4.3 Calculadora de Add-ons

**Funcionalidade:**
SeleÃ§Ã£o mÃºltipla de add-ons â†’ CÃ¡lculo automÃ¡tico do valor total

**Add-ons com PreÃ§os:**
```javascript
const addOns = {
  consultaSemestral: {
    nome: "Consulta Semestral",
    tipo: "assinatura", 
    preco: 12, // R$/mÃªs
    descricao: "Check-up e ajustes regulares"
  },
  consultaPreferencial: {
    nome: "Consulta Preferencial", 
    tipo: "assinatura",
    preco: 20,
    descricao: "Agendamento com prioridade"
  },
  trocaGrauExpress: {
    nome: "Troca de Grau Express",
    tipo: "demanda", 
    preco: 49,
    descricao: "MudanÃ§a de grau em 48h"
  },
  // ... outros add-ons
};
```

**LÃ³gica de CÃ¡lculo Total:**
```javascript
function calcularValorTotal(planoBase, addOnsSelecionados) {
  let valorMensal = planoBase.precoMensal;
  let valorAnual = planoBase.precoAnual || (valorMensal * 12);
  
  addOnsSelecionados.forEach(addon => {
    if (addon.tipo === "assinatura") {
      valorMensal += addon.preco;
      valorAnual += addon.preco * 12;
    }
    // Add-ons sob demanda nÃ£o entram no valor mensal
  });
  
  return {
    mensal: valorMensal,
    anual: valorAnual,
    economia: calcularEconomiaComAddons(valorAnual),
    addOnsDemanda: getAddOnsDemanda(addOnsSelecionados)
  };
}
```

### 4.4 FormulÃ¡rio de PrÃ©-agendamento

**Campos ObrigatÃ³rios (LGPD compliant):**
```html
<form id="pre-agendamento" data-destino="whatsapp">
  <!-- Dados pessoais -->
  <input name="nome" required placeholder="Nome completo">
  <input name="telefone" required type="tel" placeholder="WhatsApp">
  <input name="email" type="email" placeholder="E-mail (opcional)">
  
  <!-- Dados da necessidade -->
  <select name="tipoLente" required>
    <option value="">Tipo de lente atual</option>
    <option value="nao-uso">NÃ£o uso lentes</option>
    <option value="esfericas">EsfÃ©ricas</option>
    <option value="toricas">TÃ³ricas (astigmatismo)</option>
    <option value="multifocais">Multifocais (presbiopia)</option>
    <option value="rgp">RGP (ceratocone)</option>
  </select>
  
  <select name="horarioPreferencial">
    <option value="">HorÃ¡rio preferencial</option>
    <option value="manha">ManhÃ£ (8h-12h)</option>
    <option value="tarde">Tarde (13h-18h)</option>
    <option value="sabado">SÃ¡bado (8h-12h)</option>
  </select>
  
  <!-- Consentimentos LGPD -->
  <div class="consentimentos">
    <label>
      <input type="checkbox" name="consentimento" required>
      Li e concordo com a <a href="/privacidade">PolÃ­tica de Privacidade</a>
    </label>
    
    <label>
      <input type="checkbox" name="whatsapp-contato">
      Autorizo contato via WhatsApp para agendamento
    </label>
    
    <label>
      <input type="checkbox" name="newsletter">
      Quero receber dicas sobre saÃºde ocular (opcional)
    </label>
  </div>
  
  <button type="submit">AGENDAR PELO WHATSAPP</button>
</form>
```

**ValidaÃ§Ã£o e SubmissÃ£o:**
```javascript
function processarAgendamento(formData) {
  // ValidaÃ§Ã£o client-side
  if (!validarTelefone(formData.telefone)) {
    return mostrarErro("Telefone invÃ¡lido");
  }
  
  // Montar mensagem para WhatsApp
  const mensagem = gerarMensagemWhatsApp(formData);
  
  // Redirecionar para WhatsApp
  const whatsappURL = `https://wa.me/5533998601427?text=${encodeURIComponent(mensagem)}`;
  
  // Analytics
  gtag('event', 'form_submit', {
    'event_category': 'engagement',
    'event_label': 'pre-agendamento'
  });
  
  window.open(whatsappURL, '_blank');
}
```

### 4.5 IntegraÃ§Ã£o WhatsApp

**BotÃ£o Flutuante (Sticky):**
```css
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
```

**Links Diretos Contextuais:**
```javascript
// Links especÃ­ficos por seÃ§Ã£o da pÃ¡gina
const whatsappLinks = {
  hero: "https://wa.me/5533998601427?text=OlÃ¡! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.",
  
  economia: "https://wa.me/5533998601427?text=Oi! Calculei minha economia no site e gostaria de agendar uma consulta para comeÃ§ar.",
  
  planos: "https://wa.me/5533998601427?text=OlÃ¡! Estou interessado no [PLANO] por R$ [VALOR]/mÃªs. Quando posso agendar?",
  
  addons: "https://wa.me/5533998601427?text=Oi! Quero montar um plano personalizado com add-ons. Pode me ajudar?",
  
  duvidas: "https://wa.me/5533998601427?text=OlÃ¡! Tenho algumas dÃºvidas sobre o LAAS. Ã‰ possÃ­vel conversar?"
};
```

---

## 5. DESIGN SYSTEM

### 5.1 Paleta de Cores

**Cores PrimÃ¡rias:**
```css
:root {
  /* Verde SaÃºde - Cor principal */
  --verde-primario: #00C851;
  --verde-hover: #00A043;
  --verde-light: #E8F5E8;
  
  /* Azul ConfianÃ§a */
  --azul-medico: #2E7D32;
  --azul-claro: #E3F2FD;
  
  /* Cinzas */
  --cinza-dark: #263238;
  --cinza-medio: #607D8B;
  --cinza-claro: #F5F5F5;
  --branco: #FFFFFF;
  
  /* Accent Colors */
  --laranja-economia: #FF6F00;
  --vermelho-problema: #D32F2F;
  --dourado-premium: #FFB300;
}
```

**AplicaÃ§Ã£o das Cores:**
- **Verde PrimÃ¡rio:** CTAs principais, badges de economia
- **Azul MÃ©dico:** Headers, informaÃ§Ãµes mÃ©dicas, credibilidade
- **Laranja:** Valores de economia, destaques financeiros
- **Vermelho:** Problemas do modelo tradicional
- **Dourado:** Planos premium, diferenciais Ãºnicos

### 5.2 Tipografia

**Fontes Selecionadas:**
```css
/* ImportaÃ§Ã£o Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

/* Sistema de Fontes */
--font-headings: 'Poppins', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-monospace: 'SF Mono', Monaco, monospace;
```

**Hierarquia TipogrÃ¡fica:**
```css
/* Headlines */
h1 { 
  font: 700 2.5rem/1.2 var(--font-headings);
  margin-bottom: 1rem;
}

h2 { 
  font: 600 2rem/1.3 var(--font-headings); 
  margin-bottom: 0.75rem;
}

h3 { 
  font: 600 1.5rem/1.4 var(--font-headings);
  margin-bottom: 0.5rem;
}

/* Body Text */
body {
  font: 400 1rem/1.6 var(--font-body);
  color: var(--cinza-dark);
}

.lead {
  font: 500 1.125rem/1.5 var(--font-body);
  color: var(--cinza-medio);
}

.small {
  font: 400 0.875rem/1.4 var(--font-body);
}

/* PreÃ§os e NÃºmeros */
.preco {
  font: 700 1.5rem/1.2 var(--font-monospace);
  color: var(--verde-primario);
}

.economia {
  font: 800 2rem/1.1 var(--font-headings);
  color: var(--laranja-economia);
}
```

**Responsividade TipogrÃ¡fica:**
```css
/* Mobile First */
@media (max-width: 768px) {
  h1 { font-size: 1.875rem; }
  h2 { font-size: 1.5rem; }
  .economia { font-size: 1.5rem; }
}

/* Desktop */
@media (min-width: 1200px) {
  h1 { font-size: 3rem; }
  .economia { font-size: 2.5rem; }
}
```

### 5.3 Componentes ReutilizÃ¡veis

**BotÃµes (CTAs):**
```css
/* BotÃ£o PrimÃ¡rio - WhatsApp */
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  padding: 1rem 2rem;
  background: #25D366;
  color: white;
  font: 600 1rem var(--font-body);
  text-decoration: none;
  
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-whatsapp:hover {
  background: #20B858;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
}

/* BotÃ£o SecundÃ¡rio */
.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--azul-medico);
  border: 2px solid var(--azul-medico);
  border-radius: 30px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--azul-medico);
  color: white;
}
```

**Cards de Plano:**
```css
.plano-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  position: relative;
  overflow: hidden;
}

.plano-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.plano-card.destaque {
  border-color: var(--laranja-economia);
  position: relative;
}

.plano-card.destaque::before {
  content: "MAIS ECONÃ”MICO";
  position: absolute;
  top: 0;
  right: 0;
  background: var(--laranja-economia);
  color: white;
  padding: 0.5rem 1rem;
  font: 600 0.75rem var(--font-body);
  text-transform: uppercase;
  border-radius: 0 16px 0 16px;
}

.plano-preco {
  font: 700 2rem/1.2 var(--font-monospace);
  color: var(--verde-primario);
  margin: 1rem 0;
}

.plano-beneficios {
  list-style: none;
  padding: 0;
}

.plano-beneficios li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font: 400 0.9rem var(--font-body);
}

.plano-beneficios li::before {
  content: "âœ“";
  color: var(--verde-primario);
  font-weight: 700;
}
```

**Badges de Credibilidade:**
```css
.badge-medico {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  background: var(--azul-claro);
  color: var(--azul-medico);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font: 500 0.875rem var(--font-body);
  
  border: 1px solid rgba(46, 125, 50, 0.2);
}

.badge-anvisa {
  background: linear-gradient(135deg, #FFB300, #FF8F00);
  color: white;
  font-weight: 600;
}

.badge-primeiro {
  background: linear-gradient(135deg, #00C851, #00A043);
  color: white;
  font-weight: 600;
  animation: badge-shine 3s infinite;
}

@keyframes badge-shine {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

### 5.4 Ãcones e Elementos Visuais

**Ãcone System:**
```css
/* Ãcones via Font Awesome ou custom SVGs */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  vertical-align: middle;
}

.icon-whatsapp {
  fill: #25D366;
}

.icon-economia {
  fill: var(--laranja-economia);
}

.icon-check {
  fill: var(--verde-primario);
}

/* Ãcones grandes para diferenciais */
.icon-large {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}
```

**Elementos Decorativos:**
```css
/* Gradients */
.gradient-hero {
  background: linear-gradient(135deg, var(--azul-medico) 0%, var(--verde-primario) 100%);
}

.gradient-economia {
  background: linear-gradient(90deg, var(--laranja-economia) 0%, #FFB300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Shapes e DecoraÃ§Ãµes */
.shape-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  opacity: 0.1;
}

.decoration-dots::after {
  content: "â€¢ â€¢ â€¢ â€¢ â€¢";
  color: var(--verde-primario);
  font-size: 2rem;
  line-height: 0.5;
  opacity: 0.3;
}
```

### 5.5 Grid System e Breakpoints

**Container System:**
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container { padding: 0 2rem; }
}

@media (min-width: 1200px) {
  .container { padding: 0; }
}
```

**Grid FlexÃ­vel:**
```css
.grid {
  display: grid;
  gap: 2rem;
}

/* Grid Responsivo para Planos */
.grid-planos {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-planos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .grid-planos {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Grid Hero 60/40 */
.grid-hero {
  grid-template-columns: 1fr;
  align-items: center;
}

@media (min-width: 1024px) {
  .grid-hero {
    grid-template-columns: 60% 40%;
  }
}
```

**Breakpoints Definidos:**
```css
:root {
  --bp-mobile: 480px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-wide: 1200px;
}

/* Mixins CSS para breakpoints */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only { display: none; }
}

.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only { display: block; }
}
```

---

## 6. REQUISITOS TÃ‰CNICOS

### 6.1 Stack TecnolÃ³gico Recomendado

**Frontend Framework:**
```json
{
  "framework": "Next.js 14+ (App Router)",
  "linguagem": "TypeScript",
  "styling": "Tailwind CSS + CSS Modules",
  "componentizacao": "React Components",
  "estado": "Zustand (para carrinho de add-ons)",
  "formularios": "React Hook Form + Zod validation"
}
```

**Justificativa da Escolha:**
- **Next.js:** SSG para performance, SEO otimizado, fÃ¡cil deploy
- **TypeScript:** Type safety, melhor DX, menos bugs
- **Tailwind:** Desenvolvimento rÃ¡pido mobil