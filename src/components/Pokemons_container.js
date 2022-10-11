import React from 'react'
import Pokemons_pokemon from './Pokemons_pokemon'
import '../css/index.css'
import useAxios from "../hooks/useAxios";


const Pokemons_container = ({data}) => {

  return (
    <div className='pokemons-container'>
    {
    data.pokemons.map(pokemon => {
      return <Pokemons_pokemon key={pokemon.id} pokemon={pokemon} />
    })
    }
    </div>
  )
}

export default Pokemons_container