import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Autocomplete
} from "@mui/material";
import "../Style/Issue.css";
import { useState, useEffect } from "react";
import historyServices from "../shared/history-services";


function Issue() {

  const [item, setItem] = useState([]);
  const [subitem, setSubitem] = useState([]);
  const [qty, setQty] = useState('');
  const [emp, setEmp] = useState([]);
  const [btn, setBtn] = useState(false);
  const [message,setMessage]=useState('');
  const [input, setInput] = useState({
    Category: "",
    SubCategory: "",
    Quantity: "",
    Employee_Name: "",
    Remarks: "",
  });

  useEffect(() => {
    Category();
    Employee();
  }, []);

  const Category = () => {
    historyServices.GetCategory().then(
      (response) => {
        if (response.status == 200) {
          setItem(response.data);
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const SubCategory = (selectedCategory) => {
    historyServices.Get_Subcategory(selectedCategory).then(
      (response) => {
        if (response.status == 200) {
          setSubitem(response.data);
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const showQty = (sub) => {
    historyServices.GetQuantity(sub).then(
      (response) => {
        if (response.status == 200) {
          setQty(response.data);
        
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const Employee = () => {
    historyServices.GetEmployee().then(
      (response) => {
        if (response.status == 200) {
          setEmp(response.data);
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  
  const IssueItem=(input)=>{
     historyServices.Post_Dispatch(input).then(
      (response) => {
        if (response.status == 200) {
          setInput({})
          setBtn(false)
          setQty('')          
           setMessage(response.data)
          
        }
      },
      (error) => {
        console.log("error", error);
      }
     )
  }

  function handleCategory(e) {
    var selectedCategory = e.target.value;
    setInput({ ...input, Category: e.target.value });
    SubCategory(selectedCategory);
    setQty("");
    setMessage("")
  }

  function handleSubCategory(e) {
    showQty(e.target.value);
    setInput({ ...input, SubCategory: e.target.value });
  }
  function handleQty(e) {
    var num=Number(e.target.value)
    {
      (num > qty) ? setBtn(false) : setBtn(true);
    }
    setInput({ ...input, Quantity: e.target.value });
  }

  function handleForm(e) {
    e.preventDefault();
    IssueItem(input)
    e.target.reset();
  }

  return (
    <>
      <div className="container1">
        <h1 style={{ margintop: 1, fontweight: "bold", textAlign: "center" }}>
          Issue Item
        </h1>
        <hr />
        <Box sx={{ width: "70%", margin: "auto" }}>
        <div className="message" style={{margintop:'1%'}}>{message ? <p style={{color:"green"}}>{message}</p> : null}</div>
          <form style={{ marginTop: "6%" }} onSubmit={handleForm}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-select">Category</InputLabel>
              <Select labelId="demo-select" onChange={handleCategory} value={input.Category} required defaultValue={""}>
                {item.map((item) => (
                  <MenuItem value={item} key={item}>{item}</MenuItem>
                ))}
                
              </Select>
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{ marginTop: "5%" }}>
              <InputLabel id="demo-sub">Sub-Category</InputLabel>
              <Select labelId="demo-sub" onChange={handleSubCategory} value={input.SubCategory} required defaultValue={""}>
                {subitem.map((sub) => (
                  <MenuItem value={sub} key={sub}>{sub}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              variant="standard"
              type="number"
              inputProps={{ min: 0}}
              onChange={handleQty}
              value={input.Quantity}
              sx={{ marginTop: "5%" }}
              fullWidth
            required/>
            <div style={{ marginTop: "4px", color: "green" }}>
              {qty != 0 ? "Available Quantity: " + qty : ""}
            </div>
            <FormControl fullWidth variant="standard" sx={{ marginTop: "3%" }}>
             
              <Autocomplete
            value={input.Employee_Name}
           onChange={(e,value) =>setInput({ ...input, Employee_Name: value })}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={emp}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Employee Name" required/>
            )}
            defaultValue={""}
          />
            </FormControl>

            <TextField
              label="Remarks"
              variant="standard"
              sx={{ marginTop: "5%" }}
              onChange={(e) => setInput({ ...input, Remarks: e.target.value })}
              value={input.Remarks}
              fullWidth
            />
            {btn ? (
              <button id="button" type="submit">
                Submit
              </button>
            ) : (
              <button id="button" type="submit" disabled>
                Submit
              </button>
            )}
          </form>
        </Box>
        
      </div>
    </>
  );
}

export default function ViewIssue() {
  return <Issue />;
}
 