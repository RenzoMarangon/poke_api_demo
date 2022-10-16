import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Use_Modal_Process = ({ open,setOpen }) => {
    
      const handleClose = () => {
        setOpen(false);
      };
    
      return (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
                Espere mientras se realiza la acción
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div className='modal'>
                <CircularProgress />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Volver</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default Use_Modal_Process