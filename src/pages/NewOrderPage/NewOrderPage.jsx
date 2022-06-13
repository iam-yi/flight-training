import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as orderService from '../../utilities/order-service';

const priceLookUp = {
  'Cessna 152': 1115,
  'Cessna 172': 131,
  'Cessna 182 RG': 182,
  'BE76 Duchess': 280
};

export default function NewOrderPage() {
  const [formValue, setFormValue] = useState({
    studentId: "",
    prevHrs: "",
    currHrs: "",
    aircraft: "Cessna 152",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFormValue({...formValue, [name]: value})
  }

  function computePrice() {

    return (parseFloat(formValue.currHrs) - parseFloat(formValue.prevHrs)) * priceLookUp[formValue.aircraft];
  }
  
  const routeChange = async () => {
    const newOrder = {
      studentId: formValue.studentId,
      currHrs: formValue.currHrs,
      prevHrs: formValue.prevHrs,
      aircraft: { name: formValue.aircraft, price: computePrice() },
    };
    await orderService.saveOrder(newOrder);
    navigate('/orders');
  }

  return (
    <>
    <h1>✈️ New Aircarft Rental Page ✈️</h1>
    <div className="form-container">
    <form onSubmit={(event) => event.preventDefault() }>
      <label>Choose Your Instructor: </label>
      <select>
        <option value="JimC">Jim C</option>
        <option value="Step">Stephanie L</option>
        <option value="MarioM">Mario R</option>
        <option value="MarvelJ">Marvel J</option>
      </select>
      <label>ID: </label>
      <input type="text" name="studentId" onChange={handleChange} required />
      <label>Aircraft</label>
      <select name="aircraft"  value={formValue.aircraft} onChange={handleChange}>
        <option value="Cessna 152">Cessna 152</option>
        <option value="Cessna 172">Cessna 172</option>
        <option value="Cessna 182 RG">Cessna 182 RG</option>
        <option value="BE76 Duchess">BE76 Duchess</option>
      </select>
      <label>Pervious Total Hours: </label>
      <input type="text" name="prevHrs" value={formValue.prevHrs} onChange={handleChange} required />
      <label>Current Total Hours: </label>
      <input type="text" name="currHrs" value={formValue.currHrs} onChange={handleChange} required />
      <button type="submit" onClick={routeChange}>Check out</button>
    </form>
    <br />
    <span className="right">The Rental Total Amount: ${computePrice().toFixed(2)}</span>
    </div>
    </>
  );
}