import React from 'react';
import BarHeader from '../components/BarHeader/BarHeader';
import '../components/Registration/Registration.css'
import RegistrationForm from "../components/Registration/RegistrationForm";
import {Link} from 'react-router-dom'

const RegistrationPage = () => {

    return (
        <div className="container-center-horizontal">
            <div className="x2 screen">
                <BarHeader spanText="Chat" headerTitle="Chat"/>
                <div className="reg-container">
                    <RegistrationForm/>
                    <div className='login-offer'>
                        Already have an account?
                        <br/>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage