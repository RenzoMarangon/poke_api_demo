import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'

const Pokemons_delete_pokemon = ({pokemon}) => {
    const { name, type, numberID, img,id } = pokemon;
    

    const config ={
        headers:{
            poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
        }
      }

    const url = `https://poke-apix.herokuapp.com/api/pokemon/${id}`
    const eliminatePokemon = () => {
        axios.delete(url,config)
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
        <Button onClick={eliminatePokemon}>Delete</Button>
      </div>
    </div>
  )
}

export default Pokemons_delete_pokemon