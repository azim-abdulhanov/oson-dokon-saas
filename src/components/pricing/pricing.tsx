import { CheckCircle } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '99,000',
    period: '/oy',
    description: 'Kichik biznes uchun',
    features: [
      '100 mahsulotgacha',
      'Basic shablonlar',
      "Email qo'llab-quvvatlash",
      'SSL sertifikat',
      'Mobil optimizatsiya'
    ],
    popular: false,
    color: 'from-gray-50 to-gray-100',
    buttonColor: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
  },
  {
    name: 'Professional',
    price: '199,000',
    period: '/oy',
    description: "O'sib borayotgan biznes uchun",
    features: [
      '1000 mahsulotgacha',
      'Premium shablonlar',
      "24/7 qo'llab-quvvatlash",
      'Advanced analytics',
      'SEO optimizatsiya',
      'Multi-payment gateway'
    ],
    popular: true,
    color: 'from-blue-50 to-purple-50',
    buttonColor:
      'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
  },
  {
    name: 'Enterprise',
    price: '399,000',
    period: '/oy',
    description: 'Katta korxonalar uchun',
    features: [
      'Cheksiz mahsulotlar',
      'Custom dizayn',
      'Dedicated manager',
      'API access',
      'White-label yechimi',
      'Advanced integrations'
    ],
    popular: false,
    color: 'from-purple-50 to-pink-50',
    buttonColor:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
  }
]

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Sizga Mos{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Tarif
            </span>{' '}
            Tanlang
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Har qanday hajmdagi biznes uchun moslashtirilgan narx rejalari
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${
                plan.color
              } border-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl scale-105'
                  : 'border-gray-200'
              } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold'>
                    Eng Mashhur
                  </span>
                </div>
              )}

              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  {plan.name}
                </h3>
                <p className='text-gray-600 mb-4'>{plan.description}</p>
                <div className='flex items-baseline justify-center mb-4'>
                  <span className='text-4xl font-bold text-gray-900'>
                    ${plan.price}
                  </span>
                  <span className='text-gray-600 ml-1'>{plan.period}</span>
                </div>
              </div>

              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    <span className='text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${plan.buttonColor} text-white py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer`}
              >
                Tanlash
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
