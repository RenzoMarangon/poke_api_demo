import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import Use_Alert from './Use_Alert';
import Use_Modal from './Use_Modal';

const Pokemons_delete_pokemon = ({pokemon}) => {
    const { name, type, numberID, img,id } = pokemon;
    
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [ msg, setMsg ] = useState('')
    const [ severity, setSeverity ] = useState('')

    const config ={
        headers:{
            poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
        }
      }

    const url = `https://poke-apix.herokuapp.com/api/pokemon/${id}`
    // const url = ''
    const eliminatePokemon = () => {
        axios.delete(url,config)
          .then(()=>{
            setMsg(`${pokemon.name} se ha borrado correctamente`)
            setSeverity('success')
            setOpenAlert(true)
            setTimeout(()=>{
              window.location.reload()
            },2000)
          })
          .catch((response)=>{
            setMsg(`Error de conexión`)
            setSeverity('error')
            setOpenAlert(true)
          })

    }

    const openModal = () => {
      setOpen(true);
    }

    return (
    <div className='pokemons-container__pokemon stat' >
      <img src={img} />
      <p>N° {numberID}</p>
      <h3>{name}</h3>
      <div>
        {
        type.map(t => {
          return <p className={t} > {t}</p>
        })
        }
        <Button onClick={openModal}>Delete</Button>
      </div>

      <Use_Modal open={open} setOpen={setOpen} pokemon={pokemon} action={ eliminatePokemon }/>
      <Use_Alert open={openAlert} setOpen={setOpenAlert} msg={msg} severity={severity} />
    </div>
  )
}

export default Pokemons_delete_pokemon