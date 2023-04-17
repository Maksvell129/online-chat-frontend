import React, {useState} from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import '../components/Chat/Chat.css';
import Chat from '../components/Chat/Chat';
import UsersList from "../components/Users/UsersList";

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);

    return (
     <div className="container-center-horizontal">
         <div className="x4 screen chat-content">
             <BarHeader spanText="Chat" headerTitle="Chat" handleUsersClick={() => setIsInfoOpened(true)}/>
             {isInfoOpened && <UsersList onClose={() => setIsInfoOpened(false)} />}
             <Chat/>
         </div>
     </div>
    )
}

export default ChatPage;