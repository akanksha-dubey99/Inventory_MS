import React from "react";
import Add_header from "./Components/Header";
import Footer from "./Components/Footer";
import AddInventory from "./Pages/ManageInventory";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Stock from "./Pages/Stock";
import Grocery from "./Pages/Grocery";
import Issue from "./Pages/Issue";
import NewEmployee from "./Pages/NewEmployee";
import AddNewGrocery from "./Pages/AddNewGrocery";

export default function App() {
  return(
    <>
    <Add_header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route index element={<Home/>} path="dashboard"/>
      <Route path="history" element={<History/>}/>
      <Route path="manageInventory" element={<AddInventory/>}/>
      <Route path="stock" element={<Stock/>}/>
      <Route path="grocery" element={<Grocery/>}/>
      <Route path="issue" element={<Issue/>}/>
      <Route path="addNewGrocery" element={<AddNewGrocery/>}/>
      <Route path="addNewEmployee" element={<NewEmployee/>}/>
    </Routes>
    </BrowserRouter>
   <Footer/>
    </>
  ); 
}