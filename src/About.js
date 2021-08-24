import React from 'react'

function About() {
    const clicked=()=>{
        window.location="/";
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
              <button class="btn" onClick={()=>clicked()}>Go Back To Star</button>
          </div>
        </div>
    )
}

export default About;
