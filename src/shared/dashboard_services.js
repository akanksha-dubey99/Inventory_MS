import axios from "axios";
import {Dashboard_url} from "../Constant/urlConstants";

const getUsedUnit = async ()=>{
    return await axios.get(
        `${Dashboard_url}/UsedUnits`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const getLeftUnit = async ()=>{
    return await axios.get(
        `${Dashboard_url}/LeftUnits`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const sportsGoods = async ()=>{
    return await axios.get(
        `${Dashboard_url}/sportsGoods`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const Stationary = async ()=>{
    return await axios.get(
        `${Dashboard_url}/Stationary`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const Sanitation = async ()=>{
    return await axios.get(
        `${Dashboard_url}/Sanitation`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const Accessories = async ()=>{
    return await axios.get(
        `${Dashboard_url}/Accessories`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const WelcomeKit = async ()=>{
    return await axios.get(
        `${Dashboard_url}/WelcomeKit`,
        {
            headers: {"Accept": "application/json"}
        }
    )
}
const dashboardServices={
    getUsedUnit,
    getLeftUnit,
    sportsGoods,
    Stationary,
    Sanitation,
    Accessories,
    WelcomeKit
}
export default dashboardServices