import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DialogContentText from '@mui/material/DialogContentText';

import "./GridMain.css"
import DeleteAxios from '../Services/DeleteAxios';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteDialog = (props) => {

  const openAdd = props.onOpen;
  const handleClose = props.onClose;
  let delNum = props.selectionLength;
  const data= props.data;

  const handleDelete = () => {
    DeleteAxios({data});
    handleClose();
  }

  return (
    <section>
      <Dialog open={openAdd} onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <form className='edit-form'>
            <DialogContentText>
                {`Are you sure you want to delete ${delNum} item?`}
            </DialogContentText>

            <div className='dialog-button'>
              <Button className="button-main" sx={{ marginRight: "15px" }} variant="outlined" onClick={handleDelete} >Delete</Button>
              <Button className="button-main" variant="outlined" onClick={handleClose} >Cancel</Button>
            </div>

          </form>

        </DialogContent>
      </Dialog>
    </section>
  )
}

export default DeleteDialog;