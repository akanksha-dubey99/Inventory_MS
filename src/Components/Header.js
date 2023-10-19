import '../Style/Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'react-bootstrap';
import { Link } from 'react-router-dom';


function Add_header(){
    return(
        <>
        <div className='main'>
         <div className='navbar navbar-brand' id='inventory'><a href="#home"></a><i> INNOventory</i></div>
         <div className='navbar-collapse collapse d-sm-inline-flex justify-content-between' style={{display:'flex'}}>
            <ul className='ulnavbar'>
                <li ><a href='/dashboard' className='nav-link' >Dashboard</a></li>
                <li> <a href='/history' className='nav-link' >History</a></li>
                <li> <a href='/manageInventory' className='nav-link' >Manage Inventory</a></li>
                <li> <a href='#dashboard' className='nav-link' >Stock</a></li>
                <li> <a href='#dashboard' className='nav-link' >Grocery</a></li>
                <li> <a href='#dashboard' className='nav-link' >Add New Employee</a></li>
            </ul>
         </div>
         <div><button id="logout"> <a >LOG OUT </a></button></div>
        </div>
        </>
    );
}

export default Add_header


