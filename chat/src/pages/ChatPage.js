import React from 'react'
import BarHeader from '../components/Login/BarHeader';
import '../components/Chat/Chat.css';
import Chat from '../components/Chat/Chat';
import LoginForm from "../components/Login/LoginForm";

const ChatPage = () => {

    return (
     <div className="container-center-horizontal">
         <div className="x4 screen">
             <BarHeader spanText="Chat" headerTitle="Chat"/>
             <Chat/>
         </div>
     </div>
    )
}

export default ChatPage;