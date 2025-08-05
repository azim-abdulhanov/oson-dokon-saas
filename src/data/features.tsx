import { BarChart3, CreditCard, ShoppingBag } from 'lucide-react';

export const features = [
  {
    id: 1,
    icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
    title: "15 Daqiqada Tayyor",
    description: "Sizning onlayn do'koningiz 15 daqiqada to'liq ishga tayyor bo'ladi"
  },
  {
    id: 2,
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "To'lov Tizimlari",
    description: "PayPal, Stripe, va mahalliy to'lov tizimlarini osongina ulang"
  },
  {
    id: 3,
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Analytics Dashboard",
    description: "Biznesingizni real vaqtda kuzatib boring va tahlil qiling"
  }
];
