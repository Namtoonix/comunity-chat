import { ChatCard, ChatEngine, ChatList, NewChatForm } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";
import ToggleTheme from "./components/ToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const projectID = "3a4a529a-932b-40ff-af9e-ad860c4a5bc2";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme ? "dark" : "false"}>
      <ToggleTheme />
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderChatCard={(chat, index) => (
          <ChatCard key={`${index}`} chat={chat} />
        )}
        renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
