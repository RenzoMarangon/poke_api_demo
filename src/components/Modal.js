import { Button } from '@mui/material';
import React,{useState} from 'react'
import Use_Modal from './Use_Modal';

const Modal = () => {
    const [open, setOpen] = useState(false);

    const usarModal = () =>{
        setOpen(true);
    }

  return (
    <div>
        
        <Button onClick={usarModal}>USar obotn</Button>

        <Use_Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Modal