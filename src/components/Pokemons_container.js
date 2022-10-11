import React from 'react'
import Pokemons_pokemon from './Pokemons_pokemon'
import '../css/index.css'
import useAxios from "../hooks/useAxios";
import { Button } from '@mui/material';


const Pokemons_container = ({data, setAside}) => {

  const changeAside = (pokemon) =>{
    setAside(<Pokemons_pokemon pokemon={pokemon} />)
}
  return (
    <div className='pokemons-container'>
    {
      data.pokemons.map(pokemon => {
      return <Button onClick={()=>{changeAside(pokemon)}}><Pokemons_pokemon key={pokemon.id} pokemon={pokemon} /></Button>
    })
    }
    </div>
  )
}

export default Pokemons_container