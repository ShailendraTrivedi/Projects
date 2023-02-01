import React from 'react';
import "./App.css"
import ChatFeed from './components/ChatFeed.jsx';
import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm.jsx';
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>;
  return (
    <>
      <div>
        <ChatEngine
          height="100vh"
          projectID="f7ed1f68-0138-4682-ae87-e3325a1baeec"
          userName="Ultron"   
          userSecret="12345678" //password
          renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
          onNewMessage = {() => new Audio("http://chat-engine-assets.s3.amazonaws.com/click.mp3")}
        />
      </div>
    </>
  )
}

export default App
