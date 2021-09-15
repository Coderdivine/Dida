import React, { useState } from 'react'

  
function Pricing() {
    const Pricinglist=[{
        type:"E-commerce",
        backend:"35000",
        domain: "10000",
        tax:"27000",
        total:"72000"
    },{
        type:"E-service",
        backend:"40000",
        domain: "10000",
        tax:"80500",
        total:"130500"
    
    },{
        type:"Vlog",
        backend:"35000",
        domain: "10000",
        tax:"30000",
        total:"75000"
    },{
        type:"Blog",
        backend:"30000",
        domain: "10000",
        tax:"125000",
        total:"65000"
    },
    
    {
        type:"Sponzy",
        backend:"50000",
        domain: "15000",
        tax:"70000",
        total:"135000"
    },{
        type:"Downloads",
        before:"70000+",
        now:"40000+"
    },{
        type:"Bet App",
        backend:"...",
        domain: "15000",
        tax:"...",
        total:"..."
        
    },{
        type:"Others",
        backend:"350000",
        domain: "10000",
        tax:"Order First",
        total:"..."
    },{
        type:"E-Learning",
    backend:"50000",
    domain: "15000",
    tax:"100000",
    total:"165000"}]
    const [faqq,setFaqq]=useState(false);
   
    return (
        <div>
            <header>Pricing for all websites avaliable on Didatech.</header>
        <div class="avee">
          {Pricinglist &&
              Pricinglist.map(m=><div>
                  <h1>{m.type}</h1><br/>
                  <small><strong>Backend: {m.backend}/yr</strong></small><br/>
                  <small><strong>Domain Name: {m.domain}/yr</strong></small><br/>
                  <small><strong>Tax:{m.tax}</strong></small><br/>
                  <small><strong>Total:{m.total}</strong></small>
                      <br/> <button class="btn"><a href="/Dida/#/">Order Now</a></button>
              </div>)
          }
        </div>
        <div class="col-4-5">
        <h1><span onClick={(e)=>setFaqq(true)}>TYPE OF WEBSITES </span></h1><br/>

        <div>{faqq?<div><head>type of websites</head>
  <p> <h>E-commerce:</h> <br/>E-commerce is an electronic business use to exchange goods and services by means of the internet or other computer network.
<br/><h>E-service:</h><br/> Electronic service use to provide services e.g E-banking,Trading Websites,Refferal,Encrypted chat.
<br/><h>Bet Service:</h><br/> Use for betting online.e.g football,basketball,most sport,colors  and games e.t.c.
<br/><h>Blog:</h> <br/>A static or dynamic personnal journal,or can be defined as frequently updated journal chroniching links at a website,intended for public viewing.
<br/><h>Vlog:</h><br/> A static or dynamic personnal journal video,or can be defined as frequently updated journal video chroniching links at a website,intended for public viewing.
<br/><h>Downloads:</h><br/> allows user to access a file,pdf,image online to download it on their devices locally.
<br/><h>Sponzy Websites:</h><br/> A website known as "scam",it used to exchange money to different people in other to get a huge return e.g  if 100 users pay CAD100 75% would get paid while the remaining will lose their money .Individuals who have sites like sponzy  sometimes refuse to pay any user which will result to scam,
<br/><h>E-learning:</h><br/> This means learning with the means of electronic technologies such as computer and internet in conjunction with other media.</p>
  </div>:<div></div>}
    
  </div>

        </div>

        </div>
    )
}

export default Pricing;
