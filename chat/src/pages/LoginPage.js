import React from 'react'
import BarHeader from '../components/Login/BarHeader';
import '../components/Login/Login.css';
import LoginForm from '../components/Login/LoginForm';

const LoginPage = () => {
  
    return (
    <div className="container-center-horizontal">
        <div className="x3 screen">
            <BarHeader spanText="Chat" headerTitle="Chat"/>
            <LoginForm/>
        </div>
    </div>

  )
}

export default LoginPage