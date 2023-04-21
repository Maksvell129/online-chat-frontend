import React, {useState, useRef} from "react";
import Message from "../Message/Message";
import "./MessagesList.css";

function MessagesList({messages}) {

    // const {sendMessage} = useWebSocket("ws://localhost:8080");
    // const handleNewMessage = (event) => {
    // setMessages([...messages, event.data]);
    // };

    return (
        <div className="messages-list-container">
            <ul className="message-style">
                 {messages.map((message, index) => (<Message key={index} username={message.author} text={message.text} time={message.time} isOwnMessage={message.isOwnMessage}/>))}
            </ul>
        </div>
    );
}

export default MessagesList;