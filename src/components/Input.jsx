import React from 'react'

export const Input = ({inputValue, title, placeholder}) => {

    const onClickButton = () => {
        console.log(`입력값은 ${inputValue}`)
    }

    return (
        <div>
            <h2>{title}</h2>
            <input 
                type = "text"
                placeholder = {placeholder}
            />
            <button onClick = {onClickButton}>click me</button>
        </div>
    )
}

export default Input