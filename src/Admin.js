import React,{useState} from 'react';

function Admin() {
    const[suscribe,setSucribe]=useState([]);
    const[order,setOrder]=useState([]);
    const[orders,setOrders]=useState(true);
    const list= order && order.map(i=><div><h5>HEY</h5>
        <h1>{i.name}</h1><br/>
        <h1>{i.email}</h1><br/>
        <h1>{i.phone}</h1><br/>
        <h1>{i.type}</h1><br/>
        <h1>{i.des}</h1><br/>
        <h1><small><pre>{i.amount}</pre></small></h1>
    </div>)
    const listed=suscribe && suscribe.map(i=>
        <div>
            <h1>{i.phone}</h1><br/>
            <h1>{i.email}</h1><br/>
        </div>)
        const handleli=(e)=>{
            e.preventDefault();
           setOrders(true);
        }
        const handlelii=(e)=>{
            e.preventDefault();
            setOrders(false);
         }
    return (
        <div>
            <h1>HEY</h1><button onClick={(e)=>handleli(e)}>ORDERS</button><button onClick={(e)=>handlelii(e)}>SUSCRIBERS</button>
            {orders?<div>{list}</div>:<div>{listed}</div>}
            
        </div>
    )
}

export default Admin
