import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className="contact-header" style={{textAlign:'center', marginBottom:'30px'}}>
                <h1>Contact <span style={{color: '#70DBDB', borderBottom:'1px solid #70DBDB'}}>Me</span> </h1>
            </div>
            <div className="contact-container">
                <div className="left-contact">
                    <form action="">
                        <input type="text" placeholder='Name' className='name'/>
                        <input type="email" placeholder='Email' className='email'/>
                        <input type="text" placeholder='subject' className='subject' />
                        <textarea className="textarea" cols="30" rows="8" placeholder='Your Message'></textarea>
                    </form>
                    <button className='send'>Send message</button>
                </div>
                <div className="right-contact">
                    <h3>CONTACT ADSRESS</h3>
                    <div className="contact-address">
                        <p> <i class="fas fa-map-marker-alt"></i><span> Utter Pradesh, India </span></p>
                        <p className='c-details'><i className="fas fa-envelope"></i> <span> <p> email@gmail.com</p> <p>email2@gmail.com</p> </span></p>
                        <p className='c-details'><i className="fas fa-phone-alt"></i> <span> <p> +91-9670*****</p> <p>+91-9984*****</p>  </span></p>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Contact
