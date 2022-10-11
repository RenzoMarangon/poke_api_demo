import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import useInputChange from '../hooks/useInputChange';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../css/index.css'

import Autocomplete from '@mui/material/Autocomplete';
import Alert from './Alert';
const Pokemon_edition = ({pokemon}) => {

  const { id,...poke } = pokemon
  const [ input, handleInputChange ] = useInputChange({poke});

  const [ inputStats, inputStatstChange ] = useInputChange({});

  const [ inputFile, inputFileChange ] = useState('');

  const [ inputType, inputTypeChange ] = useState('');

  const [open, setOpen] = useState(false);
  
  const options = ['Fuego', 'Agua', 'Eléctrico', 'Acero', 'Fantasma', 'Planta','Lucha', 'Roca','Psiquico','Dragon','Hada', 'Veneno','Volador','Bicho','Tierra','Normal','Hielo'];

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const [errs, setErrs] = useState([]);


  const formHandleSubmitPokemon = (e) => {
    e.preventDefault()

    const poke = { ...input };
    !Object.entries(inputStats).length === 0 ? poke.stats = inputStats : poke.stats = pokemon.stats;
    poke.type = inputType;
    savePokemon(poke)
  }


  const savePokemon = (pokeData) => {

    // const url =  `https://poke-apix.herokuapp.com/api/pokemon/${id}`;
    const url = `http://localhost:8080/api/pokemon/${id}`;
    // const urlImg = 'https://poke-apix.herokuapp.com/api/upload/pokemons/6345f66e12bd80e56e9c68b7'
    const config ={
      headers:{
          poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
      }
    }

    pokeData.name === pokemon.name && delete pokeData.name;

    pokeData.numberID === pokemon.numberID && delete pokeData.numberID;
    console.log(pokeData)
    axios.put( 
        url, 
        pokeData,
        config
    )
    .then((resp)=>{
      const { id } = resp.data
      console.log(resp)
    

    })
    .catch((response)=>{
        // const err = response.data.errors.errors;
        // setErrs(err)
        console.log(response)

        setOpen(true);
        return

    })

    // if(inputFile ){
    //   const url = `https://poke-apix.herokuapp.com/api/upload/pokemons/${id}`
    //   const data = new FormData();
    //   data.append("archive",[...inputFile][0])
    //   axios.put(
    //     url,
    //     data,
    //     config)
    //   .then()
    //   .catch((d)=>{
    //     console.log(d)
    //   })
    // }
  }




  return (
    <div className='pokemon_create'>
    <h2>Editar pokemon</h2>
    <form onSubmit={formHandleSubmitPokemon}>

        <h2 className='title_pokemon'>Pokemon</h2>
        
        <li className='name'><TextField  label="Nombre" defaultValue={`${pokemon.name}`}  type="text" name="name"/></li>

        <li className='type'>
          <Autocomplete
            value={value}
            label={'Tipo'}
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

        <li className='id'><TextField label="#ID" defaultValue={`${pokemon.numberID}`} type="text" name="numberID" onChange={ handleInputChange } /></li> 
        <li className='generation'><TextField  label="Generacion" defaultValue={`${pokemon.generation}`}  type="number" name="generation" onChange={ handleInputChange } placeholder={'Generacion'}  /></li> 
        <h3 className='title_stats'>Estadísticas</h3>
        <li className='hp'><TextField label="Puntos de vida" defaultValue={`${pokemon.stats.hp}`} type="number" name="hp" onChange={ inputStatstChange }   /></li> 
        <li className='attk'><TextField label="Ataque" defaultValue={`${pokemon.stats.attack}`} type="number" name="attack" onChange={ inputStatstChange }   /></li> 
        <li className='defense'><TextField label="Defensa" defaultValue={`${pokemon.stats.defense}`} type="number" name="defense" onChange={ inputStatstChange }  /></li> 
        <li className='sp_attk'><TextField label="Ataque especial" defaultValue={`${pokemon.stats.special_attk}`} type="number" name="special_attk" onChange={ inputStatstChange }   /> </li>
        <li className='sp_defense'><TextField label="Defensa especial" defaultValue={`${pokemon.stats.special_defense}`} type="number" name="special_defense" onChange={ inputStatstChange }   /></li>
        <li className='vel'><TextField label="Velocidad" defaultValue={`${pokemon.stats.velocity}`} type="number" name="velocity" onChange={ inputStatstChange }    /></li>
        <h3 class='title_image'>Imagen</h3>
        <li className='img_file'><TextField type="file" class="archive" name="archive" onChange={ (e)=>{ inputFileChange(e.target.files)} }    /></li>

    
        <li className='button'><Button type='submit'>Editar pokemon</Button></li>

    </form>

    <Alert open={open} setOpen={setOpen} msg={errs}/>
  </div>

  )
}

export default Pokemon_edition