const AddNewGrocery = () => {
    return(
        <>
       <div className="container1">
            <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Add Grocery Data</h1>
        <hr/>
            
        <div>
            <label className='label'>Title:</label>
            <input type='number' className='select1 form-control' min={1}/>

        </div>
           
         <div>
            <label className='label'>Month:</label>
            <select className='select1 form-control'>
                <option value={''}>--Select an option--</option>
            </select>
         </div>
          
          <div>
          <label className='label'>Attachment:</label>
          <input type='email' className='select1 form-control' min={1}/>
          </div>
           <div>
           <button id="button" type="submit">Submit</button>
          </div>

        </div>
        </>

    );
};

export default function AddNew(){
    return <AddNewGrocery/>
}