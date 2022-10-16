import React from 'react'
import Pokemons_pokemon from './Pokemons_pokemon'
import '../css/index.css'
import useAxios from "../hooks/useAxios";
import { Button } from '@mui/material';
import Pokemons_stat from './Pokemons_stat';

const Pokemons_container = ({data, setAside, setIndex}) => {

  const changeAside = (pokemon) =>{
    setAside(<Pokemons_stat pokemon={pokemon} setIndex={setIndex} setAside={setAside} />)
}
  return (
    <div className='pokemons-container'> 
    {
      data.pokemons.map(pokemon => {
      return <Pokemons_pokemon key={pokemon.id} pokemon={pokemon} action={()=>{changeAside(pokemon)}} />
    })
    }
    </div>
  )
}

export default Pokemons_container