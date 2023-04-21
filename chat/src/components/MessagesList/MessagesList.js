import React, {useState, useRef} from "react";
import Message from "../Message/Message";
import "./MessagesList.css";

function MessagesList({messages}) {

    // const {sendMessage} = useWebSocket("ws://localhost:8080");
    // const handleNewMessage = (event) => {
    // setMessages([...messages, event.data]);
    // };

    return (
        // <div className="x4 screen">
            <div className="messages-list-container">
                <ul className="message-style">
                    {messages.map((message, index, date) => (
                        <Message key={index} username='test' text={message} time='12:22' isOwnMessage={true}/>
                    ))}
                </ul>
            </div>
        // </div>
    );
}

export default MessagesList;