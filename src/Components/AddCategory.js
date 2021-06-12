import React, { useState } from 'react'
import pt from 'prop-types';

export const AddCategory = ( { setCategories }) => {

    
    const [inputValue, setinputValue] = useState('');


    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim() !== ""){
            setCategories(c => [ inputValue, ...c ]);
            setinputValue('');
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    value = { inputValue }
                    onChange = { handleInputChange }
                />

                {/* <button >Agregar</button> */}
          </form>

        </>
    )
}



AddCategory.propTypes = {
    setCategories: pt.func.isRequired
}