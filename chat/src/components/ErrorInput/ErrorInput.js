import React from 'react'
import './ErrorInput.css'

const ErrorInput = ({defaultText, errorText, innerRef, ...props}) => {
    if(errorText)
        return (
            <div>
                <input {...props} ref={innerRef} value={defaultText}/>
                <p className='error-text abel-normal-red-14px'>{errorText}</p>
            </div>
        )
        
    return (
        <input {...props} ref={innerRef} value={defaultText}/>
    )
        
}

export default ErrorInput