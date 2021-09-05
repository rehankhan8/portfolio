import React from 'react'
import './about.css'
import image2 from '../img/IMG_20210105_104409_adobespark.png'

function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="left-about">
                    <div className="about-img-container">
                        <img className='img-2' src={image2} alt="" />
                    </div>
                </div>
                <div className="right-about">
                    <h1>Hello, I Am <span style={{color:'#70DBDB'}}>Photographer</span></h1>
                    <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus doloremque ea maxime at excepturi accusantium magni esse, commodi earum sed. Fugit ipsa corporis quaerat doloribus, quos est temporibus deleniti hic.</p>
                    <div className="details">
                    <p>Name     :   Rehan Khan</p>
                    <p>Age      :   22</p>
                    <p>Address  :   Utter Pradesh, Indai</p>
                    <p>Phone    :   +91-9984******</p>
                    <p>e-mail   :   rehankhan97669@gmail.com</p>
                    <p>Freelance:   Available</p>
                    </div>
                    <button className='download-cv'>Download CV</button>
                </div>            
            </div>
        </div>
    )
}

export default About
