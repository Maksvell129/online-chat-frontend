import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import "../Login/Login.css";
import AuthService from '../../services/AuthService';
import AuthContext from '../../contexts/auth/AuthContext';
import useRequest from '../../hooks/useRequest';
import { getUserInformationFromAccessToken } from '../../utils/user';
import ErrorInput from '../ErrorInput/ErrorInput';


const LoginForm = () => {
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")
    
    const [usernameErrorText, setUsernameErrorText] = useState()
    const [passwordErrorText, setPasswordErrorText] = useState()


    const {authContextData} = useContext(AuthContext)
    
    const [isLoading, login] = useRequest(async (username, password) => {
        setUsernameErrorText()
        setPasswordErrorText()
        
        const response = await AuthService.login(username, password)
        
        
        if(!response.correct){
            if(response.status === 400)
            {
                if(response.data.username)
                    setUsernameErrorText(response.data.username)
                if(response.data.password)
                    setPasswordErrorText(response.data.password)
            }
            else {
                setUsernameErrorText(response.data.detail)
            }
            return
        }

        const userData = getUserInformationFromAccessToken()

        authContextData.setIsAuth(response.correct)
        authContextData.setUsername(userData.username)
        authContextData.setUserId(userData.userId)
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        await login(username, password)
    }
    
    const usernameChanged = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    const passwordChanged = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }


    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className="credentials-group">
                <div className="username-group abel-normal-baltic-sea-20px">
                    <ErrorInput 
                        type="text"
                        errorText={usernameErrorText}
                        className="username-input"
                        placeholder="Enter your username"
                        value={username}
                        onChange={usernameChanged}
                        required/> 
                </div>
                <div className="password-group abel-normal-baltic-sea-20px">
                    <ErrorInput 
                        type="password"
                        errorText={passwordErrorText}
                        className="password-input"
                        placeholder="Enter your password"
                        value={password} 
                        onChange={passwordChanged}
                        required/>
                </div>
            </div>
            <button type="submit" className="login-button valign-text-middle">
                <span className="abel-normal-white-20px">Login</span>
            </button>
        </form>
    )
}

export default LoginForm