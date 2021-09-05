import React from 'react'
import './project.css'
import image2 from '../img/Capture.PNG'
import image3 from '../img/Capture2.PNG'
import image4 from '../img/Capture3.PNG'


function Project() {
    return (
        <div className='project'>
            <div className="project-header" style={{textAlign:'center'}}>
                <h1>My <span style={{color:'#70DBDB', borderBottom:'1px solid #70DBDB'}}>Projects</span></h1>
            </div>            
            <div className="my-project">
                <div className="project-card">
                    <img src={image2} alt="" />
                    <div className="project-desc">
                        <h3>Title <span>Counter</span></h3>
                        <p>A counter built with HTML, CSS, Jvascript</p>
                        <button  onClick={ () => window.open('https://kind-hermann-aaa2a4.netlify.app/')} className='goto-project'>Live Here</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={image4} alt="" />
                    <div className="project-desc">
                        <h3>Title: <span style={{color: '#70DBDB'}}>Calculator</span> </h3>
                        <p>A simple javascript Calculator</p>
                        <button  onClick={ () => window.open('https://kind-jennings-183860.netlify.app/')} className='goto-project'>Live Here</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={image3} alt="" />
                    <div className="project-desc">
                        <h3>Title: <span style={{color: '#70DBDB'}}>Portfolio</span></h3>
                        <p>A personal Portfolio built with react</p>
                        <button onClick={ () => window.open('https://kind-jennings-183860.netlify.app/')} className='goto-project'>Live Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
