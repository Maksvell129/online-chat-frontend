import React, {useState} from "react";
import useWebSocket from "react-use-websocket";
import Message from "../Message/Message";
import "../Chat/Chat.css";

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const {sendMessage} = useWebSocket("ws://localhost:8080");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message) {
            sendMessage(message);
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    const handleNewMessage = (event) => {
        setMessages([...messages, event.data]);
    };

    return (
        <div className="container-center-horizontal x4 screen">

        <div className="chat-container-ChatPage">
            <ul>
                {messages.map((message, index, date) => (<Message key={index} text={message} time={date}/>))}
            </ul>
        </div>

            <div className="composer overlap-group1">
                <input
                    className="overlap-group2 send-a-message abel-normal-boulder-14px"
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="sendButton" onClick={handleSendMessage}>Send</button>
            </div>
        </div>);
}
export default Chat;