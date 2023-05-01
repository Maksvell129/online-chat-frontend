import React, { useState } from "react";
import "../Message/Message.css";
import MessageOptions from "../MessageOptions/MessageOptions";

function Message({username, text, time, isModified, isOwnMessage, onStartEdit, onDelete}) {

    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)

    const onContextMenu = (event) => {
        event.preventDefault()
        setIsContextMenuVisible(true)
    }

    return (
        <div className={isOwnMessage ? "MyMessage" : "ForeignMessage"} onContextMenu={onContextMenu}>
            <div className="abel-normal-black-18px UserName">
                {username}
            </div>
            <div className="abel-normal-black-14px Text">
                {text}
            </div>
            <div className="message-additional-info">
                {isModified && 
                <div className="abel-normal-gray-12px Modified">
                    edited
                </div>
                }
                
                <div className="abel-normal-black-8px SendTime">
                    {time}
                </div>
            </div>
            {isContextMenuVisible && isOwnMessage && 
                <MessageOptions onClose={() => setIsContextMenuVisible(false)} 
                                onMessageStartEdit={() => {onStartEdit();
                                                           setIsContextMenuVisible(false)}}
                                onMessageDelete={() => {onDelete();
                                                        setIsContextMenuVisible(false)}}/>}
        </div>
    );
}

export default Message;