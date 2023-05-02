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
import MessageService from '../services/MessageService';
import Moment from "moment/moment";
import { sendPrivateRequest } from '../utils/request';
import useRequest from '../hooks/useRequest';

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);
    const [usersOnline, setUsersOnline] = useState([])

    const [currentMessageText, setCurrentMessageText] = useState("")

    const [currentEditingMessage, setCurrentEditingMessage] = useState()

    const [isEditing, setIsEditing] = useState(false)

    const [messages, setMessages] = useState([]);

    const {authContextData} = useContext(AuthContext)
    const accessToken = getAccessToken()
    
 

    const {
        sendMessage,
      } = useWebSocket(`ws://${baseURL}/ws/chat/?access_token=${accessToken}`, {
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
                        isModified: data.is_modified,
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
                        isModified: message.is_modified,
                        isOwnMessage: message.author === authContextData.userId
                    }
                })

                setMessages(newMessages)
                break;
            }
            
            case 'message_updated':{
                const data = message.message
                if(authContextData.userId !== data.author){
                    const updatedMessage = messages.find((message) => message.id === data.id)
                    updatedMessage.text = data.content
                    updatedMessage.isModified = data.is_modified

                    setMessages((prevMessages) =>
                        prevMessages.map((message) => 
                            message.id === updatedMessage.id ? updatedMessage : message
                        )
                    )
                }
                break;
            }


            case 'message_updated':{
                const data = message.message
                if(authContextData.userId !== data.author){
                    const updatedMessage = messages.find((message) => message.id === data.id)
                    updatedMessage.text = data.content
                    updatedMessage.isModified = data.is_modified

                    setMessages((prevMessages) =>
                        prevMessages.map((message) => 
                            message.id === updatedMessage.id ? updatedMessage : message
                        )
                    )
                }
                break;
            }

            case 'message_deleted':{
                const deletedMessageId = message.message_id
                setMessages((prevMessages) => prevMessages.filter((message) => message.id !== deletedMessageId || message.isOwnMessage));
                break;
            }

            case 'online_info':{
                setUsersOnline(message.users_online)
                break;
            }

            case 'user_join':{
                setUsersOnline((prevUsers) => [...prevUsers, message.username])
                break;
            }

            case 'user_leave':{
                setUsersOnline((prevUsers) => [prevUsers.filter((user) => user !== message.username)])
                break;
            }
        }

      },
      onClose: () => {
        console.log("Disconnected!");
      },
      onError: () => {
        console.log('Error')
      },
    });
    
    

    const [updateLoading, sendUpdateMessageRequest] = useRequest(async (id, text) => {
        await sendPrivateRequest(
            async () => await MessageService.update(id, text)
        )
    })

    const [deleteLoading, sendDeleteMessageRequest] = useRequest(async (id) => {
        await sendPrivateRequest(
            async () => await MessageService.delete(id)
        )
    })

    const currentMessageTextChanged = (event) => {
        event.preventDefault()
        setCurrentMessageText(event.target.value)
    }

    const editingCurrentMessageTextChanged = (event) => {
        event.preventDefault()
        setCurrentEditingMessage((prevMessage) => {
            return {...prevMessage, text: event.target.value}
        })
    }


    const handleSendMessage = () => {
        if (currentMessageText) {
            sendMessage(currentMessageText);
            setCurrentMessageText("")
        }
    };

    const handleMessageStartEdit = (id) => {
        setIsEditing(true)
        const message = messages.find((message) => message.id === id)
        setCurrentEditingMessage(message)
    }

    const handleUpdateMessage = () => {
        if(currentEditingMessage){
            const initialMessage = messages.find((message) => message.id === currentEditingMessage.id).text
            if(initialMessage !== currentEditingMessage.text){
                const newMessage = {...currentEditingMessage, isModified: true}

                setMessages((prevMessages) =>
                    prevMessages.map((message) => 
                        message.id === newMessage.id ? newMessage : message
                    )
                )
                setIsEditing(false)
                setCurrentEditingMessage()
                sendUpdateMessageRequest(newMessage.id, newMessage.text)                
            }
        }
    }
    
    const handleCancelEditingMessage = () => {
        setIsEditing(false)
        setCurrentEditingMessage()
    }

    const handleDeleteMessage = (id) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
        sendDeleteMessageRequest(id)
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
             {isInfoOpened && <UsersList users={usersOnline} onClose={() => setIsInfoOpened(false)} />}
             <MessagesList 
                 messages={messages}
                 handleMessageStartEdit={handleMessageStartEdit}
                 handleMessageDelete={handleDeleteMessage}/>
             {!isEditing ? 
                <MessageSend
                    message={currentMessageText}
                    onKeyDown={handleMessageSendKeyDown}
                    onMessageChanged={currentMessageTextChanged}
                    onSendMessage={handleSendMessage}
                />
                :
                <MessageUpdate
                    message={currentEditingMessage.text}
                    onKeyDown={handleMessageUpdateKeyDown}
                    onMessageChanged={editingCurrentMessageTextChanged}
                    onSave={handleUpdateMessage}
                    onCancel={handleCancelEditingMessage}
                />
            }
         </div>
     </div>
    )
}

export default ChatPage;