import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import inventoryServices from "../shared/services/inventory-services";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "../Style/Grocery.css"

function handleClick() {
  window.location.href = "./AddNewGrocery";
}
function LinkComponent(e) {
   console.log(e.data.attachment)
   const attach = e.data.attachment
  return <Button onClick={() => attach}>Attachment</Button>;
}

const Grocery = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchGroceryDetails();
  }, []);

  const columns = [
    // { field: 'id', headerName: 'Id', width: 90 },
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
      cellRenderer: LinkComponent,
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
          {/* <Button sx={{float:'right'}}> Add New</Button> */}
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

