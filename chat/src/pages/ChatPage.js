import React, {useState, useContext} from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import MessagesList from '../components/MessagesList/MessagesList';
import UsersList from "../components/Users/UsersList";
import MessageSend from '../components/MessageSend/MessageSend';
import MessageUpdate from '../components/MessageUpdate/MessageUpdate';
import '../components/MessagesList/MessagesList.css'
import AuthContext from "../contexts/auth/AuthContext";
import useWebSocket from "react-use-websocket";
import {baseURL} from "../configuration/constants";
import {getAccessToken} from "../utils/token";
import Moment from "moment/moment";

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);
    
    const [currentMessage, setCurrentMessage] = useState("")

    const [currentEditingMessage, setCurrentEditingMessage] = useState("")
    const [currentEditingMessageId, setCurrentEditingMessageId] = useState()
    const [isEditing, setIsEditing] = useState(false)

    const [messages, setMessages] = useState([]);

    const {authContextData} = useContext(AuthContext)


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
                        id: data.id,
                        author: data.author_username,
                        text: data.content,
                        time: createdAtTime,
                        isOwnMessage: authorId === authContextData.userId
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
                        id: message.id,
                        author: message.author_username,
                        text: message.content,
                        time: createdAtTime,
                        isOwnMessage: message.author === authContextData.userId
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

    const messageChanged = (event) => {
        event.preventDefault()
        setCurrentMessage(event.target.value)
    }

    const editingMessageChanged = (event) => {
        event.preventDefault()
        setCurrentEditingMessage(event.target.value)
    }


    const handleSendMessage = () => {
        if (currentMessage) {
            sendMessage(currentMessage);
            setCurrentMessage("")
        }
    };

    const handleMessageStartEdit = (id) => {
        setIsEditing(true)
        const message = messages.find((message) => message.id === id)
        setCurrentEditingMessage(message.text)
        setCurrentEditingMessageId(message.id)
    }

    const handleUpdateMessage = () => {
        if(currentEditingMessageId && currentEditingMessage){
            const initialMessage = messages.find((message) => message.id === currentEditingMessageId).text
            if(initialMessage !== currentEditingMessage){
                setMessages((prevMessages) =>
                    prevMessages.map((message) => 
                        message.id === currentEditingMessageId ? { ...message, text: currentEditingMessage } : message
                    )
                )

                setCurrentEditingMessageId()
                setIsEditing(false)
                setCurrentEditingMessage("")
            }
        }
    }
    
    const handleCancelEditingMessage = () => {
        setCurrentEditingMessageId()
        setIsEditing(false)
        setCurrentEditingMessage("")
    }

    const handleDeleteMessage = (id) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    }

    const handleMessageSendKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage()
        }
    };

    const handleMessageUpdateKeyDown = (event) => {
        if (event.key === "Enter") {
            handleUpdateMessage()
        }
    };


    return (
     <div className="container-center-horizontal">
         <div className="x4 screen">
             <BarHeader spanText="Chat" headerTitle="Chat" handleUsersClick={() => setIsInfoOpened(true)}/>
             {isInfoOpened && <UsersList onClose={() => setIsInfoOpened(false)} />}
             <MessagesList 
                 messages={messages}
                 handleMessageStartEdit={handleMessageStartEdit}
                 handleMessageDelete={handleDeleteMessage}/>
             {!isEditing ? 
                <MessageSend
                    message={currentMessage}
                    onKeyDown={handleMessageSendKeyDown}
                    onMessageChanged={messageChanged}
                    onSendMessage={handleSendMessage}
                />
                :
                <MessageUpdate
                    message={currentEditingMessage}
                    onKeyDown={handleMessageUpdateKeyDown}
                    onMessageChanged={editingMessageChanged}
                    onSave={handleUpdateMessage}
                    onCancel={handleCancelEditingMessage}
                />
            }
         </div>
     </div>
    )
}

export default ChatPage;