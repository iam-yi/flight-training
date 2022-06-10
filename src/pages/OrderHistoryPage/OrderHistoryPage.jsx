import * as orderService from "../../utilities/order-service";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import { useEffect, useState } from "react";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const orders = await orderService.getAllForUser();
      setOrders(orders);
    }
    getOrders();
  }, [])
  
  const divs = orders.map(o => <div>{o._id}{o.lineItems[0].aircraft.name}</div>) 

  return (
    <main>  
      <h1>OrderHistoryPage</h1>
      <aside>

      {divs}
      </aside> 
      
    </main>
  );
}