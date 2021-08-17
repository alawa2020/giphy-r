import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="input a new category"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}
