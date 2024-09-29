import React, { useRef, useState } from 'react'
import "./Contact.css"
import Phone from '../Images/phone.png'
import Email from '../Images/Email.png'
import Adress from '../Images/adress.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const input1 =useRef()
    const input2 =useRef()
    const input3 =useRef()
    const input4 =useRef()

    const efface = () =>
    {
        input1.current.value = ""
    }
    const efface1 = () =>
    {
        input2.current.value = ""
    }
    const efface2 = () =>
    {
        input3.current.value = ""
    }
    const efface3 = () =>
    {
        input4.current.value = ""
    }
    
    const handlesubmit = (e) =>
    {
        e.preventDefault()
        emailjs.sendForm('service_p1w8ex7', 'template_i0m7fw8', formRef.current, '3KGCVCxrpyp4DSidr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
     
        efface() 
        efface1()
        efface2() 
        efface3()

      
    }
    
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="phone" />
                        +216 29 236 073
                        


                    </div>
                    <div className="c-info-item">
                          <img src={Email} alt="" className="Email" />
                           amine.r.m.a@gmail.com


                    </div>
                    <div className="c-info-item">
                        <img src={Adress} alt="" className="Adress" />
                         Rejiche Rue Du Drapeau - Mahdia

                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story ? </b> Get in touch. Always
                    available for freelancing if the right project come along me
                </p>
                <form ref={formRef} onSubmit = {handlesubmit}>
                    <input type="text" placeholder='Name' name='user_name' ref={input1}  />
                    <input type="text" placeholder='Subject' name='user_subject' ref={input2}/>
                    <input type="text" placeholder='Email' name='user_email'ref={input3} />
                    <textarea name="message" id="" rows="5" placeholder='Message' ref={input4}  ></textarea>
                   <button>Submit</button>


                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact