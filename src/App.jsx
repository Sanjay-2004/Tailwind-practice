import Nav from './components/Nav'
import { Hero, Popular, Footer, CustomerReviews, Services, Special, Subscribe, Super } from './sections'

const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <Popular />
    </section>
    <section className='padding'>
      <Super />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <Special />
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <footer className='bg-black padding-x patting-t pb-8'>
      <Footer />
    </footer>
  </main>
)

export default App
