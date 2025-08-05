import { Zap, Store, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Lightning Fast Setup",
    description: "15 daqiqada to'liq onlayn do'kon yarating"
  },
  {
    icon: <Store className="w-8 h-8 text-purple-500" />,
    title: "Professional Templates",
    description: "100+ zamonaviy dizayn shablonlari"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-green-500" />,
    title: "Secure Payments",
    description: "Xavfsiz to'lov tizimlari integratsiyasi"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Analytics Dashboard",
    description: "Real-time savdo statistikasi"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nima uchun <span className="text-blue-600">OsonDo'kon</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zamonaviy texnologiyalar va oson interfeys bilan ecommerce dunyosiga qadam qo'ying
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features
