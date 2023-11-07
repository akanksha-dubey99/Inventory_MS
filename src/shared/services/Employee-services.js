import { Api_Employee } from "../../Constant/urlConstants";
import axios from "axios";

const add_employee=(input)=>{
    return axios.post(
        `${Api_Employee}`,
        input,
        {
            headers: {"Accept": "application/json"}
        }
    )
}

const emp_services={
    add_employee
}
export default emp_services