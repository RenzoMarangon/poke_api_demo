import { useState } from "react";


const useNumberInput = ( initialState = {}) => {

    const [input, setInput ] = useState( initialState )

    const handleInputChange = ({ target }) =>{
        setInput({
            ...input,
            [ target.name ] : Number( target.value )
        })
    }

    return [ input, handleInputChange ]
}

export default useNumberInput