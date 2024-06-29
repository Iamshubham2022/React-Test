import React from 'react'
import style from './Contactheader.module.css'

const ContactHeader = () => {
  return (
    <div className={`${style.contact_section} container`}>
      <h1>Hii, I'm Shubham Jaiswal</h1>
      <p>A frontend developer with some experience in creating responsive web applications. I specialize in React and have built projects like an e-commerce platform and a real-time chat app. </p>
    </div>
  )
}

export default ContactHeader
