import { useState } from 'react'
import UnavBar from './component/Navigation/UnavBar'
import "./App.css";
import ContactHeader from './component/contactHeader/ContactHeader';
import Contactform from './component/ContactForm/Contactform';
import About from './component/About/About';
function App() {

  return (
    <>
      <UnavBar/>
      <main className='main_container'>
      <ContactHeader/>
      <Contactform/>
      </main>
      <About/>
    </>
  )
}

export default App
