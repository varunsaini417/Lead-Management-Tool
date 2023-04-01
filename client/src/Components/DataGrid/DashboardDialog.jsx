import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import "./GridMain.css"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddDialog = (props) => {

  const openAdd = props.onOpen;
  const handleClose = props.onClose;

  return (
    <section>
      <Dialog open={openAdd} onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <form className='edit-form'>
            <TextField id="document-id" className="dialog-text" label="Id" variant="filled" />
            <TextField id="invoice-id" className="dialog-text" label="Name" variant="filled" />
            <TextField id="customer-number" className="dialog-text" label="Number" variant="filled" />
            <TextField id="business-year" className="dialog-text" label="Price" variant="filled" />

            <div className='dialog-button'>
              <Button className="button-main" sx={{ marginRight: "15px" }} variant="outlined" onClick={handleClose} >Add</Button>
              <Button className="button-main" variant="outlined" onClick={handleClose} >Cancel</Button>
            </div>

          </form>

        </DialogContent>
      </Dialog>
    </section>
  )
}

export default AddDialog