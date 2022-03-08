import { useContext } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import SearchMessage from "./components/SearchMessage";
import ToggleTheme from "./components/ToggleTheme";
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
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        renderChatSettingsTop={(creds, chat) => <SearchMessage />}
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
