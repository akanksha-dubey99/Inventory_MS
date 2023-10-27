import React from "react";
import Foo from "./Components/Header";
import AddInventory from "./Pages/ManageInventory";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import AppD from "./Pages/Dashboard";
import History from "./Pages/History";
import Stock from "./Pages/Stock"; 
import Grocery from "./Pages/Grocery";
import Issue from "./Pages/Issue";
import NewEmployee from "./Pages/NewEmployee";
import AddNewGrocery from "./Pages/AddNewGrocery";
import Login from "./Pages/Login";
import {Loginheader,Add_header} from "./Components/Header"
import Footer from "./Components/Footer";
import ViewStock from "./Pages/Stock";
import ViewGrocery from "./Pages/Grocery";
import ViewIssue from "./Pages/Issue";

export default function App() {
  return(
    <>
       <div
      style={{
        margin: 0,
        padding: 0,
        height: "100%",
      }}
    >
    <div
        style={{
          minHeight: window.innerHeight,
          position: "relative",
          backgroundColor:'ghostwhite',
        }}
      >
    {window.location.pathname !== '/Login' ? (<Add_header/>) : (<Loginheader/>)}
    
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppD />} />
            <Route path="dashboard" element={<AppD />} />
            <Route path="history" element={<History />} />
            <Route path="manageInventory" element={<AddInventory />} />
            <Route path="stock" element={<ViewStock />} />
            <Route path="grocery" element={<ViewGrocery />} />
            <Route path="issue" element={<ViewIssue />} />
            <Route path="addNewGrocery" element={<AddNewGrocery />} />
            <Route path="addNewEmployee" element={<NewEmployee />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      {window.location.pathname !== "/ABC" ? <Footer /> : null}
    </div>
    </>
  ); 
}