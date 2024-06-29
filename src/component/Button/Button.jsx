import React from 'react' 
import style from './Button.module.css'

const Button = ({isOutline , text , icon}) => {
    // const {isOutline , text , icon} =props
  return (
    <button className={isOutline ? style.outline_btn :style.primary_btn}>
        {icon}
        {text}
       
    </button>
  )
}

export default Button
