import "../Style/History.css"
import historyServices from "../shared/history-services";
import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Button} from "@mui/material";

  
    function handleClick() {
      window.location.href = './Issue';
    }

function History(){
 
      const [data,setData]=useState([]);

    useEffect(()=>{
        fetchHistory()
    },[])
    
    const fetchHistory=()=>{
        historyServices.getHistory().then(
            (response)=>{
                if(response.status == 200){
                    setData(response.data)
                }
            } ,(error) => {
                console.log("error: ",error)
            }
         ) ;
    }

     const columnDefs=[
        { headerName:'Category',field:'category',sortable: true, filter: true,resizable:true,flex:1},
        { headerName:'SubCategory',field:'subCategory',sortable: true, filter: true,flex:1},
        { headerName:'Quantity',field:'quantity',sortable: true, filter: true,flex:1},
        { headerName:'Employee ID',field:'emp_ID',sortable: true, filter: true,flex:1},
        { headerName:'Employee Name',field:'employee_Name',sortable: true, filter: true,flex:1},
        { headerName:'Remarks',field:'remarks',sortable: true, filter: true,flex:1},
        { headerName:'Date',field:'date',sortable: true, filter: true,flex:1}
     ]
 

    return (
        <>
        <div className="div_main">

            <h2 className="addhead text-center" >History</h2>
            <hr/>
            <Box sx={{height:'3rem'}}>
            <Button variant="outlined"  onClick={handleClick} style={{float: 'right'}} >Issue Item</Button>
            </Box>
            <Box >
            <div className="ag-theme-balham" id="tbldiv">
            
                <AgGridReact columnDefs={columnDefs} rowData={data} pagination={true} paginationPageSize={15} containerStyle={{margin:'auto'}}/>
            </div>
            </Box>
        </div>
      
        </>
    );
}

export default History