import React from "react";
import {useRef} from "react";
import useRequest from "../../hooks/useRequest";
import "./Registration.css";
import AuthService from "../../services/AuthService";

const RegistrationForm = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const [isLoading, register] = useRequest(async (username, password, email) => {

        const response = await AuthService.register(username, password, email)

        if(!response.correct){
            if(response.status === 400)
                {
                    alert(
                        `username: ${response.data.username}
                         password: ${response.data.password}
                         email: ${response.data.email}
                        `
                    )
                }
        }

    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        const usernameValue = username.current.value
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const confirmPasswordValue = confirmPassword.current.value
        

        if(passwordValue !== confirmPasswordValue){
            alert('passwords must match')
            return
        }

        await register(usernameValue, passwordValue, emailValue)

    }

    if(isLoading)
        return


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