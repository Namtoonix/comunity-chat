import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

App.propTypes = {};

function App(props) {
  return (
    <ChatEngine
      height="100vh"
      projectID="3a4a529a-932b-40ff-af9e-ad860c4a5bc2"
      userName="admin"
      userSecret="Xilamtoonix@005882"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;
