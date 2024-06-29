import React from 'react'
import style from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { MdPhoneCallback } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";



const Contactform = () => {
  return (
    <section className={`${style.container}`}>
      
      <div className={style.Container_form}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<MdPhoneCallback fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMailOutline fontSize="24px" />} />
        <form>
          <div className={style.form_controler}>
            <label htmlFor='name'>Name</label>
            <input type='text ' name='name'></input>
          </div>
          <div className={style.form_controler}>
            <label htmlFor='name'>Email</label>
            <input type='email ' name='email'></input>
          </div>
          <div className={style.form_controler}>
            <label htmlFor='name'>Text</label>
            <textarea name='text'></textarea>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",
          }
          } 
          ><Button text="SUBMIT" /></div>
          
        </form>

      </div>
      {/* <div className={style.Contact_image}>
        <img src="/images/service.svg" alt="place an image here" />
      </div> */}
    </section>
  )
}

export default Contactform
