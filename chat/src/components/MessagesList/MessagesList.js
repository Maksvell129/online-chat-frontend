import React, {useState, useRef} from "react";
import Message from "../Message/Message";
import "./MessagesList.css";

function MessagesList({messages, handleMessageStartEdit, handleMessageDelete}) {

    return (
        <div className="messages-list-container">
            <ul className="message-style">
                {
                    messages.map((message, index) => (
                        <Message 
                            key={message.id} 
                            username={message.author} 
                            text={message.text} 
                            time={message.time} 
                            isModified={message.isModified}
                            isOwnMessage={message.isOwnMessage}
                            onStartEdit={() => handleMessageStartEdit(message.id)}
                            onDelete={() => handleMessageDelete(message.id)}
                            />)
                    )
                }
            </ul>
        </div>
    );
}

export default MessagesList;