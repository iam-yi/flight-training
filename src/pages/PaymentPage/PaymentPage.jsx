import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
    const navigate = useNavigate();

    const routeChange = () =>{
        navigate('/success');
      }
    return (
        <>
        <h1>Payment Info</h1>
            <p>Credit Card Number</p>
            <input
                name='number'
                type='number' 
                label='Credit Card Number' 
                placeholder='0000111100001111' 
            />
            <p>Billing Zip</p>
            <input
                name='postal_billing_zip_code' 
                type='number'
                max='99999'
                label='Billing Zip' 
                placeholder='Enter Billing Zip Code'
            />
            <p>Month</p>
            <input 
                width={2} 
                name='expiry_month' 
                type='number'
                label='Month' 
                placeholder="01"
            />
            <p>Year</p>
            <input 
                width={2} 
                type='number'
                name='expiry_year' 
                label='Year' 
                placeholder="22"
            />
            <p>CVC</p>
            <input 
                width={3} 
                name='cvc'
                type='number'
                label='CVC' 
                placeholder='123'
            />
            <br />
        
        <button type="submit" onClick={routeChange}>Complete Checkout and Pay</button>
       
        </>
    );
}