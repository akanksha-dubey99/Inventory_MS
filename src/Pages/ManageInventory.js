import { useState } from 'react';
import '../Style/ManageInventory.css'
import Data from '../Demo_Data/Data';

function Inventory(){
    const [fillform,setFillform]=useState([])
    const [subCategory,setSubCategory]=useState([]);
    
     const listCategory=Data.map((item)=>
        <option key={item.id} value={item.Category}>{item.Category}</option>
        );

        
        //const Add_div=document.getElementById('hide');

        function handleSubCategory(){
            const SelectedCategory=document.getElementById('SelecteCategory').value;
            const selectSubcategory=document.getElementById('subCategory');
          //   console.log(SelectedCategory)
          if(SelectedCategory==="Miscellaneous"){
            const options = document.createElement("option");
            options.text = "Add Item";
            options.value = "Add Item";
            selectSubcategory.appendChild(options);
          }else{
            //if(document.getElementById('subCategory'))
            const options = document.removeChild("option");
            options.text = "Add Item";
            options.value = "Add Item";
          }
           const listSubCategory=Data.map((item)=>item.Category===SelectedCategory?<option key={item.id} value={item.SubCategory}>{item.SubCategory}</option>:'No Sub-Category Available');
           setSubCategory(listSubCategory);
    
        }

        function handleSubmit(){

        }

    return(
        <>
        <div className="container1">
        <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Add Inventory</h1>
        <hr/>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label'>Item Category:</label>
            <select className='select1 form-control' id='SelecteCategory' onChange={handleSubCategory}>
                <option value={''}>--Select an option--</option>
                {listCategory}            
            </select>
         </div>
         
          <div>
            <label className='label'>Sub Category:</label>
            <select className='select1 form-control'  id='subCategory' > 
                <option value={''}>--Select an option--</option>
                {subCategory}
            </select>
         </div>

         <div id='hide'>
         <label className='label'>Add Item:</label>
          <input type='text' className='select1 form-control'/>
          
         </div>
          
          <div>
          <label className='label'>Quantity:</label>
          <input type='number' className='select1 form-control' min={1}/>
          <span id='quantity'></span>
          </div>
           
           <div>
           <label className='label'>Price (Per Piece):</label>
          <input type='number' className='select1 form-control'  placeholder=" optional" pattern="[0-9]+" min="1"/>
           </div>
           <div>
           <button id="button" type="submit">Submit</button>
          </div>
        </form>
        
        </div>
        </>
    );
}

export default function AddInventory(){
    return <Inventory/>
}