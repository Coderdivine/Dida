import React,{useContext, useState} from 'react'
import { create } from './Homepage';

function Orders() {
const[searchitem,setSearchitem]=useState("");
  const{order,suscriber}=useContext(create);
    const orderss= order && order.filter((lists)=>{
      if(searchitem==""){return lists}else if(lists.name.toLowerCase().includes(searchitem.toLowerCase())){return lists}
    }).map(order=><div class="order">
    <td><small>{order.select}</small></td>
    <div class="names"><small><td>{order.name}</td>
    <td>{order.email}</td><td>{order.phone}</td><td>{order.des}</td>
    <td>{order.amount}</td></small>
    <td><strong>{order.promo}</strong></td>
    </div>
    </div>
    )
    const regs= suscriber && suscriber.map(reg=><div><div class="small-container cart-page">
    <table>
    <tr>
      <td>
        <div class="cart-info">
          
               <div>
               <div class="price">
                    </div>
         
           </div></div>
           
      </td>
      <td><strong>{reg.dataname}</strong></td>
      <td><strong>{reg.dataemail}</strong></td>
      
    </tr>
    <tr>
    <td>
    
           </td></tr></table></div></div>)
      const[rr,setRr]=useState(false);
    return (
        <div>
           <button class="btn" onClick={(e)=>setRr(false)}>ORDERS</button> <button class="btn" onClick={(e)=>setRr(true)}>SUSCRIBERS</button>
          <br/> <input value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder="Enter name" class="linked"/>
           <hr/>
           <br/>
           <br/>
           {!rr?<div class="overflow">{orderss}</div>:<div>{regs}</div>}
        </div>
    )
}

export default Orders;
