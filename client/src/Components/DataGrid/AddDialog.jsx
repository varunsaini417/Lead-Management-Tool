import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import "./GridMain.css"
import axios from 'axios';
// import AddAxios from '../Services/AddAxios';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddDialog = (props) => {
  const [leadsData,setLeadsData] = useState({
    leadName: "",
    mobileNumber: "",
    email: "",
    requirenment: "",
    quickNote: ""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setLeadsData(prevValue =>{
      if(name === "leadName"){
        return{
          leadName: value,
          mobileNumber: prevValue.mobileNumber,
          email: prevValue.email,
          requirenment: prevValue.requirenment,
          quickNote: prevValue.quickNote
        };
      
      } else if(name === "mobileNumber"){
        return {
          leadName: prevValue.leadName,
          mobileNumber: value,
          email: prevValue.email,
          requirenment: prevValue.requirenment,
          quickNote: prevValue.quickNote
        };
      } else if(name === "email"){
        return {
          leadName: prevValue.leadName,
          mobileNumber: prevValue.mobileNumber,
          email: value,
          requirenment: prevValue.requirenment,
          quickNote: prevValue.quickNote
        }
      } else if(name === "requirenment"){
        return {
          leadName: prevValue.leadName,
          mobileNumber: prevValue.mobileNumber,
          email: prevValue.email,
          requirenment: value,
          quickNote: prevValue.quickNote
        }
      } else if( name === "quickNote"){
        return {
          leadName: prevValue.leadName,
          mobileNumber: prevValue.mobileNumber,
          email: prevValue.email,
          requirenment: prevValue.requirenment,
          quickNote: value
        }
      }
    })
  }
  const openAdd = props.onOpen;
  const handleClose = props.onClose;

  const handleAdd = () => {
    axios.post('http://localhost:5000/leadsData/add',leadsData)
      .then(response =>{
        console.log(response.data);
        
      }).catch(err=>{
        let error = err.response.data.errors
        if(Object.values(error).includes("Enter 10-digit number")){
          alert(error = err.response.data.errors.mobileNumber)
        }else if(Object.values(error).includes("enter a name")){
          alert(error= err.response.data.errors.leadName)
        }
        
      })
      window.location.reload(true);
      handleClose();
  }

  return (
    <section>
      <Dialog open={openAdd} onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <form className='edit-form'>
            <TextField id="document-id" value={leadsData.leadName} className="dialog-text" label="leadName" variant="filled" name='leadName' onChange={handleChange}/>
            <TextField id="invoice-id" value={leadsData.mobileNumber} className="dialog-text" label="mobileNumber" variant="filled" name='mobileNumber' onChange={handleChange}/>
            <TextField id="customer-number" value={leadsData.email} className="dialog-text" label="email" variant="filled" name='email' onChange={handleChange}/>
            <TextField id="business-year" value={leadsData.requirenment} className="dialog-text" label="requirenment" variant="filled" name='requirenment' onChange={handleChange}/>
            <TextField id="business-year" value={leadsData.quickNote} className="dialog-text" label="quickNote" variant="filled" name='quickNote' onChange={handleChange}/>
            <div className='dialog-button'>
              <Button className="button-main" sx={{ marginRight: "15px" }} variant="outlined" onClick={handleAdd} >Add</Button>
              <Button className="button-main" variant="outlined" onClick={handleClose} >Cancel</Button>
            </div>

          </form>

        </DialogContent>
      </Dialog>
    </section>
  )
}

export default AddDialog