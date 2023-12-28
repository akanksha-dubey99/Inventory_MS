import { Box, FormControl, MenuItem } from "@mui/material";
import { TextField, InputLabel, Select } from "@mui/material";
import { useEffect, useState } from "react";
import inventoryServices from "../shared/services/inventory-services";

const AddNewGrocery = () => {
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const data = {
    Title: title,
    Month: month,
  };
  const files = {
    file: file,
  };
useEffect(()=>{console.log("Fileeee:- ", file)

})
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const AddGrocery = (data, file) => {
    const formData = new FormData();
    formData.append("file", file);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    inventoryServices.PostGroceryData(formData).then(
      (response) => {
        if (response.status == 200) {
          setFile("");
          setMonth("");
          setTitle("");
          setMsg("Grocery Details Added SuccessFully");
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(files);
    // console.log(files)
    AddGrocery(data, file);
  };

  function handleChange(e) {
    setTitle(e.target.value);
    setMsg("");
  }

  return (
    <>
      <div className="container1">
        <h1 style={{ margintop: 1, fontweight: "bold", textAlign: "center" }}>
          Add Grocery{" "}
        </h1>
        <hr />
        <Box sx={{ width: "70%", margin: "auto" }}>
          <form style={{ marginTop: "10%" }} onSubmit={handleSubmit}>
            <TextField
              id="title"
              variant="standard"
              label="Title"
              fullWidth
              value={title}
              onChange={handleChange}
              required
            />
            <FormControl fullWidth sx={{ marginTop: "5%" }} variant="standard">
              <InputLabel id="demo-select">Month</InputLabel>
              <Select
                labelId="demo-select"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              >
                {Month.map((month, index) => (
                  <MenuItem value={month} key={index}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              type="file"
              variant="standard"
              label="Attachment"
              accept=".jpg, .png"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log("e.target.files[0]:- ", e.target.files[0]);
              }}
              sx={{ marginTop: "5%", paddingTop: "5%", paddingBottom: "3%" }}
              fullWidth
              required
            />
            <button id="button" type="submit">
              Submit
            </button>
          </form>

          <div
            style={{
              marginTop: "5%",
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
            }}
          >
            {msg != "" ? msg : ""}
          </div>
        </Box>
      </div>
    </>
  );
};

export default function AddNew() {
  return <AddNewGrocery />;
}
