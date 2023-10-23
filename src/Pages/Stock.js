import Data from "../Demo_Data/StockData";


const Stock = () =>{
    return(
        <>
        <div className="container1">
        <h1 style={{margintop:1,fontweight:'bold',textAlign:'center',marginTop:'10px'}}>Inventory Stock</h1>
        <hr/>
        <table className="tbl1 table">
            <thead className="thead-dark">
                <tr>
                    <th>Item</th>
                    <th>Available_Quantity</th>
                    <th>Issued_Quantity</th>
                    <th>Total_quantity</th>
                </tr>
            </thead>
            <tbody>
            {
                Data.map((StockData, index)=>{
                    return(
                        <tr key={index}>
                            <td>{StockData.Item}</td>
                            <td>{StockData.Available_Quantity}</td>
                            <td>{StockData.Issued_Quantity}</td>
                            <td>{StockData.Total_quantity}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
        </>
    )
}

export default function ViewStock(){
    return <Stock/>
}