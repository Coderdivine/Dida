import React,{useState,useEffect,useContext, createContext} from 'react';
import "./App.css"
import Orders from './Orders';
import {v4 as uuidv4} from 'uuid';
import {Axios} from './Contact';


 export const create=createContext({});

function Homepage() {
    const arr=[
   {src:"./img/diverefoodlogo.png",name:"DivereFood",link:"https://Coderdivine.github.io/divere"}
   ]
const[dataname,setDataname]=useState("");
const[dataemail,setDataemail]=useState("");
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
           <img src={i.src} alt={i.name} width="59px" height="59px" /><br/>
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
  const handlesubmit= async(e)=>{

   e.preventDefault();
   const dataa={
     id:uuidv4(),
     dataname:dataname,
     dataemail:dataemail
   }
   if(dataemail!=="" && dataname!==""){
    const res= await  Axios.post("/created",dataa).then(()=>{
      setSuscriber([...suscriber,dataa]);

      alert("Thanks for Suscribing to DidaTech")

      gets()
    })
    if(res)gets();
    
     
    };
   }
  
  useEffect(() => {
   gets()
  }, [])
  const gets=async()=>{

    const res= await Axios.get('/employeed').then((response)=>{
     setSuscriber(response.data);
    })
    if(res)console.log("success")
  };
 
 const[listorder,setListorder]=useState([]);
  const handleorder=async(e)=>{
     e.preventDefault();
     localStorage.setItem("name",names);
     if(names!==""){
       if(email!==""){
         
          const   resq={ide:uuidv4(),
            select:selected,
            name: names,
            email:email,
            phone:phone,
            des: des,
            amount: amount,
            promo: promo
         
            }
               const res = await Axios.post("/create",resq).then(()=>{ 
              setOrder([...order,resq]);
              alert("You have successfully ordered your website we would reach you shortly"); getO()

              setListorder([...listorder,resq]);
              localStorage.setItem("orders",JSON.stringify(listorder));
            
          });
             if(res)getO()
            
         
       } else{
         alert("Please enter your email")
       }
         }else{
           alert("We need your name to start your verification")
         }
       
 
  }
  
  
   const getO= async()=>{
   
    const res= await Axios.get("/employee").then((response)=>{
      setOrder(response.data);
    })
    if(res )console.log("success")
   }
   const name="chimdindu";
   const pass="chimdinduasdasd";
   const[far,setFar]=useState(false);
   const[faq,setFaq]=useState(false);
   const[faqq,setFaqq]=useState(false);
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
   useEffect(() => {
    getO()
   }, []);
 
const dontshow=()=>{
  localStorage.setItem("dey","applied");
}  
  const listed = localStorage.getItem("orders")?JSON.parse(localStorage.getItem("orders")):[];
 const[list,setList]=useState(false);
 const clicked=()=>{
   setList(true);
 }
  return (
        <div ><div> <div>{!far?<div>         
<div class="offer">
<div class="small-container">
  <div class="row">
    <div className="col-2">
 <h1>Welcome to Didatech</h1> <br/>
 <hr/><hr/>
  <i><small><a href="/Dida/#/Pricing" class="btn">View Pricing </a></small></i>
  
   </div>
  </div>

</div>
</div>

<div className="account-page">{!localStorage.getItem("name")?<div>
<h1>
Hello, am Shaw from Alpha02 your'e welcome to Didatechnology Community
</h1>
</div>:<div><h1>
Good day "{localStorage.getItem("name")}",am Shaw from Alpha02 your'e welcome to Didatechnology Community
</h1>
  </div>}
</div>
<hr/>
<br/>
     
  <div class="s">
  <div class="container">
  <div class="row">
  <div class="col-2" >
  
   </div>
   <div class="col-2" >
    
   <h1>ORDER</h1>
   <hr id="Indi"/>
     <div class="form-container">
     <div class="form-btn" >
    
     </div>
     <i><small>You Can Order Any Site You Want Form Here<br/>
     Please Fill In The Required Felid...
     </small></i>
     
     
     <form onSubmit={(e)=>handleorder(e)} id="Regform">
           <input id="name" value={names}  onChange={(e)=>setNames(e.target.value)}   placeholder="Name"/>
          <input id="email" value={email}   placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
           <input id="phone" value={phone}   placeholder="Phone"onChange={(e)=>setPhone(e.target.value)} />
           <select value={selected} onChange={(e)=>{
              const selectedfood=e.target.value;
              setSelected(selectedfood);}}>
             <option value="Bet App">Bet App</option>
             <option vaiue="E-commerce" >E-commerce</option>
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
    <input id="Number" type="phone" placeholder="Phone Number" onChange={(e)=>setDataname(e.target.value)}/>
    <input id="Email" type="email" placeholder="Email" onChange={(e)=>setDataemail(e.target.value)}/><br/>
    <small><i>Please make sure you don't use auto fill to prevent loss of data</i></small>
 <button type="submit" class="btn">Suscribe</button>
  </form>
</div>
</div></div>
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
  <br/><hr/>
  <head>Static and Dynamic Websites</head><br/>
  <p>Static website do not have a backend or don not undergo any changes for a long period.<br/>
  Dynamic website is a website that has a  backend for getting and sending data or information to a database which happens frequently depending on the type of website.
  <br/>
  Static website if preferrable for personal Blog, Vlog, Downloads e.t.c. 
  </p></div>:<div></div>}
    
  </div>

  </div>  <div class="col-4-5"><h1><span  onClick={(e)=>setFaq(true)}>FAQ's</span></h1><br/>
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
is to ensure that customers get updated <br/>with the latest information on Didatech.<br/>
Have not seen my orders ?<br/>
Dida team takes 20 to 30mins to verify your order.<br/>
If your order is verified to the terms and conditions,
Dida would send a  message to your Gmail, else<br/>
 dida will send a message why your order was invaild.
</h></div>}  
</div></div>

</div>
<div class="ave">
  <i><small><a  class="btn" href="/Dida/#/Pricing">Pricing</a></small></i>
  <i><small  class="btn"><a href="https://Coderdivine.github.io/message">Meesage</a></small></i>
  <i><small  class="btn"><a href="https://Coderdivine.github.io/payment">Payment</a></small></i>
  <i><small  class="btn" ><a href="/Dida/#/About">About</a></small></i>
  <i><small  class=""><a className="btn" onClick={()=>clicked()}>My Order</a></small></i>


</div>
<div class="ave">{list?<div>
  {listed && listed.map(e=><div>
   <ul>
     <li>Id: {e.ide}</li>
     <li>Type: {e.select}</li>
     <li>Name: {e.name}</li>
     <li>Email: {e.email}</li>
     <li>Phone: {e.phone}</li>
     <li>Description: {e.des}</li>
     <li>Amount: {e.amount}</li>
     <li>Promo:{e.promo}</li>
     </ul>
    </div>)}
</div>
:<div></div>}
 </div>
</div>
    :<div><create.Provider value={{order,suscriber}}>
       <Orders />
       </create.Provider></div>}</div>
       <div class="col-2">
       

       <h1> Sites on DidaTech</h1>
      <hr id="Indi"/></div>
      {home}   
 
  
  
   <br/>
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


<li><a href="#">YouTube</a></li>
<li><a href="https://www.instagram.com/_chimdi.xo_/">Instagram</a></li>
<li><a href="https://web.facebook.com/divine.ezechukwu/">Facebook</a></li>
<li><a href="#">Twitter</a></li>
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
    );
}

export default Homepage;
