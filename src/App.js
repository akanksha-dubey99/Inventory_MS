import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import AddInventory from "./Pages/ManageInventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppD from "./Pages/Dashboard";
import History from "./Pages/History";
import NewEmployee from "./Pages/NewEmployee";
import AddNewGrocery from "./Pages/AddNewGrocery";
import Login from "./Pages/Login";
import { Loginheader, Add_header } from "./Components/Header";
import ViewStock from "./Pages/Stock";
import ViewGrocery from "./Pages/Grocery";
import ViewIssue from "./Pages/Issue";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect( () => {
    const login =  localStorage.getItem("isLoggedIn");
    console.log("login:- ",login)
    if (login!=null) {
      setIsLoggedIn(true);
    }
  });
   

 function Default(){
  return(<>
   <div
        style={{
          margin: 0,
          padding: 0,
          
        }}
      >
        <div
          style={{
            minHeight: window.innerHeight,
            position: "relative",
            backgroundColor: "ghostwhite",
          }}
        >
          <Add_header />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" Component={Login} element={<Login/>} />
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
      </div>
      <Footer/>
  </>)
 }

  return (
    <>
    {isLoggedIn?<Default/>:<Login/>}
    </>
  );
}

      