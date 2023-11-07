import { Box, FormControl, MenuItem } from "@mui/material";
import { TextField,InputLabel,Select } from '@mui/material';
import { useState } from "react";
import inventoryServices from "../shared/services/inventory-services";

const AddNewGrocery = () => {
    const [title,setTitle]=useState('')
    const [month,setMonth]=useState('')
    const [file,setFile]=useState('')
    const [msg,setMsg]=useState('')
    const data={
        Title:title,
        Month:month,
        Attachment:file
    }
     
    const Month=[
        'January','February','March','April','May','June','July','August','September','October','November','December'
    ]

    const AddGrocery=(data)=>{
       inventoryServices.PostGroceryData(data).then(
        (response)=>{
            if(response.status==200)
               setFile('')
               setMonth('')
               setTitle('')
               setMsg('Grocery Details Added SuccessFully');
        },(error)=>{
            console.log("error",error)
        }
       )
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        AddGrocery(data)
      }

    function handleChange(e){
        setTitle(e.target.value)
        setMsg('')
      }

    return(
        <>
       <div className="container1">
            <h1 style={{margintop:1,fontweight:'bold',textAlign:'center'}}>Add Grocery </h1>
        <hr/>
            <Box sx={{width:'70%', margin:'auto'}}>
                <form style={{marginTop:'10%'}} onSubmit={handleSubmit}>
                 <TextField id="title" variant="standard" label="Title" fullWidth value={title} onChange={handleChange} required/>
                 <FormControl fullWidth sx={{marginTop:'5%'}} variant="standard">
                 <InputLabel id="demo-select">Month</InputLabel>
                 <Select  labelId='demo-select' value={month} onChange={(e)=>setMonth(e.target.value)} required>
                 {Month.map((month,index)=><MenuItem value={month} key={index}>{month}</MenuItem>)}
                  
                 </Select>
                 </FormControl>
                  
                  <TextField type="file" variant="standard" label="Attachment" value={file} onChange={(e)=>setFile(e.target.value)} sx={{marginTop:'5%',paddingTop:'5%',paddingBottom:'3%'}} fullWidth required/>
                  <button id="button" type="submit">Submit</button>
                </form>

                <div style={{marginTop:'5%',textAlign:'center',color:'green',fontWeight:'bold'}}>{msg!=''?msg:''}</div>
            </Box>
             
        </div>
        </>

    );
};

export default function AddNew(){
    return <AddNewGrocery/>
}