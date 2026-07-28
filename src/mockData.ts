import { CallRecord, Client, TaskItem } from './types';

export const INITIAL_CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Rajesh Sharma',
    phone: '+91 98200 12345',
    email: 'rajesh.sharma@corpmail.com',
    policyType: 'Term Life Insurance (1 Cr)',
    totalValue: '₹48,000 / yr',
    lastContactDate: 'Today, 2:30 PM',
    status: 'In Discussion',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c2',
    name: 'Priya Patel',
    phone: '+91 99870 54321',
    email: 'priya.patel@designstudio.in',
    policyType: 'Mutual Fund SIP Portfolio',
    totalValue: '₹25,000 / mo',
    lastContactDate: 'Yesterday, 11:15 AM',
    status: 'Client',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c3',
    name: 'Amit Verma',
    phone: '+91 97110 88990',
    email: 'amit.verma@techsolutions.com',
    policyType: 'Health Floater Plan',
    totalValue: '₹32,000 / yr',
    lastContactDate: '2026-07-20',
    status: 'Active Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'c4',
    name: 'Vikram Mehta',
    phone: '+91 98450 67123',
    email: 'vikram.m@realestate.in',
    policyType: 'Retirement Annuity Plan',
    totalValue: '₹1,50,000 / yr',
    lastContactDate: '2026-07-18',
    status: 'In Discussion',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
];

export const INITIAL_CALLS: CallRecord[] = [
  {
    id: 'call-1',
    clientName: 'Rajesh Sharma',
    clientPhone: '+91 98200 12345',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    date: '2026-07-22',
    time: '02:30 PM',
    duration: '06m 42s',
    audioLengthSeconds: 402,
    topic: '1 Cr Term Insurance Quote & Critical Illness Rider',
    dealStage: 'Proposal Sent',
    sentiment: 'Positive',
    summary: 'Reviewed HDFC Life 1 Cr term insurance proposal. Rajesh inquired about critical illness rider cost and tax exemptions under 80C. Agreed to review quote with spouse tonight.',
    keyTakeaways: [
      'Wants 1 Cr sum assured up to age 65',
      'Requested inclusion of 20-bed critical illness rider option',
      'Requested follow-up via WhatsApp tomorrow afternoon'
    ],
    tasks: [
      'Send modified PDF comparison with critical illness add-on via WhatsApp',
      'Schedule follow-up call for tomorrow at 4:00 PM',
      'Prepare tax saving calculation note for Section 80C'
    ],
    whatsappDraft: 'Hi Rajesh! 👋 Thank you for taking the time to speak today. As requested, here is the updated 1 Cr term policy illustration including the 20 Lac critical illness rider option. Please let me know once you & your spouse have reviewed it, and we can speak tomorrow at 4 PM!'
  },
  {
    id: 'call-2',
    clientName: 'Priya Patel',
    clientPhone: '+91 99870 54321',
    clientAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    date: '2026-07-21',
    time: '11:15 AM',
    duration: '04m 15s',
    audioLengthSeconds: 255,
    topic: 'Quarterly SIP Portfolio Rebalancing',
    dealStage: 'Closing',
    sentiment: 'Positive',
    summary: 'Discussed increasing monthly SIP by ₹5,000 into flexi-cap funds following equity market performance. Priya authorized the SIP mandate update.',
    keyTakeaways: [
      'Increasing flexi-cap SIP allocation from ₹20k to ₹25k',
      'Pleased with 18.4% annual returns over last 3 years',
      'Requested digital mandate authorization link'
    ],
    tasks: [
      'Generate step-up SIP link and send to Priya',
      'Update CRM portfolio target for Q3'
    ],
    whatsappDraft: 'Hi Priya! 🌟 Wonderful catching up today. I have initiated your monthly SIP step-up to ₹25,000 as agreed. Please tap the secure link below to complete the mandate authorization: https://echo.ai/mandate/p891'
  },
  {
    id: 'call-3',
    clientName: 'Amit Verma',
    clientPhone: '+91 97110 88990',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    date: '2026-07-20',
    time: '05:45 PM',
    duration: '08m 10s',
    audioLengthSeconds: 490,
    topic: 'Family Health Insurance Floater (15 Lac)',
    dealStage: 'Needs Analysis',
    sentiment: 'Concerned',
    summary: 'Amit expressed concerns over room rent capping and co-pay clauses in his current company health insurance. Evaluated top-up options for family of 4.',
    keyTakeaways: [
      'Concerned about corporate cover ending if he switches jobs',
      'Looking for zero co-pay and no room rent sub-limits',
      'Wants quotes for Star Health and Care Advantage'
    ],
    tasks: [
      'Prepare no-copay health floater comparison matrix',
      'Send pre-existing condition questionnaire'
    ],
    whatsappDraft: 'Hi Amit! Here is a summary of the zero room-rent cap health plans we evaluated. I have highlighted Care Advantage 15L Floater which matches your requirements. Let me know if you would like me to lock in this rate before month-end!'
  }
];

export const INITIAL_TASKS: TaskItem[] = [
  {
    id: 't1',
    clientId: 'c1',
    clientName: 'Rajesh Sharma',
    title: 'Send modified PDF comparison with critical illness add-on via WhatsApp',
    dueDate: 'Today, 5:00 PM',
    priority: 'High',
    completed: false
  },
  {
    id: 't2',
    clientId: 'c1',
    clientName: 'Rajesh Sharma',
    title: 'Schedule follow-up call for tomorrow at 4:00 PM',
    dueDate: 'Tomorrow, 4:00 PM',
    priority: 'High',
    completed: false
  },
  {
    id: 't3',
    clientId: 'c2',
    clientName: 'Priya Patel',
    title: 'Generate step-up SIP link and send to Priya',
    dueDate: 'Today, 6:00 PM',
    priority: 'Medium',
    completed: true
  },
  {
    id: 't4',
    clientId: 'c3',
    clientName: 'Amit Verma',
    title: 'Prepare no-copay health floater comparison matrix',
    dueDate: '2026-07-23',
    priority: 'High',
    completed: false
  }
];
