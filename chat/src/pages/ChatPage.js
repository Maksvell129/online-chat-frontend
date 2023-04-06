import React from 'react'
import BarHeader from '../components/Common/BarHeader';
import '../components/Chat/Chat.css';
import Chat from '../components/Chat/Chat';

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