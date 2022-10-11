import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pokemons_edit_pokemon from './Pokemons_edit_pokemon'
import Pokemons_pokemon from './Pokemons_pokemon'

const Pokemons_edit = ({data,setAside, setIndex}) => {


    const changeAside = (pokemon) =>{
        setAside(<Pokemons_edit_pokemon pokemon={pokemon} setIndex={setIndex} />)
    }

    useEffect(()=>{
        setAside(<Pokemons_edit_pokemon pokemon={data.pokemons[0]} setIndex={setIndex} />)
    })
    return (
        
        <div className='edit_pokemons'>
            <h2>Editar pokemon</h2>
            <div className='pokemons-container'>
            {
            data.pokemons.map(pokemon => {
                return <Button onClick={()=>{changeAside(pokemon)}}><Pokemons_pokemon  key={pokemon.id} pokemon={pokemon}  /></Button>
                })
                
            }
            </div>
        </div>
      )
}

export default Pokemons_edit