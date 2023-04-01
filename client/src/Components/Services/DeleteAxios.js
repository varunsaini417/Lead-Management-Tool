import axios from "axios";

const DeleteAxios =  async(props) => {

    await axios.delete("http://localhost:5000/leadsData/remove-data", {
        params:{
            data:props.data
        }
    })
        .then(res => {
            console.log(res);
            window.location.reload(true);
        }) 
        .catch(err => console.log(err))
}
export default DeleteAxios