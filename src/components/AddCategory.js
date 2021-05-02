import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = (({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Nueva categoría');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    const handleFocus = () => {
        setInputValue('');
    }

    const handleBlur = () =>{
        setInputValue('Nueva categoria');
    }

    return (
        <form onSubmit={handleSubmit} onFocus={handleFocus} onBlur={handleBlur}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

})

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
