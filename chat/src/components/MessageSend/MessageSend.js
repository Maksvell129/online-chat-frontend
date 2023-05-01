import React from "react";
import './MessageSend.css'
import MessageInput from "../MessageInput/MessageInput";

const MessageSend = ({ message, onMessageChanged, onKeyDown, onSendMessage }) => (
    <div className="composer overlap-group1">
        <MessageInput message={message} onMessageChanged={onMessageChanged} onKeyDown={onKeyDown}/>
        <button className="sendButton" onClick={onSendMessage}>
            <img width={20} src="images/send.png" alt={'Send'}/>
        </button>
    </div>
);

export default MessageSend;