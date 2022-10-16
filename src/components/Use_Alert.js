import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { Alert } from '@mui/material';
import '../css/index.css'

const Use_Alert = ({open, setOpen, msg, severity}) => {

  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    return (
      <Snackbar
      className='alert' 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose} 
      anchorOrigin={{vertical:'bottom',horizontal:'center'}}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%'}} >
          {msg}
        </Alert>
      </Snackbar>
    );
}

/*PARA USARLO

  const [open, setOpen] = useState(false);
  <Alert open={open} setOpen={setOpen} msg={'Mensaje'}/>

*/

export default Use_Alert;