import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Use_Modal = ({open,setOpen,pokemon,editOrDelete,button, msg}) => {
    
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
            <DialogTitle>{
                `Usted está a punto de ${ editOrDelete === 'delete' ? 'eliminar' : 'editar' } a ${!!pokemon && pokemon.name}`
              }</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div className='modal'>
                    <img  src={!!pokemon && pokemon.img} />
                    {
                      editOrDelete === 'delete' 
                        ? <p> ¿Está seguro/a de eliminar al pókemon? </p>
                        : <p> Ir a la edición de pókemon </p> 
                    }
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              {button}
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default Use_Modal
