export interface ModuleItem {
  id: string;
  badge: string;
  tag?: string;
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
  largeCard?: boolean;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  originalPrice: string;
  currentPrice: string;
  iconName: 'telegram' | 'calculator' | 'headphones';
}

export interface TestimonialItem {
  id: string;
  name: string;
  locationScore: string;
  courseTag: string;
  feedback: string;
  avatarUrl: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
