import React,{useState,useEffect} from 'react';
import Admin from './Admin';
import "./App.css"
import Orders from './Orders';

import {v4 as uuidv4} from 'uuid';
import {Axios} from './Contact';


function Homepage() {
    const arr=[
   {src:"./img/paper1.jpg",name:"DivereFood",link:""},{src:"./img/paper1.jpg",name:"Divere",link:""},{src:"./img/paper1.jpg",name:"Axgura",link:""},
   {src:"./img/paper1.jpg",name:"UberLagos",link:""},{src:"./img/paper1.jpg",name:"DidaSponzy",link:""},{src:"./img/paper1.jpg",name:"Alpha(Dcetrad)",link:""}]
   const[menu,setMenu]=useState(false);
   const [home,setHome]=useState( <div>
   <div className="link">
      {arr.map(i=><div>
       <a href={i.link}><div className="App">
         <div className="App-logo">
           <img src={i.src} alt={i.name} width="45px" height="45px" />
           </div></div></a>
         <h1>{i.name}</h1>
      </div>)}
   </div></div>);
   const[selected,setSelected]=useState("");
   const handleselect=(e)=>{
       e.preventDefault();
       setSelected(e.target.value);
   }
   const[order,setOrder]=useState([]);

   const[suscriber,setSuscriber]=useState([]);
  const[data,setData]=useState({});
  const[user,setUser]=useState({});
  const gets=async()=>{
    const res= await Axios.get('/suscribers')
    if(res && res.data)setSuscriber(res.data);
  }
  const handledata=(e)=>{
    e.preventDefault();
    setData({...data,[e.target.id]:e.target.value});
  }
  const handlesubmit= async(e)=>{
   e.preventDefault();
  const res= await  Axios.post("/suscribers",data)
  if(res)gets();setData({});
   
  };
  useEffect(() => {
   gets()
  }, [])
  const getO= async()=>{
    const res= await Axios.get("/orders")
    if(res && res.data)setOrder(res.data);
   }
  const handleOrder=(e)=>{
  
    e.preventDefault();
    setUser({...user,[e.target.id]:e.target.value});
  console.log(user);
  }
 
  const handleorder=async(e)=>{
     e.preventDefault();
  const   resq={id:uuidv4(),
    select:selected,
    data:user
    }
    const res = await Axios.post("/orders",resq).catch((err)=>{console.log(err)});
     if(res)getO();
  }
  
   useEffect(() => {
    getO()
   }, [])
   const name="chimdindu";
   const pass="chimdinduasdasd";
   const[far,setFar]=useState(false);
   const[namee,setNamee]=useState("");
   const[passs,setPasss]=useState("");
   const handleit=(e)=>{
     e.preventDefault();
     if(name===namee){
       if(pass===passs){
         setFar(true);
         getO()
       }
     }
   }

  
   return (
        <div ><div> <div>{!far?<div>         
<div class="offer">
<div class="small-container">
  <div class="row">
  <div class="col-2">
  </div>
  <div class="col-2">
  <i><h1>Welcome to DidaTech</h1></i>
  </div>
 
  </div>

</div>
</div><br/>
      <div class="col-2">
        <div class="img">
          <img src=".img/adsdida.png" width="100px" alt="img"/>
        </div>
     <h1>Avaiable Sites on DidaTech</h1>
     <hr id="Indi"/></div>
     {home}   
  <div class="row" >
  <div class="col-2" ><div class="formcontainer">

         <small>Please Suscribe To Get Latest News Form DidaTech</small>
         <br/>
         <br/>
           <form onSubmit={(e)=>handlesubmit(e)}>
             <input id="Number" type="phone" placeholder="Phone Number" onChange={(e)=>handledata(e)}/>
             <input id="Email" type="email" placeholder="Email" onChange={(e)=>handledata(e)}/>
             <small><i>Please make sure you don't use auto fill to prevent loss of data</i></small>
          <button type="submit" class="btn">Suscribe</button>
           </form>
  </div>
  </div>
  </div>
 
  <br/>
  <div class="account-page">
  <div class="container">
  <div class="row">
  <div class="col-2" >
  
   </div>
   <div class="col-2" >
    
   <h1>OTHERS</h1>
   <hr id="Indi"/>
     <div class="form-container">
     <div class="form-btn" >
    
     </div>
     <i><small>You Can Order Any Site You Want Form Here<br/>
     Please Fill In The Requried Felid...
     </small></i>
     
     
     <form onSubmit={(e)=>handleorder(e)} id="Regform">
           <input id="name" placeholder="Name" onClick={(e)=>handleOrder(e)}/>
           <input id="email"placeholder="Email" onClick={(e)=>handleOrder(e)}/>
           <input id="phone" placeholder="Phone"onClick={(e)=>handleOrder(e)} />
           <select value={selected} onChange={(e)=>{
              const selectedfood=e.target.value;
              setSelected(selectedfood);}}>
             <option value="Bet App">Bet App</option>
             <option value="E-service" >E-service</option>
             <option vaiue="E-commerece" >E-commerece</option>
             <option value="Sponzy" >Sponzy</option>
             <option value="Others">Others</option>
             </select>
           <input id="des" placeholder="Description" onClick={(e)=>handleOrder(e)}/>
           <input id="amount" placeholder="Amount" onClick={(e)=>handleOrder(e)}/>
           <br/>
           <small>Optional</small>
           <input id="promo" placeholder="Enter Promo Code" onClick={(e)=>handleOrder(e)}/>
           <small><i>Please make sure you don't use auto fill to prevent loss of data</i></small>

           <button type="submit" class="btn">Send</button>
         </form>
     </div>
     </div>
     </div></div>
     
     <div class="col-4-5"><h1>FAQ's</h1><br/>
       <br/>
       <h>How to Order Website form Dida ?<br/>
Step 1: Scroll down to Order<br/>
Step 2: Enter your name ,Phone Number ,Email ,
Description.<br/>
Note: We use Description for customer to Breifly explain
what the website is used for...<br/>
Step 3: Enter the amount you wish to put.<br/>
Step 4: Select the type of Website you want.
 Note: Do not use auto fill to fill this form
to prevent loss of data.<br/>
<br/>
Why Should you Suscribe ?<br/>
  The reason why Didatech<br/> made it possible for customer to suscribe
is to ensure that customers get updataed <br/>with the latest information on Didatech.<br/>
Have not seen my orders ?
Dida team takes 20-30mins to scan<br/>
your orders if verified to the terms and conditions,
Dida would send a  message to your gmail ,else<br/>
 dida would also send a message why your order was invaild.
</h></div>
     </div>
     
     <br/>
</div>
     :<div><Orders order={order} user={suscriber}/></div>}</div>
     <div className="footer">
<div className="container">
<div className="row">
<div className="footer-col-1">
<h3>Download our App</h3>
<p>Download App for Android mobile phone.</p>
<div className="app-logo">
<a href="http://localhost:3000/Dida"><img src="" alt="" width="100px" height="100px" /></a>

</div>
</div>
<div className="footer-col-2">

<p>Our Purpose is to Sustainably make the Pleasure and Benefits of Electronic Access to the Many</p>
</div>
<div className="footer-col-3">
<h3>Related Site</h3>
<ul>
<li><a >Divere Food</a></li>
<li><a >Axgura</a></li>
<li><a >UberLagos</a></li>
<li><a >DidaSponzy</a></li>
</ul>
</div>
<div className="footer-col-4">
<h3>Follow Us</h3>
<ul>
<li><a href="">Facebook</a></li>
<li><a >Twitter</a></li>
<li><a >YouTube</a></li>
<li><a >Instagram</a></li>
<li><a >Tiktok</a></li>
</ul>
</div>
<div className="admin-input">
  <form onSubmit={(e)=>handleit(e)}>
    <input value={namee} onChange={(e)=>setNamee(e.target.value)} placeholder="name"/>
    <input value={passs} onChange={(e)=>setPasss(e.target.value)} placeholder="pass"/>
    <button type="submit">A</button>
  </form>
</div>
<hr/>
<p className="copyright">&copy; Copyright 2021-Dida</p>
</div></div>
<div></div></div>
 
 </div>
        </div>
    )
}

export default Homepage;
