import React from "react";
import Add_header from "./Components/Header";
import AddInventory from "./Pages/ManageInventory";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import History from "./Pages/History";


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
    </Routes>
    </BrowserRouter>
    
    </>
  ); 
}


// const Header = () => <header><Add_header/></header>;

// const Footer = () => <footer>footer</footer>;

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       {children}
//       <Footer />
//     </div>
{/* <div className="mainContainer">
    <Add_header/>;
    <AddInventory/>
    
    </div> */}
//   );
// };

// export default function App() {
//   return <Layout></Layout>;
// }