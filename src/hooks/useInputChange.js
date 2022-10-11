import { useState } from "react";

const useInputChange = ( initialState = {} ) => {

    const [input, setInput] = useState( initialState ) 

    const handleInputChange = ({ target }) => {
        setInput({
            ...input,
            [ target.name ] : target.value
        })
    }

    return [ input, handleInputChange ]

    //PARA USARLO
    // <input type="text" name="name" onChange={ handleInputChange } placeholder={'Soy un placeholder'} /> 
}

export default useInputChange;