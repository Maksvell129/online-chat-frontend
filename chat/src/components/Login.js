import React, { useState } from 'react';
import './Login.css'

function Login() {
    return (
        <X3
        spanText1="Login"
        spanText2="Login"
        spanText3="Password"
        barHeaderProps={x3Data.barHeaderProps}
        />
    );
}
export default Login;

function X3(props) {
    const {spanText1, spanText2, spanText3, barHeaderProps} = props;
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
        <div className="container-center-horizontal">
            <div className="x3 screen">
                <BarHeader spanText={barHeaderProps.spanText} headerTitle={barHeaderProps.headerTitle}/>
                <div className="overlap-group">
                    <ChatContainer/>
                    <div>
                        <input type="text" className="input-1" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="name valign-text-middle abel-normal-baltic-sea-20px">
                        <span>
                            <span className="abel-normal-baltic-sea-20px">{spanText1}</span>
                        </span>
                    </div>
                    <div>
                        <button type="submit" className="button-1" onClick={handleSubmit}></button>
                    </div>
                    <div>
                        <input type="password" className="input-2" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="name-1 valign-text-middle abel-normal-white-20px">
                        <span>
                            <span className="abel-normal-white-20px">{spanText2}</span>
                        </span>
                    </div>
                    <div className="name-2 valign-text-middle abel-normal-baltic-sea-20px">
                        <span>
                            <span className="abel-normal-baltic-sea-20px">{spanText3}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BarHeader(props) {
    const {spanText, headerTitle} = props;

    return(
        <div className="bar-header">
            <div className="header-title abel-normal-black-16px">
                <span className="abel-normal-black-16px">{spanText}</span>
            </div>
            <div className="subheader abel-normal-boulder-12px">
                {headerTitle}
            </div>
        </div>
    );
}

function ChatContainer() {
    return(
        <div className="left-accessory-avatar">
            <LeftAccessoryAvatar />
        </div>
    );
}

function LeftAccessoryAvatar() {
    return <div className="left-accessory-avatar"></div>
}

const barHeaderData = {
    spanText: "Chat Name",
    headerTitle: "",
};

const x3Data = {
    barHeaderProps: barHeaderData,
};