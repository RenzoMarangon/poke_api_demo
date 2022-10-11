import { useEffect, useState } from 'react';
import Faq from "./components/Faq"
import Header from "./components/Header";
import Pokemons_container from "./components/Pokemons_container";
import Pokemons_stat from "./components/Pokemons_stat";
import Pokemons_create from './components/Pokemons_create';
import useAxios from "./hooks/useAxios";

import './css/index.css'
import Pokemons_container_skeleton from './components/Pokemons_container_skeleton';
import axios from 'axios';
import Pokemons_delete from './components/Pokemons_delete';
import Pokemons_edit from './components/Pokemons_edit';
import { Button, TextField } from '@mui/material';
import Alert from './components/Alert';


import openAlert from './helpers/openAlert';

function App() {

  const url = 'https://poke-apix.herokuapp.com/api/pokemon?limit=151';

  const {data, loading} = useAxios( url, 'get' );

  const [newPokemon, setNewPokemon ] = useState(false);
  
  const [ pokeStat, setPokeStat ] = useState( loading  )

  const [ index, setIndex ] = useState(<Pokemons_container_skeleton />)

  const [ aside, setAside ] = useState(<></>)






  const getPokemons = () => {
    setIndex( <Pokemons_container data={data} setAside={setAside} className='app-container__pokemons' /> )
    setAside(<Pokemons_stat pokemon={ pokeStat } className='app-container__pokemon' />)

  }

  const postPokemons = () => {
    setIndex(<Pokemons_create />)
    setAside(<div></div>)
  }

  const deletePokemons = () => {
    if(!loading) {

        setIndex(<Pokemons_delete data={data} setAside = {setAside} className='app-container__pokemons' />)
        setAside(<Pokemons_stat pokemon={ pokeStat } className='app-container__pokemon' />)
    }
    
  }

  const editPokemons = () => {
    if(!loading) {
      setIndex(<Pokemons_edit data={data} setAside = {setAside} setIndex = {setIndex} className='app-container__pokemons' />)
      setAside(<Pokemons_stat pokemon={ pokeStat } className='app-container__pokemon' />)
  }
  }

  const showFAQ = () => {
    setIndex(<Faq />)
    setAside(<div></div>)
  }


  useEffect(()=>{

    !loading && setIndex(<Pokemons_container data={data} setAside={setAside} className='app-container__pokemons' />)
    !loading && setAside(<Pokemons_stat pokemon={ pokeStat } className='app-container__pokemon' />)
    !loading && setPokeStat( data.pokemons[data.pokemons.length-1] )
    

  },[loading,pokeStat])

  useEffect(()=>{
    newPokemon && (
      axios.get(url)
        .then(resp => {
          data.pokemons = resp.data.pokemons;
        })
    )
  },[newPokemon])

  return (
    <div className="App">

      <header>
        <Header className='app-container__header' post = {postPokemons}  get = {getPokemons} put = {editPokemons} deletx = {deletePokemons} faq = {showFAQ} />
      </header>
      
      <main>


      { index }
      { aside }
      </main>

      
    </div>
  );
}

export default App;
