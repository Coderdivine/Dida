import React from 'react'
import {
    HashRouter  as 
    Link
  } from 'react-router-dom';
  
function Pricing() {
    const Pricinglist=[{
        type:"E-commerece",
        before:"100000",
        now:"50000"
    },{
        type:"Vlog",
        before:"100000",
        now:"50000"
    },{
        type:"Blog",
        before:"100000",
        now:"50000"
    },
    
    {
        type:"Sponzy",
        before:"100000",
        now:"50000"
    },{
        type:"Downloading",
        before:"100000",
        now:"50000"
    },{
        type:"Bet App",
        before:"100000",
        now:"50000"
    },{
        type:"Others",
        before:"100000",
        now:"50000 ++"
    },]
    const ordernow=()=>{
        window.location="/"
    }
    return (
        <div>
            <header>Pricing for all websites avaliable on Didatech.</header>
        <div class="ave">
          {Pricinglist &&
              Pricinglist.map(m=><div class="class">
                  <h1>{m.type}</h1><br/>
                  <small><del>{m.before}</del></small><br/>
                  <small><strong>{m.now}</strong></small>
                      <br/> <button class="btn"><a href="/Dida/#/">Order Now</a></button>
              </div>)
          }
        </div>

        </div>
    )
}

export default Pricing
