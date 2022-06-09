import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import order from "../../../models/order";


export default function NewOrderPage() {
  const [formValue, setFormValue] = useState({
    studentId: "",
    prevHrs: "",
    currHrs: "",
    aircraft: "1115",
    price:0,

  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFormValue((prevalue) => {
      const newFormValue = {
        ...prevalue,
        [name]: value
      }
      if(newFormValue.prevHrs && newFormValue.currHrs) {
        const prevHrs = parseFloat(newFormValue.prevHrs);
        const currHrs = parseFloat(newFormValue.currHrs);
        const aircraftPrice = parseFloat(newFormValue.aircraft);
        const price = (currHrs - prevHrs) * aircraftPrice;
        newFormValue.price = price;
        
      }

      return newFormValue;
    })
    

  }
  
  const routeChange = () =>{
    navigate('/payment');
  }

  // const [studentId, setStudentId] = useState('');
  // const [pervHrs, setPervHrs] = useState('');
  // const [totalHrs, setTotalHrs] = useState('');

  // const handleChange = (event) => {
  //   setStudentId(event.target.name);
  //   setPervHrs(event.target.name);
  //   setTotalHrs(event.target.name);
  // }

  return (
    <>
    <h1>✈️ New Aircarft Rental Page ✈️</h1>
    <div className="form-container">
    <form >
      <label>Choose Your Instructor: </label>
      <select value="instructor">
        <option value="JimC">Jim C</option>
        <option value="Step">Stephanie L</option>
        <option value="MarioM">Mario R</option>
        <option value="MarvelJ">Marvel J</option>
      </select>
      <label>ID: </label>
      <input type="text" name="studentId" onChange={handleChange} required />
      <label>Aircraft</label>
      <select name="aircraft"  onChange={handleChange}>
        <option name="aircraft" value="1115">Cessna 152</option>
        <option name="aircraft" value="131">Cessna 172</option>
        <option name="aircraft" value="182">Cessna 182 RG</option>
        <option name="aircraft" value="280">BE76 Duchess</option>
      </select>
      <label>Pervious Total Hours: </label>
      <input type="text" name="prevHrs" onInput={handleChange} required />
      <label>Current Total Hours: </label>
      <input type="text" name="currHrs" onInput={handleChange} required />
      <button type="submit" onClick={routeChange}>Check out</button>
    </form>
    <br />
    <span className="right">The Rental Total Amount: ${formValue.price.toFixed(2)}</span>
    </div>
    </>
  );
}