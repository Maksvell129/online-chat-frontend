import React from 'react';
import BarHeader from '../components/BarHeader/BarHeader';
import '../components/Reg/Registration.css'
import RegistrationForm from "../components/Reg/RegistrationForm";

const RegistrationPage = () => {

    return (
        <div className="container-center-horizontal">
            <div className="x2 screen">
                <BarHeader spanText="Chat" headerTitle="Chat"/>
                <RegistrationForm/>
            </div>
        </div>
    )
}

export default RegistrationPage