import React from 'react'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Our_features from './components/home/Our_features'
import Insights from './components/home/Insights'
import Testimonies from './components/home/Testimonies'
import Sign from './components/home/Sign'
import Footer from './components/home/Footer'
import './App.css'
import Slider from './components/home/Slider'
import { AppRouter } from './router/routes'

const App = () => {
  return <AppRouter />
  // (
  //   <main className='container'>
  //     <Navbar/>
  //     <div>
  //     <section id="home">
  //     <Hero/>
  //     </section>
      
  //     <section id="Our_features">
  //       <Our_features/>
  //       </section>
        
  //       <section id="Insights">
  //       <Insights/>
  //       </section>

  //       {/* <section id="Testimonies">
  //       <Testimonies/>
  //       </section> */}

  //       <section id="Blog">
  //       <Slider/>
  //       </section>

  //       <section id="Sign">
  //       <Sign/>
  //       </section>

  //       <section id="Footer">
  //       <Footer/>
  //       </section>
        

  //     </div>
  //   </main>
    
  // )
}

export default App
