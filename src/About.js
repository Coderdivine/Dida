import React from 'react'
import {
    HashRouter  as 
    Link
  } from 'react-router-dom';
  
function About() {
    const clicked=()=>{
      <Link to="/About" />
    }
    return (
        <div class="about">
          <h1>Shaw</h1>  <br/>
          <img src="./img/paper1.jpg"/><br/>
          <small><strong>Mama's Boy</strong></small><br/>
          <small><i>Version 2.95</i></small><br/><br/><br/><hr/>
          <div className="ave">
              <button class="btn">More Info</button>
          <div>...</div>
          </div>
          <div>
              <button class="btn"><a href="/Dida/#/">Go Back To Star</a></button>
          </div>
        </div>
    )
}

export default About;
