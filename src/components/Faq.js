import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/index.css"

const Faq = () => {
  return (
    <div>
        <div class="main-container">
            <div class="faq-img">
                <img src="./psyduck.jpg" alt="Psyduck" />
            </div>

            <div class="faq-container">
                <h2 class="title">
                    Preguntas frecuentes
                </h2>

                <div class="questions-container">


                <Accordion className='question'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <h3>¿Qué es Poke-API?</h3>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Poke-API es una base de datos con información acerca de los diferentes tipos de Pókemon.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='question'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <h3>¿Cómo obtengo información acerca de los pókemons?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                            <div>
                                <p>Se puede acceder a través de los siguientes endpoints:</p>
                                <div class="pokemons">
                                    <p>*Obtener colección de pókemons (GET):<br /> <span class="link">https://poke-apix.herokuapp.com/api/pokemon</span></p>
                                    <p>*Obtener colección de un pókemon especifico (GET):<br /> <span class="link">https://poke-apix.herokuapp.com/api/pokemon/:id</span></p>
                                    <p>*Buscar pókemons (GET): <br /><span class="link">https://poke-apix.herokuapp.com/api/search/pokemons/:abc</span></p>
                                    <p>*Crear un nuevo pókemon (POST): <span class="admin">Requiere admin</span><br /> <span class="link">https://poke-apix.herokuapp.com/api/pokemon/</span></p>
                                    <p>*Actualizar pókemon (PUT): <span class="admin">Requiere admin</span><br /> <span class="link">https://poke-apix.herokuapp.com/api/pokemon/:id</span></p>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion className='question'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <h3>¿Cómo accedo como admin?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                                <p>El siguiente endpoint devuelve un JWT, para luego enviar un header con la key: <i>poke_token</i> y el JWT como value</p>
                                <div class="pokemons">
                                    <p>*Obtener JWT de admin (POST):<br /> <span class="link">https://poke-apix.herokuapp.com/auth/login</span></p>
                                    <p>*El body deberá ser enviado como JSON y tendrá que tener el siguiente formato:<br />
                                        <span class="link">
                                        <br /> mail:user1@gmail.com <br />
                                        password:soyunacontraseña123! <br />
                                        </span>
                                    </p>
                                </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='question'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <h3>¿Cómo accedo como admin?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                                <p>El siguiente endpoint devuelve un JWT, para luego enviar un header con la key: <i>poke_token</i> y el JWT como value</p>
                                <div class="pokemons">
                                    <p>*Obtener JWT de admin (POST):<br /> <span class="link">https://poke-apix.herokuapp.com/auth/login</span></p>
                                    <p>*El body deberá ser enviado como JSON y tendrá que tener el siguiente formato:<br />
                                        <span class="link">
                                        <br /> mail:user1@gmail.com <br />
                                        password:soyunacontraseña123! <br />
                                        </span>
                                    </p>
                                </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='question'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <h3>¿Dónde puedo acceder a más contenido?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                            <p> Para ver el resto de endpoints, deberás importar en postman el siguiente archivo:</p> <br />
                           <a class="link" target="_BLANK" href="https://poke-apix.herokuapp.com/api/upload/download">Descargar Postman.json</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
        </div>
        <script src="./script/faq.js"></script>
    </div>


  )
}

export default Faq;

