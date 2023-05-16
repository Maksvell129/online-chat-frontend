import './BarHeader.css'
import React, { useContext } from "react";
import AuthContext from '../../contexts/auth/AuthContext';
import { removeAccessToken, removeRefreshToken } from '../../utils/token';


function BarHeader({ spanText, headerTitle, handleUsersClick }) {

    const {authContextData} = useContext(AuthContext)

    const logout = (event) => {
        removeAccessToken()
        removeRefreshToken()
        authContextData.setIsAuth(false)
        authContextData.setUsername()
        authContextData.setUserId()
    }

    return (
        <div className="bar-header">
            
            <div className="return-btn">
                {authContextData.isAuth && 
                <button className="return-btn-style" onClick={logout}>
                    <img width={15} src="images/return.png" alt={'Return'}/>
                </button>
                }
            </div>
            <div className="column-chat">
                <div className="header-title abel-normal-black-16px">
                    <span className="abel-normal-black-16px">{spanText}</span>
                </div>
                <div className="subheader abel-normal-boulder-12px">
                    {headerTitle}
                </div>
            </div>
            <div className={'users-btn'}>
                {authContextData.isAuth && 
                <button className="users-btn-style" onClick={handleUsersClick}>
                    <img width={20} src="images/users.png" alt={'Users'}/>
                </button>
                }
            </div>
        </div>
    );
}

export default BarHeader;