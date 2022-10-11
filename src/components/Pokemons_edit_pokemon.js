import { Button } from '@mui/material';
import React from 'react'
import Pokemon_edition from './Pokemon_edition';
import '../css/index.css'

const Pokemons_edit_pokemon = ({pokemon, setIndex}) => {
    const { name, type, numberID, img,id } = pokemon;
    

    const config ={
        headers:{
            poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
        }
      }

    const url = `https://poke-apix.herokuapp.com/api/pokemon/${id}`
    const editPokemon = () => {
        
        setIndex(<Pokemon_edition pokemon = { pokemon } />)

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
        <Button onClick={editPokemon}>Editar</Button>
      </div>
    </div>
  )
}

export default Pokemons_edit_pokemon