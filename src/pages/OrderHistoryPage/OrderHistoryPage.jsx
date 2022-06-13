import * as orderService from "../../utilities/order-service";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import { useEffect, useState } from "react";
import "./OrderHistoryPage.css";

export default function OrderHistoryPage({}) {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const orders = await orderService.getAllForUser();
      setOrders(orders);
    }
    getOrders();
  }, [])
  
  const divs = orders.map(o => 
    <div className="OrderHistoryPage">
      
      🧾 Order #: {o._id} <br/>
      ✈️ Aircraft Rental: {o.lineItems[0].aircraft.name}  <br/>
      Rental Hour(s): {o.lineItems[0].currHrs - o.lineItems[0].prevHrs } <br />
      Rental Total: ${o.orderTotal}
    </div>) 

  return (
    <main>  
      <h1> Order History Page </h1>
      <aside >
      {divs}
      </aside> 
      
    </main>
  );
}