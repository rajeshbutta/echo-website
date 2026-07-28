export type ViewType = 'home' | 'pricing' | 'download' | 'login' | 'dashboard';
export type UserRole = 'advisor' | 'admin';

export interface CallRecord {
  id: string;
  clientName: string;
  clientPhone: string;
  clientAvatar?: string;
  date: string;
  time: string;
  duration: string;
  topic: string;
  dealStage: 'Needs Analysis' | 'Proposal Sent' | 'Underwriting' | 'Closing' | 'Policy Issued';
  sentiment: 'Positive' | 'Neutral' | 'Concerned';
  summary: string;
  keyTakeaways: string[];
  tasks: string[];
  whatsappDraft: string;
  audioLengthSeconds: number;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  policyType: string;
  totalValue: string;
  lastContactDate: string;
  status: 'Active Lead' | 'In Discussion' | 'Client';
  avatar: string;
}

export interface TaskItem {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
}
