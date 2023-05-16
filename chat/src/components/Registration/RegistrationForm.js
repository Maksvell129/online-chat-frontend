import React, { useState, useRef, useContext } from "react";
import useRequest from "../../hooks/useRequest";
import "./Registration.css";
import AuthService from "../../services/AuthService";
import AuthContext from "../../contexts/auth/AuthContext";
import { getUserInformationFromAccessToken } from "../../utils/user";
import ErrorInput from "../ErrorInput/ErrorInput";

const RegistrationForm = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const [usernameErrorText, setUsernameErrorText] = useState()
    const [emailErrorText, setEmailErrorText] = useState()
    const [passwordErrorText, setPasswordErrorText] = useState()
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState()
    

    const {authContextData} = useContext(AuthContext)

    const [isLoading, register] = useRequest(async (username, password, email) => {

        setUsernameErrorText()
        setEmailErrorText()
        setPasswordErrorText()

        const response = await AuthService.register(username, password, email)

        if(!response.correct){
            if(response.status === 400)
                {
                    if(response.data.username)
                        setUsernameErrorText(response.data.username)

                    if(response.data.email)
                        setEmailErrorText(response.data.email)
                    
                    if(response.data.password)
                        setPasswordErrorText(response.data.password)

                    return
                }
        }
        const userData = getUserInformationFromAccessToken()

        authContextData.setIsAuth(response.correct)
        authContextData.setUsername(userData.username)
        authContextData.setUserId(userData.userId)

    })

    const handleSubmit = (event) => {
        event.preventDefault();
        setConfirmPasswordErrorText()
        

        if(password !== confirmPassword){
            setConfirmPasswordErrorText('Passwords must match')
            return
        }

        register(username, password, email)

    }

    const usernameChanged = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }


    const emailChanged = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }


    const passwordChanged = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }


    const confirmPasswordChanged = (event) => {
        event.preventDefault()
        setConfirmPassword(event.target.value)
    }


    if(isLoading)
        return 'Loading'


    return (
        <form className='reg-form' onSubmit={handleSubmit}>
            <div className="reg-credentials">
                <ErrorInput 
                    type="text" 
                    errorText={usernameErrorText}
                    className="input name" 
                    placeholder="Enter your username" 
                    value={username}
                    onChange={usernameChanged}
                    required/>
            
                <ErrorInput 
                    type="email" 
                    errorText={emailErrorText}
                    className="input email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={emailChanged}
                    required/>
            
                <ErrorInput 
                    type="password" 
                    errorText={passwordErrorText}
                    className="input password" 
                    placeholder="Input a password"
                    value={password} 
                    onChange={passwordChanged}
                    required/>

                <ErrorInput 
                    type="password" 
                    errorText={confirmPasswordErrorText}
                    className="input password" 
                    value={confirmPassword}
                    onChange={confirmPasswordChanged}
                    placeholder="Confirm a password" 
                    required/>
            </div>
            <button className="reg-button">Signup</button>
        </form>
    )
}

export default RegistrationForm;