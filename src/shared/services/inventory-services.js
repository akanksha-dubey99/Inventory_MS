import axios from "axios";
import { API_Inventory } from "../../Constant/urlConstants";

const PostInventoryData=(input)=>{
    return axios.post(
        `${API_Inventory}/PostInventoryData`,
        input,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const PostGroceryData=(data)=>{
    return axios.post(
        `${API_Inventory}/AddGrocery`,
        data,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const PostEmployeeDetails=(input)=>{
    return axios.post(
        `${API_Inventory}/AddEmployee`,
        input,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const UserLoginDetails=(data)=>{
    return axios.post(
        `${API_Inventory}/UserLogin`,
        data,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const Get_GroceryDetails=()=>{
    return axios.get(
        `${API_Inventory}/Grocery_Details`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const inventoryServices={
    PostInventoryData,
    PostGroceryData,
    PostEmployeeDetails,
    UserLoginDetails,
    Get_GroceryDetails
}

export default inventoryServices