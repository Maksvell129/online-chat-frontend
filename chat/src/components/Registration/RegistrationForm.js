import React from "react";
import {useRef} from "react";
import "./Registration.css";

const RegistrationForm = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();

        const usernameValue = username.current.value
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const confirmPasswordValue = confirmPassword.current.value


        // console.log(`Username: ${usernameValue}, Password: ${passwordValue}`);

    }

    return (
        <div className="container-center-horizontal x2 screen">
            <div className="reg-form">
                <form onSubmit={handleSubmit}>
                    <div className="reg-group">
                        <input 
                            type="text" 
                            className="input name" 
                            placeholder="Enter your username" 
                            ref={username}
                            required/>
                    </div>
                    
                    <div className="reg-group">
                        <input 
                            type="email" 
                            className="input email" 
                            placeholder="Enter your email" 
                            ref={email}
                            required/>
                    </div>
                    
                    <div className="reg-group">
                        <input 
                            type="password" 
                            className="input password" 
                            placeholder="Input a password" 
                            ref={password}
                            required/>
                    </div>

                    <div className="reg-group">
                        <input 
                            type="password" 
                            className="input password" 
                            ref={confirmPassword}
                            placeholder="Confirm a password" 
                            required/>
                    </div>
                    
                    <button className="button">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm;