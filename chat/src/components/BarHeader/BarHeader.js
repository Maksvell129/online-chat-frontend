import './BarHeader.css'
import React from "react";

function BarHeader({ spanText, headerTitle, handleUsersClick }) {
    return (
        <div className="bar-header">
            <div>
                <div className="header-title abel-normal-black-16px">
                    <span className="abel-normal-black-16px">{spanText}</span>
                </div>
                <div className="subheader abel-normal-boulder-12px">
                    {headerTitle}
                </div>
            </div>
            <div className="return-btn">
                <button className="return-btn-style">
                    <img width={15} src="images/return.png" alt={'Return'}/>
                </button>
            </div>
            <div className={'users-btn'}>
                <button className="users-btn-style" onClick={handleUsersClick}>
                    <img width={20} src="images/users.png" alt={'Users'}/>
                </button>
            </div>
        </div>
    );
}

export default BarHeader;