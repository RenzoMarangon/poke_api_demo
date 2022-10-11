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

function App() {

  const url = 'https://poke-apix.herokuapp.com/api/pokemon?limit=151';

  const {data, loading} = useAxios( url, 'get' );

  

  const [ pokeStat, setPokeStat ] = useState( loading  )

  const [ index, setIndex ] = useState(<Pokemons_container_skeleton />)


  const getPokemons = () => {
    setIndex( <Pokemons_container data={data} className='app-container__pokemons' /> )
  }

  const postPokemons = () => {
    setIndex(<Pokemons_create setPokeStat = {setPokeStat} />)
  }

  const deletePokemons = () => {
    setIndex(<div>Borrar pokemon</div>)
  }

  const editPokemons = () => {
    setIndex(<div>Editar pokemon</div>)
  }

  const showFAQ = () => {
    setIndex(<Faq />)
  }


  useEffect(()=>{

    !loading && setIndex(<Pokemons_container data={data} className='app-container__pokemons' />)
    !loading && setPokeStat( data.pokemons[data.pokemons.length-1] )
    

  },[loading,pokeStat])

  return (
    <div className="App">
      <header>
        <Header className='app-container__header' post = {postPokemons}  get = {getPokemons} put = {editPokemons} deletx = {deletePokemons} faq = {showFAQ} />
      </header>
      
      <main>
      { index }
      <Pokemons_stat pokemon={ pokeStat } className='app-container__pokemon' />
      </main>
    </div>
  );
}

export default App;
