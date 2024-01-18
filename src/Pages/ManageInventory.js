import { useEffect, useState } from "react";
import "../Style/ManageInventory.css";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import historyServices from "../shared/services/history-services";
import inventoryServices from "../shared/services/inventory-services";
import { Autocomplete, createFilterOptions } from "@mui/material";

function Inventory() {
  const [item, setItem] = useState([]);
  const [subitem, setSubitem] = useState([]);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [message, setMessage] = useState("");
  const input = {
    item_category: category,
    sub_category: subCategory,
    quantity: quantity,
  };

  const filter = createFilterOptions();

  useEffect(() => {
    Category();
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

  const InventoryData = (input) => {
    inventoryServices.PostInventoryData(input).then(
      (response) => {
        if (response.status == 200) {
          setCategory("");
          setSubCategory("");
          setQuantity("");
          setMessage(response.data);
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  function handleChange(e) {
    setMessage("");
    var selectedCategory = e.target.value;
    setCategory(e.target.value);
    if (
      selectedCategory == "Miscellaneous" ||
      selectedCategory == "Medicines" ||
      selectedCategory == "Grocery" ||
      selectedCategory == "Housekeeping"
    ) {
      setShow(true);
    }
    SubCategory(selectedCategory);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    InventoryData(input);
  };

  function Common_Option() {
    return (
      <>
        <FormControl sx={{ width: "75%", marginTop: "5%" }} variant="standard">
          <InputLabel id="sub">Sub-Category</InputLabel>
          <Select
            labelId="sub"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
            defaultValue={""}
          >
            {subitem.map((subcategory) => (
              <MenuItem value={subcategory} key={subcategory}>{subcategory}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  }

  function Add_Item() {
    return (
      <>
        <FormControl sx={{ width: "75%", marginTop: "5%" }} variant="standard">
          <Autocomplete
            value={subCategory}
            onChange={(event, value) => setSubCategory(value)}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              // Suggest the creation of a new value
              if (params.inputValue !== "") {
                filtered.push(`${params.inputValue}`);
              }
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={subitem}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Sub Category" />
            )}
            required
            defaultValue={""}
          />
        </FormControl>
      </>
    );
  }

  return (
    <>
      <div className="container1">
        <h1 style={{ margintop: 1, fontweight: "bold", textAlign: "center" }}>
          Add Inventory
        </h1>
        <hr />
        <Box textAlign={"center"} sx={{ marginTop: 5 }}>
        <div className="message" style={{margintop:'1%'}}>{message ? <p style={{color:"green"}}>{message}</p> : null}</div>
          <form onSubmit={handleSubmit} style={{ marginTop: "2%" }}>
            <FormControl fullWidth sx={{ width: "75%" }} variant="standard">
              <InputLabel id="demo-select">Category</InputLabel>
              <Select
                labelId="demo-select"
                onChange={handleChange}
                value={category}
                required
              >
                {item.map((category) => (
                  <MenuItem value={category} key={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {show ? <Add_Item /> : <Common_Option />}

            <TextField
              id="qty"
              label="Quantity"
              variant="standard"
              type="number"
              InputProps={{ inputProps: { min: "0" } }}
              sx={{ m: 5, width: "75%" }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            /> 
            
            <br />

            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </Box>
      </div>
    </>
  );
}

export default function AddInventory() {
  return <Inventory />;
}
