import { Menu, Store, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <a className="flex items-center gap-1 text-blue-600 font-bold" href='/'>
          <Store />
          <span className='text-blue-600 text-xl'>OsonDo'kon</span>
        </a>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
           <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Imkoniyatlar</a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Narxlar</a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Sharhlar</a>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 cursor-pointer">
              Bepul Sinash
            </button>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-200">
        <ul className="px-4 py-6 space-y-4">
          <li>
            <a href="#features" className="block text-gray-700 hover:text-blue-600">Xususiyatlar</a>
          </li>
          <li>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Narxlar</a>
          </li>
          <li>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Sharhlar</a>
          </li>
          <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all cursor-pointer">
            Bepul Sinash
          </button>
        </ul>
      </div>
    )}
  </nav>
  )
}

export default Navbar
