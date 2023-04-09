import React, {useState, useRef} from "react";
import useWebSocket from "react-use-websocket";
import Message from "../Message/Message";
import "../Chat/Chat.css";

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
        <div className="container-center-horizontal x4 screen">

            <div className="chat-container-ChatPage">
                <ul>
                    {messages.map((message, index, date) => (<Message key={index} username='test' text={message} time='12:22' isOwnMessage={true}/>))}
                </ul>
            </div>

            <div className="composer overlap-group1">
                <input
                    className="overlap-group2 send-a-message abel-normal-boulder-14px"
                    type="text"
                    ref={message}
                    onKeyDown={handleKeyDown}
                />
                <button className="sendButton" onClick={handleSendMessage}>
                    <img width={20} src="images/send.png" alt={'Send'}/>
                </button>
            </div>
        </div>);
}
export default Chat;