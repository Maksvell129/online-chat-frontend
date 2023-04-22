import React, {useState, useRef, useContext} from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import MessagesList from '../components/MessagesList/MessagesList';
import UsersList from "../components/Users/UsersList";
import MessageInput from '../components/MessageInput/MessageInput';
import '../components/MessagesList/MessagesList.css'
import AuthContext from "../contexts/auth/AuthContext";
import useWebSocket from "react-use-websocket";
import {baseURL} from "../configuration/constants";
import {getAccessToken} from "../utils/token";
import Moment from "moment/moment";

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);
    
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
     <div className="container-center-horizontal">
         <div className="x4 screen">
             <BarHeader spanText="Chat" headerTitle="Chat" handleUsersClick={() => setIsInfoOpened(true)}/>
             {isInfoOpened && <UsersList onClose={() => setIsInfoOpened(false)} />}
             <MessagesList messages={messages}/>
             <MessageInput
                onSubmit={handleSendMessage}
                onKeyDown={handleKeyDown}
                messageRef={message}
            />
         </div>
     </div>
    )
}

export default ChatPage;