import Data from "../Demo_Data/StockData";
import stockServices from "../shared/stockServices";
import { useEffect, useState,} from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Stocks.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

const Stock = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [innerData, setInnerData] = useState();
  const [moreData, setmoreData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function LinkComponent(e) {
    // console.log(e.data)
    return <Button onClick={() => modelOpen(e.data.subcategory)}>Details</Button>;
  }

  const ModalData = (data) => {
    stockServices.getStocMoreInfo(data).then(
      (response) => {
        if (response.status == 200) {
          setmoreData(response.data);
        }
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  };

  const modelOpen = (data) => {
    ModalData(data);
    handleOpen(true);
    setInnerData(data);
  };
  useEffect(() => {
    fetchstock();
  }, []);
  const fetchstock = () => {
    stockServices.getStock().then(
      (response) => {
        //console.log(response.data);
        if (response.status == 200) {
          setData(response.data);
        }
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  };
  const moreInfoTable =[
    { headerName: "Date", field: "dateTime", sortable: true, filter: true },
    {
      headerName: "Quantity",
      field: "quantity",
      sortable: true,
      filter: true,
      width: "120%",
    },
    {
        headerName: "Status",
        field: "status",
        sortable: true,
        filter: true,
        width: "120%",
      }

  ];
  const stockTable = [
    { headerName: "Item", field: "subcategory", sortable: true, filter: true,width: "220%", },
    {
      headerName: "Issue Quantity",
      field: "issue_Quantity",
      sortable: true,
      filter: true,
       width: "220%",
    },
    {
      headerName: "Left Quantity",
      field: "left_quantity",
      sortable: true,
      filter: true,
      width: "220%",
    },
    {
      headerName: "Total Quantity",
      field: "total_quantity",
      sortable: true,
      filter: true,
       width: "220%",
    },
    {
      headerName: "MoreInfo",
      cellRenderer: LinkComponent,
      sortable: true,
      filter: true,
      width: "220%",
    },
  ];
  return (
    <>
      <div className="container1">
        <div className="tbldivstock">
          <h2 className="addhead text-center">Inventory Stock</h2>
          <hr />
          <div className="ag-theme-balham" id="tbldivstock">
            <AgGridReact
              columnDefs={stockTable}
              rowData={data}
              pagination={true}
              paginationPageSize={15}
              //containerStyle={{border:"1px solid red"}}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* {innerData} */}
                <center className="ag-theme-balham" id="tbldivstock" style={{width:"100%"}}>
                
                <h5 style={{width:"100%",fontSize: "x-large"}}>{innerData}</h5>

                  <AgGridReact 
                    columnDefs={moreInfoTable}
                    rowData={moreData}
                    pagination={true}
                    paginationPageSize={15}
                    containerStyle={{width:'100%',height:"95%"}}
                  />
                </center>

              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
export default function ViewStock() {
  return <Stock />;
}
