import { Box, Button } from "@mui/material";
import inventoryServices from "../shared/services/inventory-services";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "../Style/Grocery.css"

import {useNavigate} from "react-router-dom";

const Grocery = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchGroceryDetails();
  }, []);

  const navigate = useNavigate();
  function handleClick() {
      navigate("/addNewGrocery")
      }

  const columns = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      field: "month",
      headerName: "Month",
      flex: 1,
      sortable: true,
      filter: true,
    },
    {
      field: "attachment",
      headerName: "Attachment",
      sortable: true,
      filter: true,
      flex: 1,
      cellRenderer: function(params) { return <a href={params.value} target="_blank"> {params.value} </a>}
    },
    {
      field: "dateCreated",
      headerName: "Date",
      sortable: true,
      filter: true,
      flex: 1,
    },
  ];

  const fetchGroceryDetails = () => {
    inventoryServices.Get_GroceryDetails().then(
      (response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  };

  return (
    <>
      <div className="container1">
        <h1
          style={{
            margintop: 1,
            fontweight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Grocery
        </h1>
        <hr />
        <Box sx={{ height: "3rem" }}>
          <Button
            variant="outlined"
            onClick={handleClick}
            style={{ float: "right" }}
          >
            {" "}
            Add New
          </Button>
        </Box>

        <Box>
          <div className="ag-theme-balham" id="agdiv">
            <AgGridReact
              columnDefs={columns}
              rowData={data}
              pagination={true}
              paginationPageSize={6}
              containerStyle={{ height: "60%" }}
            />
          </div>
        </Box>
      </div>
    </>
  );
};

export default function ViewGrocery() {
  return <Grocery />;
}

