import React from 'react'
import '../css/index.css'
import useAxios from "../hooks/useAxios";
import Skeleton from '@mui/material/Skeleton';


const Pokemons_stat = ({pokemon}) => {

  
  const url = 'https://poke-apix.herokuapp.com/api/pokemon?limit=151';


  const skeleton =       
  <div className='skeleton'>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
  </div>



  return (
  <>
    {pokemon === true 
      ? skeleton
      : (
          <div className='pokemons-container__pokemon stat'>
          <img src={pokemon.img} />
          <p>{pokemon.numberID}</p>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.generation}</p>
          </div>
        )}
  </>
  )
}

export default Pokemons_stat