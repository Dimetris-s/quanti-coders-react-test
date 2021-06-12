import React from "react";

const Button = ({onClick, type, text, appearance, size}) => {

    const btnType = type || 'button'

    const cls = [
        'btn',
        appearance ? `btn--${appearance}` : '',
        size ? `btn--${size}` : ''
    ]
 
    return (
        <button onClick={onClick} type={btnType} className={cls.join(' ')}>
            {text}
        </button>
    )
}

export default Button