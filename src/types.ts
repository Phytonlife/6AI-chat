export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  priceMonth: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  forWhom: string;
  paymentNote?: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  quote?: string;
}

export interface SixTool {
  number: string;
  title: string;
  description: string;
  detail: string;
  tag: string;
}

export interface HotLead {
  id: string;
  name: string;
  request: string;
  status: string;
  time: string;
  suggestedReply: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}
