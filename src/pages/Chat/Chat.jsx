import React from 'react'
import './Chat.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
import ChatBox from '../../components/ChatBox/ChatBox'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftBar/>
        <ChatBox/>
        <RightBar/>
      </div>
    </div>
  )
}

export default Chat
