// Types pour le contenu structuré
export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface CodeData {
  language: string;
  code: string;
  filename?: string;
}

export interface InfoBoxData {
  type: 'info' | 'warning' | 'tip' | 'success';
  title?: string;
  content: string;
}

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface VideoData {
  url: string;
  title: string;
  thumbnail?: string;
}

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

export interface QuizData {
  title?: string;
  questions: QuizQuestion[];
}

export interface ContentSection {
  type: 'text' | 'heading' | 'list' | 'table' | 'code' | 'quote' | 'infobox' | 'protip' | 'image' | 'video' | 'cta' | 'quiz';
  level?: 2 | 3 | 4;
  content: string | string[] | TableData | CodeData | InfoBoxData | ImageData | VideoData | CTAData | QuizData;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  expertise: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  secondaryKeywords: string[];
  intent: 'info' | 'commercial' | 'transactional';
  cluster: string;
  excerpt: string;
  content: ContentSection[];
  faq: FaqItem[];
  tableOfContents: boolean;
  readingTime: number;
  difficulty: 'debutant' | 'intermediaire' | 'avance';
  lastUpdated: string;
  author: string;
  relatedSlugs: string[];
}

export interface ClusterConfig {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  pillarPage: Article;
  childPages: Article[];
  icon: string;
  color: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface Formation {
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  modules: {
    title: string;
    lessons: string[];
  }[];
  features: string[];
  popular?: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  pricing: 'gratuit' | 'freemium' | 'payant';
  url: string;
  rating: number;
  pros: string[];
  cons: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  tip?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
    youtube: string;
  };
}
