import styles from './style'

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, Footer, CTA} from './components'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} fixed top-0 z-10 bg-slate-600 opacity-90 px-10`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${`styles.paddingX`} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <Footer />
        </div>
      </div>

    </div>
  )


export default App
