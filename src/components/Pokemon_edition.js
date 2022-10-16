import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import useInputChange from '../hooks/useInputChange';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../css/index.css'
import useNumberInput from '../hooks/useNumberInput';

import Use_Modal from './Use_Modal';
import Use_Modal_Success from './Use_Modal_Success';
import Use_Modal_Process from './Use_Modal_process';


import Autocomplete from '@mui/material/Autocomplete';
const Pokemon_edition = ({pokemon}) => {

  const { id,...poke } = pokemon;

  //HOOKS para manejar inputs
  const [ input, handleInputChange ] = useInputChange({});
  const [ inputStats, inputStatstChange ] = useNumberInput(pokemon.stats);
  const [ inputFile, inputFileChange ] = useState('');
  const [ inputType, inputTypeChange ] = useState(pokemon.type[0]);
  
  //HOOKS para mostrar u ocultar modals
  const [ open, setOpen ] = useState(false)
  const [ editOrDelete, setEditOrDelete ] = useState('')
  const [ openModalSuccess, setOpenModalSuccess ] = useState(false)
  const [ openModalProcess, setOpenModalProcess ] = useState(false)
  const [ thenOrCatch, setThenOrCatch ] = useState('')
  const [ errorx, setErrorx ] = useState('');

  //Para manejar el autocomplete
  const options = ['Fuego', 'Agua', 'Eléctrico', 'Acero', 'Fantasma', 'Planta','Lucha', 'Roca','Psiquico','Dragon','Hada', 'Veneno','Volador','Bicho','Tierra','Normal','Hielo'];
  const [value, setValue] = useState(pokemon.type);
  const [inputValue, setInputValue] = useState('');

  //Guardo los input en un objeto y los envio a la DB
  const formHandleSubmitPokemon = (e) => {
    e.preventDefault()

    const poke = { ...input };
    poke.stats = {...inputStats};
    poke.type = inputType;

    setOpen(true);
  }

  //Guardo el pokemon en la base de datos
  const savePokemon = (pokeData) => {
    setEditOrDelete('edit');
    //Cierro el modal de confirmacion
    setOpen(false)
    //Muestro el modal de 'en proceso'
    setOpenModalProcess(true)

    const url =  `https://poke-apix.herokuapp.com/api/pokemon/${id}`;
    // const url = `http://localhost:8080/api/pokemon/${id}`;
    // const urlImg = 'https://poke-apix.herokuapp.com/api/upload/pokemons/6345f66e12bd80e56e9c68b7'
    const config ={
      headers:{
          poke_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWMwODY5OTRjMDg4M2I4NjBjYjkzOSIsImlhdCI6MTY2NTY5NjcxNywiZXhwIjoxNjY2MzAxNTE3fQ.H-a9ewrP2JjQDAbaGvffTMy74qWoZeMq8S1R8xuPmSE',
      }
    }

    console.log(pokeData.type)
    

    // axios.put( 
    //     url, 
    //     pokeData,
    //     config
    // )
    // .then(()=>{
    //   setOpenModalProcess(false)
    //   setThenOrCatch('then')
    //   setOpenModalSuccess(true);

    // })
    // .catch((err)=>{
    //   setOpenModalProcess(false)
    //   setThenOrCatch('catch');
    //   setOpenModalSuccess(true);
    //   setErrorx(err)
    //   return

    // })

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

    const btn = <Button onClick={()=>{ savePokemon(poke) }}>Editar</Button>;



  return (
    <div className='pokemon_edition'>
    <h2>Editar pokemon</h2>
    <form onSubmit={formHandleSubmitPokemon}>

        <h2 className='title_pokemon'>Pokemon</h2>
        
        {/* <li className='name'><TextField  label="Nombre" defaultValue={`${pokemon.name}`} name="name" onChange={ handleInputChange } type="text" /></li> */}

        <img class='image_pokemon' src={`${pokemon.img}`} />

        <li className='name'><TextField label="Nombre" defaultValue={`${pokemon.name}`} type="text" name="name" onChange={ handleInputChange } /></li> 
        <li className='id'><TextField label="#ID" defaultValue={`${pokemon.numberID}`} type="text" name="numberID" onChange={ handleInputChange } /></li> 
        
        {/* Autocomplete */}
        <li className='type'>
          <Autocomplete
            value={inputValue}
            label={'Tipo'}
            name="type"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              
              setInputValue(newInputValue);

              switch(newInputValue){
                case 'Fuego' || 'FIRE': {inputTypeChange('FIRE') 
                              break;}
                case 'Agua' || 'WATER': {inputTypeChange('WATER') 
                              break;}
                case 'Eléctrico' || 'ELECTRIC': {inputTypeChange('ELECTRIC') 
                              break;}
                case 'Veneno' || 'POISON' : {inputTypeChange('POISON') 
                              break;}
                case 'Roca' || 'ROCK' : {inputTypeChange('ROCK') 
                              break;}
                case 'Normal' || 'NORMAL' : {inputTypeChange('NORMAL') 
                              break;}
                case 'Dragon' || 'DRAGON' : {inputTypeChange('DRAGON') 
                              break;}
                case 'Fantasma' || 'GHOST' : {inputTypeChange('GHOST') 
                              break;}
                case 'Hada' || 'FAIRY' : {inputTypeChange('FAIRY') 
                              break;}
                case 'Acero' || 'STEEL' : {inputTypeChange('STEEL') 
                              break;}
                case 'Hielo' || 'ICE' : {inputTypeChange('ICE') 
                              break;}
                case 'Psiquico' || 'PSYCHIC' : {inputTypeChange('PSYCHIC') 
                              break;}
                case 'Tierra' || 'GROUND' : {inputTypeChange('GROUND') 
                              break;}
                case 'Bicho' || 'BUG' : {inputTypeChange('BUG') 
                              break;}
                case 'Volador' || 'FLYING' : {inputTypeChange('FLYING') 
                              break;}
                case 'Planta' || 'GRASS' : {inputTypeChange('GRASS') 
                              break;}
                case 'Lucha' || 'FIGHTING' : {inputTypeChange('FIGHTING') 
                              break;}
              }
              
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Tipo"  />}
          />
        </li> 
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

    <Use_Modal open={ open } setOpen={ setOpen } pokemon={ pokemon } editOrDelete={ editOrDelete } button={ btn } />
    <Use_Modal_Success open={ openModalSuccess } setOpen={ setOpenModalSuccess } pokemon={ pokemon } editOrDelete={ editOrDelete } thenOrCatch={ thenOrCatch } err={errorx} />
    <Use_Modal_Process open={ openModalProcess } setOpen={ setOpenModalProcess } />
  </div>

  )
}

export default Pokemon_edition