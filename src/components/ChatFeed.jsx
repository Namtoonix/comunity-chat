import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
import ToggleOption from "./ToggleOption";
import { Avatar } from "antd";
import React, { useContext } from "react";
import { ShowOptionContext } from "../ThemeContext";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const context = useContext(ShowOptionContext);
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className={"chat-feed " + (context.showOption ? "" : "width_75")}>
      <div className={"chat-title-container "}>
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person, index) => (
            <Avatar
              key={index}
              className={person.person.is_online ? "isOnline" : "isOffline"}
              style={{
                backgroundImage: `url(${person.person.avatar})`,
                backgroundSize: "cover",
                margin: "2px",
              }}
            />
          ))}
        </div>
        <ToggleOption />
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
