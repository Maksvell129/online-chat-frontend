import React from 'react'
import { useRef } from 'react';
import "../Login/Login.css";

const LoginForm = () => {
    const username = useRef() // ссылка на username 
    const password = useRef() // ссылка на пароль

    const handleSubmit = (event) => {       //обработка нажатия кнопки регистрации
        event.preventDefault();

        const usernameValue = username.current.value
        const passwordValue = password.current.value

        console.log(`Username: ${usernameValue}, Password: ${passwordValue}`);

    }
    
    console.log('render')
    
    return (
        <div className="container-center-horizontal x3 screen">
                
                <div className='login-form'>
                    <div className="username-group group abel-normal-baltic-sea-20px">
                        <span className="abel-normal-baltic-sea-20px">Login</span>
                        <input type="text" className="input-1" ref={username} /> 
                    </div>
                    

                    <div className="password-group group abel-normal-baltic-sea-20px">
                        <span className="abel-normal-baltic-sea-20px">Password</span>
                        <input type="password" className="input-2" ref={password} />
                    </div>
                    
                    <button type="submit" className="button-1 valign-text-middle" onClick={handleSubmit}>
                        <span className="abel-normal-white-20px">Login</span>
                    </button>
                </div>
        </div>
    )
}

export default LoginForm