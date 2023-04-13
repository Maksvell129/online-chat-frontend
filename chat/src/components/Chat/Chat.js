import React, {useState, useRef, useEffect, useContext} from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import Message from "../Message/Message";
import "../Chat/Chat.css";
import { baseURL } from "../../configuration/constants";
import { getAccessToken } from "../../utils/token";
import AuthContext from "../../contexts/auth/AuthContext";
import Moment from "moment"

function Chat() {
    const message = useRef();
    
    const [messages, setMessages] = useState([]);
    const {contextData} = useContext(AuthContext)
   
    
    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
      } = useWebSocket(`ws://${baseURL}/ws/chat/?access_token=${getAccessToken()}`, {
      onOpen: () => {
        console.log("Connected!");
      },
      onMessage: (stringMessage) => {
        
        const message = JSON.parse(stringMessage.data)
        
        const type = message.type

        switch(type){
            case 'chat_message':{
                const data = message.message
                
                
                const createdAt = Moment(data.created_at);
                const createdAtTime = createdAt.format('HH:mm')

                console.log(createdAt)

                const authorId = data.author
                setMessages([...messages,
                    {
                        author: data.author_username,
                        text: data.content,
                        time: createdAtTime,
                        isOwnMessage: authorId === contextData.userId
                    }]
                )
                break;
            }

            case 'message_history':{
                const messageHistory = message.messages

                const newMessages = messageHistory.map((message, index) => {
                    const createdAt = Moment(message.created_at);
                    const createdAtTime = createdAt.format('HH:mm')

                    return {
                        author: message.author_username,
                        text: message.content,
                        time: createdAtTime,
                        isOwnMessage: message.author === contextData.userId
                    }
                })

                setMessages([...messages, ...newMessages])
                break;
            }
        
        }
            
      },
      onClose: () => {
        console.log("Disconnected!");
      }
    });


    const handleSendMessage = () => {
        const stringMessage = message.current.value
        if (stringMessage) {
            sendMessage(stringMessage);
            message.current.value = ""
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };


    return (
        <div className="container-center-horizontal x4 screen">

            <div className="chat-container-ChatPage">
                <ul>
                    {messages.map((message, index) => (<Message key={index} username={message.author} text={message.text} time={message.time} isOwnMessage={message.isOwnMessage}/>))}
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