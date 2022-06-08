
import './RentalPrice.css';


export default function RentalPrice({ prices }) {
    
    return (
        <>
        <h1>Aircraft Rental Rates</h1>
        
        <table>
            <thead>
                <tr class="row-1 odd">
                <th>Aircraft</th>
                <th>Speed (Kts) </th>
                <th>Features</th>
                <th>Renatl Rate/Hr</th>
                </tr>
            </thead>
            <tbody>
                
                {prices.map(p => (
                    <tr>
                    <td>{p.aircraft}</td>
                    <td>{p.speed}</td>
                    <td>{p.features}</td>
                    <td>{p.price}</td>
                    </tr>
                ))}
              
            </tbody>
        </table>
        <p>Note: Cancellation must be made within 24 hours, otherwise will charge $50 non refundale</p>
       
        </>
    )
}