import React, {useState, useRef} from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import MessagesList from '../components/MessagesList/MessagesList';
import UsersList from "../components/Users/UsersList";
import CustomInput from '../components/MessageInput/MessageInput';
import '../components/MessagesList/MessagesList.css'

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);
    
    const message = useRef();

    const [messages, setMessages] = useState([]);
    
    
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

    return (
     <div className="container-center-horizontal">
         <div className="x4 screen">
             <BarHeader spanText="Chat" headerTitle="Chat" handleUsersClick={() => setIsInfoOpened(true)}/>
             {isInfoOpened && <UsersList onClose={() => setIsInfoOpened(false)} />}
             <MessagesList messages={messages}/>
             <CustomInput
                onSubmit={handleSendMessage}
                onKeyDown={handleKeyDown}
                messageRef={message}
            />
         </div>
     </div>
    )
}

export default ChatPage;