import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import "../Style/NewEmployee.css"
import { useState } from 'react';
import inventoryServices from '../shared/services/inventory-services';

const NewEmployee = ()=> {

  const [empid, setEmpid] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const input={
      Emp_Id:empid,
      Name:name,
      Email:email
  }

   const AddEmployee=(input)=>{
    inventoryServices.PostEmployeeDetails(input).then(
            (response)=>{
                if(response.status==200){
                    setEmpid("");
                    setName("");
                    setEmail("");
                    setMessage(response.data)
                }
            },(error) => {
                console.log("error: ",error)
            }
        )
   }

  let handleSubmit=(e)=>{
    e.preventDefault();
     AddEmployee(input)
  }

  const success={
    color:"green"
  }

  return(
        <>
       <div id='emp_div'>
        <h2 style={{textAlign:'center',marginTop:25}}>Add New Employee</h2>
        <hr id='hr'/>
       <Box display="flex" justifyContent="center">
        <form id='div_form' onSubmit={handleSubmit}>
         <TextField id="outlined_emp" label="Employee Id" variant="standard" type="number" InputProps={{ inputProps: { min: "0" } }} sx={{ m: 2, width: '80%' }} value={empid} onChange={(e)=>setEmpid(e.target.value)} required/>
         <TextField id="outlined_name" label="Name" variant="standard" sx={{ m: 2, width: '80%' }} value={name} onChange={(e)=>setName(e.target.value)} required/>
         <TextField id="outlined_name" label="Email" variant="standard" sx={{ m: 2, width: '80%' }} value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br/>
         <button type='submit' className='btn btn-primary'>Add</button>
        </form>
        
        </Box>
        <div className="message">{message ? <p style={success}>{message}</p> : null}</div>
       </div>
        
        </>

    );
};

export default function ViewEmployee(){
    return <NewEmployee/>
}