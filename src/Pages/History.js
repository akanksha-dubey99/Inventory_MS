import "../Style/History.css";
import historyServices from "../shared/history-services";
import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const innerstyle={
    marginRight:"10px",
}

function handleClick() {
  window.location.href = "./Issue";
}

function History() {
  const [data, setData] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [empName, setEmpName] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  function LinkComponent(e) {
    console.log(e.data.employee_Name);
    if (e.data.isReturnable == true) {
      return (
        <Button
          onClick={() => modelOpen(e.data.subCategory, e.data.employee_Name)}
        >
          Return
        </Button>
      );
    } else {
      return <Button disabled>Non-Returnable</Button>;
    }
  }

  const modelOpen = (item, name) => {
    handleOpen(true);
    setSubCat(item);
    setEmpName(name);
  };

  const fetchHistory = () => {
    historyServices.getHistory().then(
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

  const columnDefs = [
    {
      headerName: "Category",
      field: "category",
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      headerName: "SubCategory",
      field: "subCategory",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Quantity",
      field: "quantity",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Employee ID",
      field: "emp_ID",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Employee Name",
      field: "employee_Name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Remarks",
      field: "remarks",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Date",
      field: "date",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Return Item",
      cellRenderer: LinkComponent,
      sortable: true,
      filter: true,
      flex: 1,
    },
  ];

  return (
    <>
      <div className="div_main">
        <h2 className="addhead text-center">History</h2>
        <hr />
        <Box sx={{ height: "3rem" }}>
          <Button
            variant="outlined"
            onClick={handleClick}
            style={{ float: "right" }}
          >
            Issue Item
          </Button>
        </Box>
        <Box>
          <div className="ag-theme-balham" id="tbldiv">
            <AgGridReact
              columnDefs={columnDefs}
              rowData={data}
              pagination={true}
              paginationPageSize={15}
              containerStyle={{ margin: "auto" }}
            />
          </div>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h6>
              Are you sure you want to return {subcat} issued to {empName}?
            </h6>
            <Button onClick={handleClose} variant="contained" color="primary" sx={innerstyle}>
              Yes
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              No
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default History;
