import { useState } from 'react';
import '../Style/ManageInventory.css'
import Data from '../Demo_Data/Data';

function Inventory(){
    const [category,setCategory]=useState();

     const listCategory=Data.map((item,index)=>
        <option key={index} value={item.Category}>h{item.category}</option>
        );

    return(
        <>
        <div className="container1">
        <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Add Inventory</h1>
        <hr/>
        <div>
            <label className='label'>Item Category:</label>
            <select className='select1 form-control'>
                <option value={''}>--Select an option--</option>
                {listCategory}
                {/* <option value={'Sanitation'}>Sanitation</option>
                <option value={'Miscellaneous'}>Miscellaneous</option>
                <option value={'Stationary'}>Stationary</option>
                <option value={'Accessories'}>Accessories</option>
                <option value={'Welcome Kit'}>Welcome Kit</option>
                <option value={'Grocery'}>Grocery</option> */}
            </select>
        </div>
           
         <div>
            <label className='label'>Sub Category:</label>
            <select className='select1 form-control'>
                <option value={''}>--Select an option--</option>
                {/* <option value={'Sanitation'}>Sanitation</option>
                <option value={'Miscellaneous'}>Miscellaneous</option>
                <option value={'Stationary'}>Stationary</option>
                <option value={'Accessories'}>Accessories</option>
                <option value={'Welcome Kit'}>Welcome Kit</option>
                <option value={'Grocery'}>Grocery</option> */}
            </select>
         </div>
          
          <div>
          <label className='label'>Quantity:</label>
          <input type='number' className='select1 form-control' min={1}/>
          </div>
           
           <div>
           <label className='label'>Price (Per Piece):</label>
          <input type='number' className='select1 form-control'  placeholder=" optional" pattern="[0-9]+" min="1"/>
           </div>
           <div>
           <button id="button" type="submit">Submit</button>
          </div>

        </div>
        </>
    );
}

export default function AddInventory(){
    return <Inventory/>
}