import React from 'react'
import './MessageInput.css'

const MessageInput = ({message, onMessageChanged, onKeyDown}) => {
  return (
    <input
            className="overlap-group2 message-input abel-normal-boulder-14px"
            type="text"
            value={message}
            onChange={onMessageChanged}
            onKeyDown={onKeyDown}
        />
  )
}

export default MessageInput