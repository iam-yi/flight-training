import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function RentalPrice({ price }) {
    const columnDefs = [
        {field: 'aircraft'},
        {field: 'speed'},
        {field: 'features'},
        {field: 'price'}
    ];

    const rowData = [{price}];
    return (
        <>
        <h1>Aircraft Rental Rates</h1>
        <div className='ag-theme-alpine' style={{height:500}}>
            <AgGridReact 
                rowData={price}
                coloumDefs={columnDefs} />
        </div>
        {/* <table>
            <thread>
                <tr class="row-1 odd">
                <th>Aircraft</th>
                <th>Speed (Kts) </th>
                <th>Features</th>
                <th>Renatl Rate/Hr</th>
                </tr>
            </thread>
            <tbody>
                <td>{price.aircraft}</td>
                <td>{price.speed}</td>
                <td>{price.features}</td>
                <td>{price.price}</td>
            </tbody>

        </table> */}
        </>
    )
}