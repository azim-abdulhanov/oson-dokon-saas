import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Alisher Karimov',
    role: "Online Do'kon Egasi",
    content: "15 daqiqada do'konimni ishga tushirdim. Ajoyib platforma!",
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Madina Rashidova',
    role: 'Startap Asoschisi',
    content: 'Eng yaxshi ecommerce yechimi. Hammaga tavsiya qilaman!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Bobur Toshmatov',
    role: 'IT Tadbirkor',
    content: 'Professional va oson. Biznesimni yangi bosqichga olib chiqdi!',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
]

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id='testimonials' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Mijozlarimiz{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Fikrlari
            </span>
          </h2>
          <p className='text-xl text-gray-600'>
            Minglab mijozlar bizga ishonishadi
          </p>
        </div>

        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8'>
          <div
            className='flex justify-between transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className='w-full flex-shrink-0 text-center'>
                <div className='mb-6'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg'
                  />
                  <div className='flex justify-center mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                  <blockquote className='text-2xl text-gray-800 mb-4 font-medium italic'>
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </div>
                    <div className='text-gray-600'>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className='flex justify-center mt-8 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
