function handleClick() {
    window.location.href = './AddNewGrocery';
  }

const Grocery = () =>{
    return(
        <>
            <div className="container1">
            <h1 style={{margintop:1,fontweight:'bold',textAlign:'center',marginTop:'10px'}}>Grocery</h1>
        <hr/>
        <button className="addnew" onClick={handleClick} style={{float: 'right'}}>Add New</button>
        <table className="tbl1 table">
            <thead className="thead-dark">
                <tr>
                    <th>Item</th>
                    <th>Available_Quantity</th>
                    <th>Issued_Quantity</th>
                    <th>Total_quantity</th>
                </tr>
            </thead>
        </table>
            </div>
        </>

    );
};

export default function ViewGrocery(){
    return <Grocery/>
}