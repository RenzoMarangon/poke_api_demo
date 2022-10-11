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
        console.log(setIndex)
    })
    return (
        
        <div className='pokemons-container'>
        <h2>Editar pokemon</h2>
        {
        data.pokemons.map(pokemon => {
            return <Button onClick={()=>{changeAside(pokemon)}}><Pokemons_pokemon  key={pokemon.id} pokemon={pokemon}  /></Button>
            })
            
        }
        </div>
      )
}

export default Pokemons_edit