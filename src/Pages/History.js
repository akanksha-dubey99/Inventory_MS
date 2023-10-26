import "../Style/History.css"
import { Navigate } from 'react-router-dom';
import ViewIssue from './Issue'
import historyServices from "../shared/history-services";
import { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'bootstrap/dist/css/bootstrap.min.css';

  
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
                // console.log("response:- ", response.data)             
                // console.log("response:- ",JSON.parse(JSON.stringify(response)))
            } ,(error) => {
                console.log("error: ",error)
            }
         ) ;
    }

     const columnDefs=[
        { headerName:'Category',field:'category',sortable: true, filter: true},
        { headerName:'SubCategory',field:'subCategory',sortable: true, filter: true},
        { headerName:'Quantity',field:'quantity',sortable: true, filter: true},
        { headerName:'Employee ID',field:'emp_ID',sortable: true, filter: true},
        { headerName:'Employee Name',field:'employee_Name',sortable: true, filter: true},
        { headerName:'Remarks',field:'remarks',sortable: true, filter: true},
        { headerName:'Date',field:'date',sortable: true, filter: true}
    ]
        

    return (
        <>
        <div className="tbldiv">

            <h2 className="addhead text-center" >History</h2>
            <hr/>
            <div>
            <button className="addnew"  onClick={handleClick} style={{float: 'right'}}>Issue Item</button>
            </div>
            <div className="ag-theme-balham" id="tbldiv">
                <AgGridReact columnDefs={columnDefs} rowData={data} pagination={true} paginationPageSize={16}/>
            </div>
        </div>
      
        </>
    );
}

export default History