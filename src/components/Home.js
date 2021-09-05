import React, {useState, useEffect } from "react";
import "./home.css";
import image from '../img/IMG_2743-removebg-preview.png'

function Home() {
    
   let data = [ 'Rehan Khan','Web devloper','Photographer','Web Designer']
   let index = 0;    
    const [profession, setProfession] = useState(data[index])
    
  const update = () =>{
    index = index +1;
    setProfession(data[index])
  }

    useEffect(() => {
      setTimeout(() => {
        update()
      }, 1000);
    },data)

      
  return (
    <div className="home">
      <div className="container">
        <div className="left-container">
          <h1 style={{color: '#70DBDB'}}>HELLO,</h1>
          {<h1>I am a <span style={{color: '#70DBDB'}}>{profession} </span></h1>}
          <p>Hello and thanks for visiting my profile. I am a front-end website developer and mostly I am passionate on web coding and many more...</p>
          <button className="hire">Hire me</button>
        </div>
        <div className="right-container">
          <div className="img-container">
             <img className='img-1' src={image} alt="hello" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
