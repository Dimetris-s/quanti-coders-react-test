import React from "react";
import  './Input.scss'

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const cls = [
        "Input",
        props.size ? `Input--${props.size}` : null,
        inputType === "file" && 'Input--file'
    ]


    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                name={props.name}
                placeholder={props.placeholder || ''}
                value={props.value}
                onChange={props.onChange}
             />
        </div>
    )
}

export default Input