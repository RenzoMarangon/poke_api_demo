import React from 'react'
import '../css/index.css'
import Button from '@mui/material/Button';

const logo = './logo.png'

const Header = ({post, get, faq, put, deletx}) => {
  return (
    <header className='header-container'>
        <div className='header-container__logo'> 
            <img src={logo} />
        </div>

        <div className='header-container__buttons'> 
            <ul>
                <li className='buttons__button'>
                  <Button variant="text" onClick={get}>Obtener pokemons</Button>  
                </li>
                <li className='buttons__button'>
                  <Button variant="text" onClick={post}>Crear pokemon</Button>  
                </li>
                <li className='buttons__button'>
                  <Button variant="text" onClick={put}>Editar pokemon</Button>  
                </li>
                <li className='buttons__button'>
                  <Button variant="text" onClick={deletx}>Borrar pokemon</Button>  
                </li>
                <li className='buttons__button'>
                  <Button variant="text" onClick={faq}>F.A.Q.</Button>  
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header