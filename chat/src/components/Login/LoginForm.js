import React from 'react'
import { useState } from 'react';
import "../Login/Login.css";

const LoginForm = () => {
    const [username, setUsername] = useState('');       // хуки состояния для отслеживания значений логина и пароля
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {       //обработчик сосотояния логина
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {       //обработчик состояния пароля
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {       //обработка нажатия кнопки регистрации
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    }

    return (
        <div className="container-center-horizontal x3 screen">
                <div className="name valign-text-middle abel-normal-baltic-sea-20px">
                    <span>
                        <span className="abel-normal-baltic-sea-20px">Login</span>
                    </span>
                </div>
                <input type="text" className="input-1" value={username} onChange={handleUsernameChange} />
                

                <div className="name-2 valign-text-middle abel-normal-baltic-sea-20px">
                    <span>
                        <span className="abel-normal-baltic-sea-20px">Password</span>
                    </span>
                </div>
                <input type="password" className="input-2" value={password} onChange={handlePasswordChange} />
                
                

                <button type="submit" className="button-1" onClick={handleSubmit}>
                    <span>
                        <span className="valign-text-middle abel-normal-white-20px">Login</span>
                    </span>
                </button>
        </div>
    )
}

export default LoginForm