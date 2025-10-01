// Google Analytics 4 and Meta Pixel tracking utilities

export interface AnalyticsEvent {
  event: string;
  category: string;
  label: string;
  value?: number;
  [key: string]: any;
}

// Event names constants
export const EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  CALCULATOR_USE: 'calculator_use',
  PLAN_SELECT: 'plan_select',
  PLAN_VIEW: 'plan_view',
  FAQ_EXPAND: 'faq_expand',
  FORM_SUBMIT: 'form_submit',
  PAGE_SCROLL_75: 'scroll_75_percent',
  SECTION_VIEW: 'section_view',
  CTA_CLICK: 'cta_click'
} as const;

/**
 * Track custom event in Google Analytics 4
 */
export function trackEvent(event: AnalyticsEvent): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', event.event, event);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', event);
  }
}

/**
 * Track WhatsApp click with context
 */
export function trackWhatsAppClick(section: string, planId?: string): void {
  trackEvent({
    event: EVENTS.WHATSAPP_CLICK,
    category: 'conversion',
    label: section,
    section,
    plan_id: planId
  });
}

/**
 * Track calculator usage
 */
export function trackCalculatorUse(currentCost: number, savings: number, savingsPercentage: number): void {
  trackEvent({
    event: EVENTS.CALCULATOR_USE,
    category: 'engagement',
    label: 'calculator_completed',
    value: savings,
    current_cost: currentCost,
    savings,
    savings_percentage: savingsPercentage
  });
}

/**
 * Track plan selection
 */
export function trackPlanSelect(planId: string, planName: string, price: number): void {
  trackEvent({
    event: EVENTS.PLAN_SELECT,
    category: 'engagement',
    label: planName,
    value: price,
    plan_id: planId,
    plan_name: planName
  });
}

/**
 * Track plan view
 */
export function trackPlanView(planId: string, planName: string): void {
  trackEvent({
    event: EVENTS.PLAN_VIEW,
    category: 'engagement',
    label: planName,
    plan_id: planId,
    plan_name: planName
  });
}

/**
 * Track FAQ interaction
 */
export function trackFAQExpand(question: string): void {
  trackEvent({
    event: EVENTS.FAQ_EXPAND,
    category: 'engagement',
    label: question,
    question
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formType: string): void {
  trackEvent({
    event: EVENTS.FORM_SUBMIT,
    category: 'conversion',
    label: formType,
    form_type: formType
  });
}

/**
 * Track page scroll depth
 */
export function trackScrollDepth(percentage: number): void {
  trackEvent({
    event: EVENTS.PAGE_SCROLL_75,
    category: 'engagement',
    label: `scroll_${percentage}`,
    value: percentage
  });
}

/**
 * Track section view (when user scrolls to section)
 */
export function trackSectionView(sectionName: string): void {
  trackEvent({
    event: EVENTS.SECTION_VIEW,
    category: 'engagement',
    label: sectionName,
    section: sectionName
  });
}

/**
 * Initialize scroll tracking
 */
export function initScrollTracking(): void {
  if (typeof window === 'undefined') return;

  let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
  };

  const trackScroll = () => {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    Object.keys(scrollTracked).forEach((percentage) => {
      const pct = parseInt(percentage);
      if (scrollPercentage >= pct && !scrollTracked[pct as keyof typeof scrollTracked]) {
        scrollTracked[pct as keyof typeof scrollTracked] = true;
        trackScrollDepth(pct);
      }
    });
  };

  window.addEventListener('scroll', trackScroll, { passive: true });

  // Cleanup
  return () => window.removeEventListener('scroll', trackScroll);
}

/**
 * Track conversion (WhatsApp click is main conversion)
 */
export function trackConversion(source: string, value?: number): void {
  // Google Analytics conversion
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID,
      value: value,
      currency: 'BRL',
      source: source
    });
  }

  // Meta Pixel conversion
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      source: source,
      value: value,
      currency: 'BRL'
    });
  }
}
