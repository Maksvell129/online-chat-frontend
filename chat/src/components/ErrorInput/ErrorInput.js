import React from 'react'
import './ErrorInput.css'

const ErrorInput = ({errorText, ...props}) => {
    if(errorText)
        return (
            <div>
                <input {...props}/>
                <p className='error-text abel-normal-red-14px'>{errorText}</p>
            </div>
        )
        
    return (
        <input {...props}/>
    )
        
}

export default ErrorInput