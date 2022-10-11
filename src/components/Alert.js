import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'

const Alert = ({open, setOpen, msg}) => {


    const handleClick = () => {
      setOpen(true);
    };
  
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
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            msg.map(m => {return `${m.msg}\n \n`})
          }
          action={action}
        />
            
        {console.log(msg)}
      </div>
    );
}

export default Alert

/*PARA USARLO

  const [open, setOpen] = useState(false);
  <Alert open={open} setOpen={setOpen} msg={'Mensaje'}/>

*/