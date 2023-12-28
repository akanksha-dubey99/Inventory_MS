import "../Style/Login.css";
import innologo from "../Components/innologo.jpg";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import inventoryServices from "../shared/services/inventory-services";
import { Loginheader } from "../Components/Header";
import Footer from "../Components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [islogged, setIslogged] = useState();
  // const [login,setLogin]=useState(true);
  const input = {
    Email: email,
    Password: pass,
  };

  // const navigate = useNavigate();

  function HandleLogin() {
    window.location.href = "./dashboard";
    // navigate("/dashboard");
  }

  const Login = (input) => {
    inventoryServices.UserLoginDetails(input).then(
      (response) => {
        if (response.status == 200) {
          if (response.data === true) {
            // console.log(response.data);
            // setIslogged(response.data)
            // setLogin(response.data)
            localStorage.setItem("isLoggedIn", JSON.stringify(response.data));
            HandleLogin()
          }
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("input:- ",input);
    Login(input);
  }

  return (
    <>
      <div>
        <Box id="background">
        <Loginheader />
          <Box id="logindiv">
            <div className="image">
              <img src={innologo} alt="Logo" className="img" />
            </div>
            <form id="loginForm" onSubmit={handleSubmit}>
              <FormControl>
                <TextField
                  variant="outlined"
                  placeholder="Email"
                  type="email"
                  color="success"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  sx={{ background: "white", width: "20rem" }}
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  color="success"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                  sx={{ background: "white", marginTop: 3, width: "20rem" }}
                  required
                />
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ marginTop: 3, width: "20rem", height: "3rem" }}>
                {" "}
                Login
              </Button>
            </form>

            {/* {islogged?<HandleLogin/>:(<div style={{color:'white',textAlign:'center',fontSize:'20px',marginTop:3}}><i> {login?'':"Please Enter Valid Credentials"} </i></div>)} */}
          </Box>
        </Box>
      </div>
      <Footer/>
    </>
  );
};
export default function viewLogin() {
  return <Login />;
}
