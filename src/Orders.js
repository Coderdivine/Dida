import React,{useState} from 'react'

function Orders(props) {
      const orrder=props.order;
      const Person=props.user;
    const orderss= orrder && orrder.map(order=><div class="order">
    <td><small>{order.id}</small></td>
    <td><small>{order.select}</small></td>
    <td> <strong>{order.data.map(i=><div class="names"><small><td>{i.name}</td>
    <td>{i.email}</td><td>{i.phone}</td><td>{i.des}</td>
    <td>{i.amount}</td></small>
    <td><strong>{i.promo}</strong></td>
    </div>)}</strong></td>
    </div>
    )
    const regs= Person && Person.map(reg=><div><div class="small-container cart-page">
    <table>
    <tr>
      <td>
        <div class="cart-info">
          
               <div>
               <div class="price">
          
          <strong>{reg.id}</strong>
          </div>
         
           </div></div>
           
      </td>
      <td><strong>{reg.Email}</strong></td>
      <td><strong>{reg.Number}</strong></td>
      
    </tr>
    <tr>
    <td>
    
           </td></tr></table></div></div>)
      const[rr,setRr]=useState(false);
    return (
        <div>
           <button class="btn" onClick={(e)=>setRr(false)}>OTHER</button><button class="btn" onClick={(e)=>setRr(true)}>SUSCRIBERS</button>
           <br/>
           <br/>
           {!rr?<div class="overflow">{orderss}</div>:<div>{regs}</div>}
        </div>
    )
}

export default Orders;
