import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import useInputChange from '../hooks/useInputChange';


const Pokemons_create = ({setPokeStat}) => {


  const [pokeData, setPokeData] = useState({});


  const [ input, handleInputChange ] = useInputChange({ });

  const [ inputStats, inputStatstChange ] = useInputChange('');


  const formHandleSubmitPokemon = (e) => {
    
    const poke = { ...input }
    poke.stats = inputStats;
  
    setPokeData({ pokemon:poke })

    savePokemon(poke);
  }


  const savePokemon = (pokeData) => {

    const url = 'https://poke-apix.herokuapp.com/api/pokemon';
    // const url = 'http://localhost:8080/api/pokemon';

    const config ={
      headers:{
          poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTQ0NzI0MywiZXhwIjoxNjY2MDUyMDQzfQ.4MJWBt-pr2VAABLz3PNk01BZypfwaYZ6CNUH4Zq1Ynw'
      }
    }

    axios.post( 
        url, 
        pokeData,
        config
    )
    .then((resp)=>{
      setPokeStat({pokemon:resp.data})
    })
    .catch(({response})=>{
        const { data } = response;
        console.log(data)
        return
    })
    
  }

  return (
    <div>
      <form onSubmit={formHandleSubmitPokemon}>
      <input type="text" name="name" onChange={ handleInputChange } placeholder={'Nombre'} required /> 
      <input type="text" name="type" onChange={ handleInputChange } placeholder={'Tipo'} required /> 
      <input type="text" name="numberID" onChange={ handleInputChange } placeholder={'#ID'} required /> 
      <input type="text" name="generation" onChange={ handleInputChange } placeholder={'Generacion'} required /> 


      <input type="text" name="hp" onChange={ inputStatstChange } placeholder={'Puntos de vida'} required /> 
      <input type="text" name="attack" onChange={ inputStatstChange } placeholder={'Ataque'} required /> 
      <input type="text" name="defense" onChange={ inputStatstChange } placeholder={'Defensa'} required /> 
      <input type="text" name="special_attk" onChange={ inputStatstChange } placeholder={'Ataque especial'} required /> 
      <input type="text" name="special_defense" onChange={ inputStatstChange } placeholder={'Defensa especial'} required /> 
      <input type="text" name="velocity" onChange={ inputStatstChange } placeholder={'Velocidad'}  required />


      <input type='submit'  />
      </form>
    </div>
  )
}

export default Pokemons_create