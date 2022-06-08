import { AgGridReact } from 'ag-grid-react';
// import React, { useState } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function RentalPrice({ prices }) {
    // const columnDefs = [
    //     {field: 'aircraft'},
    //     {field: 'speed'},
    //     {field: 'features'},
    //     {field: 'price'}
    // ];

    // const rowData = [{price}];
    return (
        <>
        <h1>Aircraft Rental Rates</h1>
        {/* <div className='ag-theme-alpine' style={{height:500}}>
            <AgGridReact 
                rowData={price}
                coloumDefs={columnDefs} >
            </AgGridReact>            
        </div> */}
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
        </>
    )
}