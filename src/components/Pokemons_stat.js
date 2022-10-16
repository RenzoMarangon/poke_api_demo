import React, { useState } from 'react'
import { Button } from '@mui/material';
import '../css/index.css'
import Use_Modal from './Use_Modal';
import axios from 'axios';
import Use_Modal_Success from './Use_Modal_Success';
import Pokemon_edition from './Pokemon_edition';
import Use_Modal_Process from './Use_Modal_process';

const Pokemons_stat = ({pokemon, setIndex, setAside}) => {
    const { name, type, numberID, img, id } = pokemon;

    const [ open, setOpen ] = useState(false)
    const [ editOrDelete, setEditOrDelete ] = useState('')
    const [ modalMsg, setModalMsg ] = useState('')
    const [ openModalSuccess, setOpenModalSuccess ] = useState(false)
    const [ openModalProcess, setOpenModalProcess ] = useState(false)
    const [ thenOrCatch, setThenOrCatch ] = useState('')



    const config ={
      headers:{
          poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
      }
    }



    const url = `https://poke-apix.herokuapp.com/api/pokemon/${id}`


    //TOCO BOTON 'eliminar'
    const eliminatePokemon = () => {
      setEditOrDelete('delete');
      //Cierro el modal de confirmacion
      setOpen(false)
      //Muestro el modal de 'en proceso'
      setOpenModalProcess(true)
      
      axios.delete(url,config)
        .then(()=>{
          setOpenModalProcess(false)
          setThenOrCatch('then')
          setOpenModalSuccess(true);
        })
        .catch((response)=>{
          setOpenModalProcess(false)
          setThenOrCatch('catch');
          setOpenModalSuccess(true);
        })
    }

    //TOCO BOTON 'Editar'
    const editPokemon = () =>{
      setAside(<></>)
      setOpen(false)
      setIndex(<Pokemon_edition pokemon={pokemon} />)
    }
    
    //ABRIR MODAL DE ELIMINAR
    const openDeleteModal = () => {
      setEditOrDelete('delete')
      setOpen(true);

    }
    //ABRIR MODAL DE EDITAR
    const openEditModal = () =>{
      setEditOrDelete('edit')
      setOpen(true);
    }

    const btn = 
    <Button onClick={ editOrDelete === 'delete' ? eliminatePokemon : editPokemon }>
      { editOrDelete === 'delete' ? 'Eliminar' : 'Editar' }
    </Button>

    return (
    <div className='pokemons-container__pokemon' >

      {/* Datos del pokemon */}
      <img src={img} />
      <p>N° {numberID}</p>
      <h3>{name}</h3>
      <div>
        {
        type.map(t => {
          return <p className={t} > {t}</p>
        })
        }


      </div>

      {/* Botones */}
      <div>
        <Button onClick={ openDeleteModal }>Eliminar</Button>
        <Button onClick={ openEditModal }>Editar</Button>
      </div>

      {/* Modal y alert */}
      <Use_Modal open={ open } setOpen={ setOpen } pokemon={ pokemon } editOrDelete={ editOrDelete } button={ btn } msg={modalMsg} />
      <Use_Modal_Success open={ openModalSuccess } setOpen={ setOpenModalSuccess } pokemon={ pokemon } editOrDelete={ editOrDelete } thenOrCatch={ thenOrCatch } />
      <Use_Modal_Process open={ openModalProcess } setOpen={ setOpenModalProcess } />
    </div>
  )
}

export default Pokemons_stat