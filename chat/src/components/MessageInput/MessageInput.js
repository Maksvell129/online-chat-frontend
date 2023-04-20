import React from "react";
import './MessageInput.css'

const MessageInput = ({ messageRef, onKeyDown, onSubmit }) => (
    <div className="composer overlap-group1">
        <input
            className="overlap-group2 send-a-message abel-normal-boulder-14px"
            type="text"
            ref={messageRef}
            onKeyDown={onKeyDown}
        />
        <button className="sendButton" onClick={onSubmit}>
            <img width={20} src="images/send.png" alt={'Send'}/>
        </button>
    </div>
);

export default MessageInput;