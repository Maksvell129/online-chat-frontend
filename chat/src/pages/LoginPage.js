import React from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import '../components/Login/Login.css';
import LoginForm from '../components/Login/LoginForm';
import {Link} from 'react-router-dom'

const LoginPage = () => {
  
    return (
    <div className="container-center-horizontal">
        <div className="x3 screen">
            <BarHeader spanText="Chat" headerTitle="Chat"/>
            <div className="login-container">
                    <LoginForm/>
                    <div className='registration-offer'>
                        Don't have an account?
                        <br/>
                        <Link to='/registration'>Register</Link>  
                    </div>
            </div>
        </div>
    </div>

  )
}

export default LoginPage