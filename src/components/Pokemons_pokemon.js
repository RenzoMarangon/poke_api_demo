import React from 'react'
import '../css/index.css'
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Pokemons_pokemon = ({pokemon, action}) => {

  
  const url = 'https://poke-apix.herokuapp.com/api/pokemon?limit=151';


  const skeleton =       
  <div className='skeleton'>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
  </div>



  return (
    <div onClick={()=>{action(pokemon)}}>
      {pokemon === true
      ? skeleton
      : (
          <div className='pokemons-container__pokemon'>
            <img src={pokemon.img} />
            <p>{pokemon.numberID}</p>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>{pokemon.generation}</p>
          </div>
        )}
    </div>
    
  )
}

export default Pokemons_pokemon