import axios from "axios";
import authHeader from "./services/auth-header";
import {API_History} from "../Constant/urlConstants";

const getHistory= async ()=>{
    return await axios.get(
        `${API_History}/GetHistory`,
        {
            headers: {"Accept": "application/json"}
        }
        // `${process.env.REACT_APP_API}/GetHistory`
    )
}

const GetCategory=()=>{
return axios.get(
    `${API_History}/Category`,
    {
        headers: {"Accept": "application/json"}
    }
)
}

const GetEmployee=()=>{
    return axios.get(
        `${API_History}/GetEmployee`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const Get_Subcategory=(selectedCategory)=>{
    return axios.get(
        `${API_History}/GetSubcategory?selectedCategory=${selectedCategory}`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const GetQuantity=(subCategory)=>{
    return axios.get(
            `${API_History}/GetQuantity?subCategory=${subCategory}`,
            {
                headers: {"Accept": "application/json"}
            }
    )
}

const Post_Dispatch=(input)=>{
   return axios.post(
    `${API_History}/Dispatch`,
    input,
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
    GetQuantity,
    Post_Dispatch
}

export default historyServices