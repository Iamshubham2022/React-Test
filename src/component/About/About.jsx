import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <section className={`${style.About_section} container`}>
      <h1 className={style.A_s}>AboutMe</h1>
      <div className={style.container}>
       <div className={style.About_project}>
        <h1>About Project</h1>
        <h2>Project One: E-commerce Platform</h2>
        <p>
          Description: A fully responsive e-commerce platform with user authentication, product listings, and a shopping cart.
          <h4> Tech Stack: React, Redux, Node.js, Express, MongoDB</h4>
          Live Demo | GitHub Repository
        </p>
        <h2> Project Two: Real-time Chat Application</h2>
        <p>
          Description: A real-time chat application using Socket.IO with features like private messaging and group chats.
          <h4>Tech Stack: Angular, Socket.IO, Node.js</h4>
          Live Demo | GitHub Repository
        </p>
       </div>
       <div>
         <h1 className={style.About_s} >About Skills</h1>
        <h2>Languages:</h2>
        <p> HTML, CSS, JavaScript, TypeScript</p>
        <h2>Frameworks:</h2>
        <p> React, Angular, Vue</p>
        <h2>Tools: </h2>
        <p>Git, Webpack, Docker</p>
       </div>
      </div>
    </section>
  )
}

export default About
