import '../Style/Header.css';
import 'react-bootstrap';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AddInventory from '../Pages/ManageInventory';
// import History from '../Pages/History';
// import ViewStock from '../Pages/Stock';
// import ViewGrocery from '../Pages/Grocery';
// import ViewIssue from '../Pages/Issue';
// import AppD from "../Pages/Dashboard";

import NewEmployee from "../Pages/NewEmployee";
import AddNewGrocery from "../Pages/AddNewGrocery";
import Login from "../Pages/Login";

function handleClick() {
    window.location.href = './Login';
}

export function Add_header() {
    return (
         <div>
            <div className='main'>
                <div className='navbar navbar-brand' id='inventory'><a href="#home"></a><i> INNOventory</i></div>
                <div className='navbar-collapse collapse d-sm-inline-flex justify-content-between' style={{ display: 'flex' }}>
                    <ul className='ulnavbar'>
                        <li ><a href='/dashboard' className='nav-link' >Dashboard</a></li>
                        <li> <a href='/history' className='nav-link' >History</a></li>
                        <li> <a href='/manageInventory' className='nav-link' >Manage Inventory</a></li>
                        <li> <a href='/stock' className='nav-link' >Stock</a></li>
                        <li> <a href='/grocery' className='nav-link' >Grocery</a></li>
                        <li> <a href='/addNewEmployee' className='nav-link' >Add New Employee</a></li>
                    </ul>
                </div>
                <div><button id="logout" onClick={handleClick}> <a >LOG OUT </a></button></div>
            </div>
            </div>
    );
}

export function Loginheader() {
    return (
        <>

            <div className='mainLogin' style={{ textAlign: 'center' }}>
                <span id='inno'>InnoVentory</span>
            </div>
        </>
    );
}
export default function Headers() {
    return (
        <>
            <Add_header />
            <Loginheader />
        </>
    );
}


