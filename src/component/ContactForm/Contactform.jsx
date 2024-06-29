import React from 'react'
import style from './ContactForm.module.css'

const Contactform = () => {
  return (
    <section className={`${style.container}`}>
        <div className={style.Container_form}>

        </div>
        <div className={style.Contact_image}>
            <img src="/images/service.svg" alt="place an image here" />
        </div>
    </section>
  )
}

export default Contactform
