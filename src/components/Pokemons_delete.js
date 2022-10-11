import React, { useEffect } from 'react'
import Pokemons_pokemon from './Pokemons_pokemon'
import '../css/index.css'
import Pokemons_delete_pokemon from './Pokemons_delete_pokemon'
import { Button } from '@mui/material'
import useAxios from "../hooks/useAxios";

const Pokemons_delete = ({data, setAside}) => {

    const changeAside = (pokemon) =>{
        setAside(<Pokemons_delete_pokemon pokemon={pokemon} />)
    }

    useEffect(()=>{
        setAside(<Pokemons_delete_pokemon pokemon={data.pokemons[0]} />)
    })
    return (
        
        <div className='pokemons-container'>
        <h2>Borrar pokemon</h2>
        {
        data.pokemons.map(pokemon => {
            return <Button onClick={()=>{changeAside(pokemon)}}><Pokemons_pokemon  key={pokemon.id} pokemon={pokemon} /></Button>
            })
            
        }
        </div>
      )
}

export default Pokemons_delete