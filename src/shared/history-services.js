import axios from "axios";
import authHeader from "./services/auth-header";
import {API_url} from "../Constant/urlConstants";

const getHistory= async ()=>{
    return await axios.get(
        `${API_url}/GetHistory`,
        {
            headers: {"Accept": "application/json"}
        }
        // `${process.env.REACT_APP_API}/GetHistory`
    )
}

const GetCategory=()=>{
return axios.get(
    `${API_url}/Category`,
    {
        headers: {"Accept": "application/json"}
    }
)
}

const GetEmployee=()=>{
    return axios.get(
        `${API_url}/GetEmployee`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const Get_Subcategory=(selectedCategory)=>{
    return axios.get(
        `${API_url}/GetSubcategory?selectedCategory=${selectedCategory}`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const GetQuantity=(subCategory)=>{
    return axios.get(
            `${API_url}/GetQuantity?subCategory=${subCategory}`,
            {
                headers: {"Accept": "application/json"}
            }
    )
}

const historyServices={
    getHistory,
    GetCategory,
    GetEmployee,
    Get_Subcategory,
    GetQuantity
}

export default historyServices