import React from "react";
import "../Message/Message.css";

function Message({ username, text, time, isOwnMessage }) {

    return(
        <div className="ChatRight">
            <div className=
                {
                    isOwnMessage ? "MyMessage" : "ForeignMessage" 
                }
            >
                <div className="abel-normal-black-16px UserName">
                    {username}
                </div>
                
                <div className="abel-normal-black-14px Text">
                    {text}
                </div>
                
                <div className="abel-normal-black-8px SendTime">
                    {time}
                </div>
            </div>
        </div>);
}

export default Message;