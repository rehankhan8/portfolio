import React from 'react'
import './skill.css'

function Skills() {
    return (
        <div>
            <div className='skill'>
                <div className="skill-header" style={{textAlign:'center'}}>
                    <h1>My <span style={{color:'#70DBDB', borderBottom:'1px solid #70DBDB'}}>Skills</span></h1>
                </div>            
                <div className="my-skill">
                <div className="skill-card">
                   <h1>My creative Skills </h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat nobis exercitationem molestias, ipsum iste quae, natus minus consequatur beatae sunt, tempore officia. Eaque, aspernatur! Ut eveniet facere ab natus.</p>
                   <button onClick={() => alert('Coming soon')}>Read more</button>
                </div>
                <div className="skill-card">
                    <div className="skill-info">
                        <p>HTML</p>
                        <div className="skill-container">
                            <div className="skills ">
                                <div className="html"></div>
                            </div>
                            <p>80%</p>
                        </div>
                        <p>CSS</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="css"></div>
                            </div>
                            <p>60%</p>
                        </div>
                        <p>JavaScript</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="javscript"></div>
                            </div>
                            <p>70%</p>
                        </div>
                        <p>React</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="react"></div>
                            </div>
                            <p>40%</p>
                        </div>
                        <p>C</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="c"></div>
                            </div>
                            <p>60%</p>
                        </div>
                        <p>C++</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="cpp"></div>
                            </div>
                            <p>75%</p>
                        </div>
                        <p>JAVA</p>
                        <div className="skill-container">
                            <div className="skills">
                                <div className="java"></div>
                            </div>
                            <p>50%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills
