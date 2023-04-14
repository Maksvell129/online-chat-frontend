import React, {useState} from 'react'
import BarHeader from '../components/BarHeader/BarHeader';
import '../components/Chat/Chat.css';
import Chat from '../components/Chat/Chat';
import UsersList from "../components/Users/UsersList";

const ChatPage = () => {
    const [isInfoOpened, setIsInfoOpened] = useState(false);

    return (
     <div className="container-center-horizontal">
         <div className="x4 screen">
             <BarHeader spanText="Chat" headerTitle="Chat" handleUsersClick={() => setIsInfoOpened(true)}/>
             <Chat/>
         </div>
         {isInfoOpened && <UsersList onClose={() => setIsInfoOpened(false)} />}
     </div>
    )
}

export default ChatPage;