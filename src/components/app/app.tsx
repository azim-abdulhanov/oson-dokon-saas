import Cta from '../cta/cta'
import Features from '../features/features'
import Footer from '../footer/footer'
import Hero from '../hero/hero'
import Navbar from '../navbar/navbar'
import Pricing from '../pricing/pricing'
import Testimonials from '../testimonials/testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen flex flex-col'>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
