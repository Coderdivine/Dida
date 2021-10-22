import React,{useState,useEffect} from 'react'

function About() {
    const[more,setMore]=useState(false);
    const formore=()=>{
    setMore(true);
    }
    return (
        <div class="about">
          <h1>Shaw</h1>  <br/>
          <img src="./img/didalogo.png"/><br/>
          <small><strong>Mama's Boy</strong></small><br/>
          <small><i>Version 2.95</i></small><br/><br/><br/><hr/>
          <div className="ave">
              <button class="btn" onClick={formore}>More Info</button>
          {!more?<div>....</div>:<div>
            <h1>Contact Us</h1>
            <ul>
            <li><a href="https://www.instagram.com/_chimdi.xo_/">Instagram</a></li>
            <li><a href="https://web.facebook.com/divine.ezechukwu/">Facebook</a></li>


            </ul>
            </div>}
          </div>
          <div>
              <button class="btn"><a href="/Dida/#/">Go Back To Star</a></button>
          </div>
        </div>
    )
}

export default About;
