import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <a className='font-bold text-2xl text-blue-400' href='/'>
              OsonDo'kon
            </a>
            <p className='text-gray-400 mt-4'>
              15 daqiqada professional ecommerce yechimi
            </p>
            <ul className='flex items-center gap-3 mt-4'>
              <li>
                <a
                  className='text-gray-400 hover:text-white transition-colors'
                  href='#'
                >
                  <Github />
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-white transition-colors'
                  href='#'
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-white transition-colors'
                  href='#'
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  className='text-gray-400 hover:text-white transition-colors'
                  href='#'
                >
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Mahsulot</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Xususiyatlar
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Narxlar
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Shablonlar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Qo'llab-quvvatlash</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Yordam
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Hujjatlar
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Aloqa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Kompaniya</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Karyera
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Maxfiylik siyosati
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>&copy; 2025 OsonDo'kon. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
