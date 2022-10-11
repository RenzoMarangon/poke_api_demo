import { Button } from '@mui/material';
import React from 'react'
import '../css/index.css'

const Pokemons_pokemon = ({pokemon}) => {
    const { name, type, numberID, img } = pokemon;

    return (
    <div className='pokemons-container__pokemon' >
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
    </div>
  )
}

export default Pokemons_pokemon