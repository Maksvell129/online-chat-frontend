import React, {useState, useRef} from "react";
import useWebSocket from "react-use-websocket";
import Message from "../Message/Message";
import "../Chat/Chat.css";
import CustomInput from "../CustomInput/CustomInput";

function Chat() {
    const message = useRef();

    const [messages, setMessages] = useState([]);
    // const {sendMessage} = useWebSocket("ws://localhost:8080");
    console.log('render')

    const handleSendMessage = () => {
        const stringMessage = message.current.value
        if (stringMessage) {
            // sendMessage(stringMessage);
            setMessages([...messages, stringMessage]);
            message.current.value = ""
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    // const handleNewMessage = (event) => {
    // setMessages([...messages, event.data]);
    // };

    return (
        <div className="x4 screen">
            <div className="chat-container-ChatPage">
                {messages.map((message, index, date) => (
                    <Message key={index} username='test' text={message} time='12:22' isOwnMessage={true}/>
                ))}
            </div>
            <CustomInput
                onSubmit={handleSendMessage}
                onKeyDown={handleKeyDown}
                messageRef={message}
            />
        </div>
    );
}

export default Chat;