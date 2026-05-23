import React from 'react'

const Button = ({children, className='',...props}) => {
    return (
        <button className={`border-2 font-light text-lg rounded-lg border-white/60 px-8 py-2 ${className}`} {...props}>
{children}        </button>
    )
}

export default Button