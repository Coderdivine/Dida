import React,{useState,useEffect,useContext, createContext} from 'react';
import Admin from './Admin';
import "./App.css"
import Orders from './Orders';
import {v4 as uuidv4} from 'uuid';
import {Axios} from './Contact';
 export const create=createContext({});

function Homepage() {
    const arr=[
   {src:"./img/paper1.jpg",name:"DivereFood",link:"https://Coderdivine.github.io/divere"}
   ]

   const [names,setNames]=useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
  const [des,setDes]=useState("") 
  const [amount,setAmount]=useState("");
  const [promo,setPromo]=useState("");
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
  const[user,setUser]=useState([]);
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
   if(data){
    const res= await  Axios.post("/suscribers",data)
    if(res)gets();setData({});
    alert("Thanks for suscribing to Didatechnologies ");
     
    };
   }
  
  useEffect(() => {
   gets()
  }, [])
  const getO= async()=>{
    const res= await Axios.get("/orders")
    if(res && res.data)setOrder(res.data);
   }
 
  const handleorder=async(e)=>{
     e.preventDefault();
     if(names!==""){
       if(email!==""){
         if(phone!=="" && selected!==""){
          const   resq={id:uuidv4(),
            select:selected,
            name: names,
            email:email,
            phone:phone,
            des: des,
            amount: amount,
            promo: promo
         
            }
            const res = await Axios.post("/orders",resq).catch((err)=>{console.log(err)});
             if(res)getO()
             alert("Your request is being processed we would get back you within 24hours");
         }else{
           alert("phone number and type of website is must")
         }
       } else{
         alert("Please enter your email")
       }
         }else{
           alert("We need your name to start your verification")
         }
       
 
  }
  
   useEffect(() => {
    getO()
   }, [])
   const name="chimdindu";
   const pass="chimdinduasdasd";
   const[far,setFar]=useState(false);
   const[faq,setFaq]=useState(false);
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

const runalert=()=>{
  alert("Pricing is unavailable at the moment...")
}  
const dontshow=()=>{
  localStorage.setItem("dey","applied");
}  
   return (
        <div ><div> <div>{!far?<div>         
<div class="offer">
<div class="small-container">
  <div class="row">
    <div className="col-2">
 <h1>Welcome to Didatech</h1> <br/>
 <hr/><hr/>
  <i><small><a onClick={()=>runalert()} class="btn">View Pricing </a></small></i>
  
   </div>
  </div>

</div>
</div><br/>
      <div class="col-2">
       

     <h1> Sites on DidaTech</h1>
     <hr id="Indi"/></div>
     {home}   

 
 
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
           <input id="name" value={names}  onChange={(e)=>setNames(e.target.value)}   placeholder="Name"/>
          <input id="email" value={email}   placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
           <input id="phone" value={phone}   placeholder="Phone"onChange={(e)=>setPhone(e.target.value)} />
           <select value={selected} onChange={(e)=>{
              const selectedfood=e.target.value;
              setSelected(selectedfood);}}>
             <option value="Bet App">Bet App</option>
             <option vaiue="E-commerece" >E-commerece</option>
             <option value="Sponzy" >Sponzy</option>
             <option value="Vlog">Vlog</option>
             <option vaiue="Blog" >Blog</option>
             <option value="Downloading" >Downloading</option>
             <option value="Others">Others</option>
             </select>
           <textarea  row={5} value={des}  placeholder="Description" onChange={(e)=>setDes(e.target.value)}/>
           <input id="amount" value={amount} placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
           <br/>
           <small>Optional</small>
           <input id="promo" placeholder="Enter Promo Code" onChange={(e)=>setPromo(e.target.value)}/>
         <br/>
         {
!localStorage.getItem("dey")?<div class="as">
  <i><small><pre onClick={()=>dontshow()}>Apply to the Terms and Conditions </pre></small></i>
 </div>:<div><small>Thanks for applying.</small></div>
  
  }
         
           <button type="submit" class="btn">Send</button>
         </form>
     </div>
     </div>
         </div></div><div>
     <div class="col-2" >
     <h1>SUSCRIBE</h1>
       <div class="formcontainer">

<small> Suscribe To Get Latest News Form DidaTech</small>
<br/>
<br/>
  <form onSubmit={(e)=>handlesubmit(e)}>
    <input id="Number" type="phone" placeholder="Phone Number" onChange={(e)=>handledata(e)}/>
    <input id="Email" type="email" placeholder="Email" onChange={(e)=>handledata(e)}/><br/>
    <small><i>Please make sure you don't use auto fill to prevent loss of data</i></small>
 <button type="submit" class="btn">Suscribe</button>
  </form>
</div>
</div></div>  <div class="col-4-5"><h1><span  onClick={(e)=>setFaq(true)}>FAQ's</span></h1><br/>
    <div> {!faq ?<div></div>:<div> 
      <br/>
       <h>How to Order Website form Dida ?<br/>
Step 1: Scroll down to Order<br/>
Step 2: Enter your name ,Phone Number ,Email ,
Description.<br/>
Note: We use Description for customer to Breifly explain
what the website is used for...<br/>
Step 3: Enter the amount you wish to put.<br/>
Step 4: Select the type of Website you want.
 <br/>
<br/>
Why Should you Suscribe ?<br/>
  The reason why Didatech  made it possible for customer to suscribe
is to ensure that customers get updataed <br/>with the latest information on Didatech.<br/>
Have not seen my orders ?<br/>
Dida team takes 20-30mins to verify your order<br/>
your orders if verified to the terms and conditions,
Dida would send a  message to your gmail ,else<br/>
 dida would also send a message why your order was invaild.
</h></div>}  
</div></div>
<div class="ave">
  <i><small>Terma and Conditions</small></i>
  <i><small><a onClick={()=>runalert()}>Pricing</a></small></i>
  <i><small>Meesage</small></i>
  <i><small>Payment</small></i>
</div>
</div></div>
    :<div><create.Provider value={{order,suscriber}}>
       <Orders />
       </create.Provider></div>}</div>
     <div className="footer">
<div className="container">
<div className="row">
<div className="footer-col-2">

<p>Our Purpose is to Sustainably make the Pleasure and Benefits of Electronic Access to the Many</p>
</div>
<div className="footer-col-3">
<h3>Related Site</h3>
<ul>
<li><a href="https://Coderdivine.github.io/divere/" >Divere Food</a></li>
</ul>
</div>
<div className="footer-col-4">
<h3>Follow Us</h3>
<ul>

<li><a >YouTube</a></li>

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
<p className="copyright">&copy; Copyright 2021-Didatechnologies</p>
</div></div>
<div></div></div>
 
 </div>
        </div>
    )
}

export default Homepage;
