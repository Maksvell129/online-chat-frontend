import React from "react";
import {useRef} from "react";
import "../Reg/Registration.css";

const RegistrationForm = () => {
    /*const [username, usernameError, setUsername, setUsernameError] = useRef()
    const [email, emailError, setEmail, setEmailError] = useRef()
    const [password, passwordError, setPassword, setPasswordError] = useRef()
    const [confirmPassword, confirmPasswordError, setConfirmPassword, setConfirmPasswordError, setUserExist] = useRef()

    const register = async (event) => {
        event.preventDefault();

        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setUserExist('');

        if (confirmPassword !== password)
            setConfirmPasswordError('Passwords must match')

        if (localStorage.getItem(email)) {
            setUserExist('User already exist');
            return;
        }

        localStorage.setItem(email, JSON.stringify(username, email, password));
        setUsername(event.target.value)
        setEmail(event.target.value)
        setPassword(event.target.value)
        setConfirmPassword(event.target.value)
        alert('Registration successful');
    }

    const usernameChanged = (event) =>{
        setUsername(event.target.value)
    }

    const emailChanged = (event) => {
        setEmail(event.target.value)
    }

    const passwordChanged = (event) =>{
        setPassword(event.target.value)
    }

    const confirmPasswordChanged = (event) =>{
        setConfirmPassword(event.target.value)
    }


*/
    return (
        <div className="container-center-horizontal x2 screen">
            <div className="reg-form">
                <form>
                    <div className="reg-group">
                        <input type="text" className="input name" placeholder="Enter your username" required/>
                    </div>
                    <div className="reg-group">
                        <input type="text" className="input email" placeholder="Enter your email" required/>
                    </div>
                    <div className="reg-group">
                        <input type="password" className="input password" placeholder="Input a password" required/>
                    </div>
                    <div className="reg-group">
                        <input type="password" className="input password" placeholder="Confirm a password" required/>
                    </div>
                    <button className="button">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm;