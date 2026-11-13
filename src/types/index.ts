export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  problemSolved: string;
  scopeOfWork: string[];
  equipment: string[];
  benefits: string[];
  limitations: string;
  tagline: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Solar Panels' | 'Inverters' | 'Battery Storage' | 'Accessories';
  capacityOrPower: string;
  shortDescription: string;
  specifications: { [key: string]: string };
  applications: string[];
  features: string[];
  image: string;
  inStock: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Institutional' | 'Agricultural';
  location: string;
  capacity: string;
  overview: string;
  scopeOfWork: string[];
  equipmentInstalled: string[];
  outcomes: string[];
  image: string;
  completionYear: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Quotations' | 'Technical' | 'Maintenance';
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  enquiryType: string;
  location?: string;
  estimatedBudget?: string;
  message: string;
  consent: boolean;
}

