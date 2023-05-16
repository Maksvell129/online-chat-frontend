import React from "react";
import './MessageUpdate.css'
import MessageInput from "../MessageInput/MessageInput";

const MessageUpdate = ({ message, onMessageChanged, onKeyDown, onSave, onCancel}) => (
    <div className="composer overlap-group1">
        <MessageInput message={message} onMessageChanged={onMessageChanged} onKeyDown={onKeyDown}/>        
        <button className="button-operation" onClick={onSave}>
            <img width={20} src="images/check.png" alt={'Send'}/>
        </button>
        <button className="button-operation" onClick={onCancel}>
            <img width={20} src="images/close.png" alt={'Cancel'}/>
        </button>
    </div>
);

export default MessageUpdate;