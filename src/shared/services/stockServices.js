import axios from "axios";
import authHeader from "./auth-header";
import {Stock_url} from "../../Constant/urlConstants";

const getStock= async ()=>{
    return await axios.get(
        `${Stock_url}/Stocks`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const getStocMoreInfo= async(innerData)=>{
    return await axios.get(
        `${Stock_url}/stockMoreInfo?innerData=${innerData}`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const stockServices={
    getStock,
    getStocMoreInfo
}

export default stockServices
