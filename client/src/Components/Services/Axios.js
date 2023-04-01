import axios from "axios";

const Axios = async () => {
    const response = await axios.get("http://localhost:5000/leadsData/");
    var result=response.data;
    console.log(result);
    return result;
}

export default Axios