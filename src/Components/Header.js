import { Link } from "react-router-dom";
import "../Style/Header.css";
import "react-bootstrap";

function handleClick() {
  localStorage.clear();
  window.location.href = "/Login";
}

export function Add_header() {
  return (
    <div>
      <div className="main">
        <div className="navbar navbar-brand" id="inventory">
          <a href="#home"></a>
          <i> INNOventory</i>
        </div>
        <div
          className="navbar-collapse collapse d-sm-inline-flex justify-content-between"
          
        >
            <ul className="ulnavbar">
                
                <Link to="/dashboard" className="nav-link">Home</Link>                   
                <Link to="/history" className="nav-link">History</Link>
                <Link to="/manageInventory" className="nav-link">Manage Inventory</Link> 
                <Link to="/stock" className="nav-link">Stock</Link>
                <Link to="/grocery" className="nav-link">Grocery</Link>
                <Link to="/addNewEmployee" className="nav-link">Add New Employee</Link>
                
            </ul>
          
        </div>
        <div>
          <button id="logout" onClick={handleClick}>
            {/* {" "} */}
            <a>LOG OUT </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Loginheader() {
  return (
    <>
      <div className="mainLogin" style={{ textAlign: "center" }}>
        <span id="inno">InnoVentory</span>
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
