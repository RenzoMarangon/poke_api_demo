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
import useAlert from './components/Use_Alert';

import Modal from './components/Modal';



function App() {

  const url = 'https://poke-apix.herokuapp.com/api/pokemon?limit=151';

  const {data, loading} = useAxios( url, 'get' );

  const [newPokemon, setNewPokemon ] = useState(false);
  

  const [ index, setIndex ] = useState(<Pokemons_container_skeleton />)

  const [ aside, setAside ] = useState(<></>)

  const getPokemons = () => {
    !loading && setIndex( <Pokemons_container data={data} setAside={setAside} setIndex={setIndex} /> )
    !loading && setAside(<Pokemons_stat pokemon={ data.pokemons[data.pokemons.length-1] }  setIndex={setIndex} setAside={setAside}/>)

  }

  const postPokemons = () => {
    setIndex(<Pokemons_create />)
    setAside(<div></div>)
  }


  const showFAQ = () => {
    setIndex(<Faq />)
    setAside(<div></div>)
  }


  useEffect(()=>{
    console.log(data)
    !loading && setIndex(<Pokemons_container data={data} setAside={setAside} setIndex={setIndex}  />)
    !loading && setAside(<Pokemons_stat pokemon={ data.pokemons[data.pokemons.length-1] } setIndex={setIndex} setAside={setAside} />)
    
    

  },[loading])

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
        <Header post = {postPokemons}  get = {getPokemons} faq = {showFAQ} />
      </header>
      
      <main>


      { index }
      { aside }
      </main>


      
    </div>
  );
}

export default App;
