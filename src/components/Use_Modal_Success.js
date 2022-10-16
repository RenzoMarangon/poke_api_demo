import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const succesIMG = './success.svg'
const errorIMG = './errorIMG.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Use_Modal_Success = ({open,setOpen,pokemon,editOrDelete, thenOrCatch, err}) => {
    
      const handleClose = () => {
        setOpen(false);
        thenOrCatch === 'then' && window.location.reload(); 
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
                { thenOrCatch === 'then' && `${!!pokemon && pokemon.name} ${ editOrDelete === 'delete' ? 'eliminado' : 'editado' } correctamente`}
                { thenOrCatch === 'catch' && `Se ha producido un error`}
                {!!err && console.log(err)}
              </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div className='modal'>
                  { thenOrCatch === 'then' && <img  src={succesIMG} />}
                  { thenOrCatch === 'catch' && <img  src={errorIMG} />}
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

export default Use_Modal_Success