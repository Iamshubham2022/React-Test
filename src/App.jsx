import { useState } from 'react'
import UnavBar from './component/Navigation/UnavBar'
import "./App.css";
import ContactHeader from './component/contactHeader/ContactHeader';
import Contactform from './component/ContactForm/Contactform';
import About from './component/About/About';
import Home from './component/Home/Home';
function App() {

  return (
    <>
      <main>
      <UnavBar/>
      <Home/>
      </main>
      <About/>
      <main className='main_container'>
      <Contactform/>
      </main>
    </>
  )
}

export default App
