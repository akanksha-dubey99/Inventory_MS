const NewEmployee = ()=> {
    return(
        <>
        <div className="container1">
        <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Add New Employee</h1>
        <hr/>
        <div>
            <label className='label'>Employee Id:</label>
            <input type='number' className='select1 form-control' min={1}/>

        </div>
           
         <div>
            <label className='label'>Name:</label>
            <input type='text' className='select1 form-control' min={1}/>

         </div>
          
          <div>
          <label className='label'>Email:</label>
          <input type='email' className='select1 form-control' min={1}/>
          </div>
           <div>
           <button id="button" type="submit">Submit</button>
          </div>

        </div>
        </>

    );
};

export default function ViewEmployee(){
    return <NewEmployee/>
}