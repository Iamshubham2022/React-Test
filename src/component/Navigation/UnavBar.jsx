import React from 'react'
import style from './Shubh.module.css';

const UnavBar = () => {
    console.log(style)
  return (
        <nav className={`${style.navigation} container`}>
            <div className={style.logo}>
                Portfolio
            </div>
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>About</li>
                <li><a href=""></a>Contact</li>
            </ul>
            
        </nav>
  
  )
}

export default UnavBar
