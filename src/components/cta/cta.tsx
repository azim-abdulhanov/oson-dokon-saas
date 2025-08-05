import { ChevronRight } from 'lucide-react'

const Cta = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bugun O'z Do'koningizni Oching
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            15 daqiqada professional onlayn do'kon yarating va daromadingizni oshiring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
              Hoziroq Boshlash
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Qo'llab-quvvatlash
            </button>
          </div>
        </div>
      </section>
  )
}

export default Cta
