import React from "react";
import "../Message/Message.css";

function Message({ text }) {

    return(
        <div className="ChatRight">
        <div className="MyMessage">
            <div className="abel-normal-black-16px UserName">
                Zalupa
            </div>
            <div className="abel-normal-black-14px Text">
                {text}
            </div>
            <div className="abel-normal-black-8px SendTime">
                19:22
            </div>
        </div>
        </div>);
}

export default Message;