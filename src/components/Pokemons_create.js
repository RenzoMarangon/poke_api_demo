import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import useInputChange from '../hooks/useInputChange';
import Pokemons_container from './Pokemons_container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import '../css/index.css'
import Autocomplete from '@mui/material/Autocomplete';

const Pokemons_create = () => {


  const [pokeData, setPokeData] = useState({});

  const [ input, handleInputChange ] = useInputChange({ });

  const [ inputStats, inputStatstChange ] = useInputChange('');

  const [ inputFile, inputFileChange ] = useState({});

  const [ inputType, inputTypeChange ] = useState('');




  const options = ['Fuego', 'Agua', 'Eléctrico', 'Acero', 'Fantasma', 'Planta','Lucha', 'Roca','Psiquico','Dragon','Hada', 'Veneno','Volador','Bicho','Tierra','Normal','Hielo'];

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const formHandleSubmitPokemon = (e) => {
    e.preventDefault();
    const poke = { ...input }
    poke.stats = inputStats;
    poke.type = inputType;
  


    setPokeData({ pokemon:poke })
    savePokemon(poke)
  }


  const savePokemon = (pokeData) => {

    const url = 'https://poke-apix.herokuapp.com/api/pokemon';
    // const url = 'http://localhost:8080/api/pokemon';
    // const urlImg = 'https://poke-apix.herokuapp.com/api/upload/pokemons/6345f66e12bd80e56e9c68b7'
    const config ={
      headers:{
          poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
      }
    }


    axios.post( 
        url, 
        pokeData,
        config
    )
    .then((resp)=>{
      const { id } = resp.data
      const url = `https://poke-apix.herokuapp.com/api/upload/pokemons/${id}`
      const data = new FormData();
      data.append("archive",[...inputFile][0])
      axios.put(
        url,
        data,
        config)
      .then(()=>{

      })
    })
    .catch((err)=>{


        return
    })
    
  }


  return (
    <div className='pokemon_create'>
      <h2>Crear pokemon</h2>
      
      <form onSubmit={formHandleSubmitPokemon}>
          <h3 className='title_pokemon'>Pokemon</h3>
          <li className='name'><TextField className='test' id="outlined-basic" label="Nombre" variant="outlined" type="text" name="name" onChange={ handleInputChange } required /></li> 

          <li className='type'>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {

                setInputValue(newInputValue);

                switch(newInputValue){
                  case 'Fuego': {inputTypeChange('FIRE') 
                                break;}
                  case 'Agua': {inputTypeChange('WATER') 
                                break;}
                  case 'Eléctrico': {inputTypeChange('ELECTRIC') 
                                break;}
                  case 'Veneno': {inputTypeChange('POISON') 
                                break;}
                  case 'Roca': {inputTypeChange('ROCK') 
                                break;}
                  case 'Normal': {inputTypeChange('NORMAL') 
                                break;}
                  case 'Dragon': {inputTypeChange('DRAGON') 
                                break;}
                  case 'Fantasma': {inputTypeChange('GHOST') 
                                break;}
                  case 'Hada': {inputTypeChange('FAIRY') 
                                break;}
                  case 'Acero': {inputTypeChange('STEEL') 
                                break;}
                  case 'Hielo': {inputTypeChange('ICE') 
                                break;}
                  case 'Psiquico': {inputTypeChange('PSYCHIC') 
                                break;}
                  case 'Tierra': {inputTypeChange('GROUND') 
                                break;}
                  case 'Bicho': {inputTypeChange('BUG') 
                                break;}
                  case 'Volador': {inputTypeChange('FLYING') 
                                break;}
                  case 'Planta': {inputTypeChange('GRASS') 
                                break;}
                  case 'Lucha': {inputTypeChange('FIGHTING') 
                                break;}
                }
                
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Controllable" />}
            />
          </li> 

          <li className='id'><TextField id="outlined-basic" label="#ID" variant="outlined" type="text" name="numberID" onChange={ handleInputChange }  required /></li> 
          <li className='generation'><TextField id="outlined-basic" label="Generacion" variant="outlined" type="text" name="generation" onChange={ handleInputChange } placeholder={'Generacion'} required /></li> 
          <h3 className='title_stats'>Estadísticas</h3>
          <li className='hp'><TextField id="outlined-basic" label="Puntos de vida" variant="outlined" type="text" name="hp" onChange={ inputStatstChange }  required /></li> 
          <li className='attk'><TextField id="outlined-basic" label="Ataque" variant="outlined" type="text" name="attack" onChange={ inputStatstChange }  required /></li> 
          <li className='defense'><TextField id="outlined-basic" label="Defensa" variant="outlined" type="text" name="defense" onChange={ inputStatstChange } required /></li> 
          <li className='sp_attk'><TextField id="outlined-basic" label="Ataque especial" variant="outlined" type="text" name="special_attk" onChange={ inputStatstChange }  required /> </li>
          <li className='sp_defense'><TextField id="outlined-basic" label="Defensa especial" variant="outlined" type="text" name="special_defense" onChange={ inputStatstChange }  required /></li>
          <li className='vel'><TextField id="outlined-basic" label="Velocidad" variant="outlined" type="text" name="velocity" onChange={ inputStatstChange }   required /></li>
          <h3 className='title_image'>Imagen</h3>
          <li className='img_file'><TextField id="outlined-basic"  variant="outlined" type="file" className="archive" name="archive" onChange={ (e)=>{ inputFileChange(e.target.files)} }   required /></li>

      
          <li className='button'><Button type='submit'>Crear pokemon</Button></li>

      </form>
    </div>
  )
}

export default Pokemons_create