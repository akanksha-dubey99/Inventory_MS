import Data from "../Demo_Data/Data";
import "../Style/History.css"
import { Navigate } from 'react-router-dom';
import ViewIssue from './Issue'
  
    function handleClick() {
      window.location.href = './Issue';
    }


function History(){
    return (
        <>
        <div className="tbldiv">

            <h2 className="addhead text-center" >History</h2>
            <hr/>
            <button className="addnew"  onClick={handleClick} style={{float: 'right'}}>Issue Item</button>
        <table className="tbl1 table">
            <thead className="thead-dark">
                <tr>
                    <th>Category</th>
                    <th>SubCategory</th>
                    <th>Quantity</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th> Remarks</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {
                Data.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.Category}</td>
                            <td>{data.SubCategory}</td>
                            <td>{data.Quantity}</td>
                            <td>{data.Employee_id}</td>
                            <td>{data.Employee_Name}</td>
                            <td>{data.Remarks}</td>
                            <td>{data.DateTime}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
      
        </>
    );
}

export default History