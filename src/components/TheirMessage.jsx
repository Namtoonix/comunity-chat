import { useState } from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  const [hideTime, setHideTime] = useState(false);
  const timeCreate = new Date(message.created);
  const timeRender = String(timeCreate).split(" ").slice(0, 5).join(" ");

  const toggleClass = () => {
    setHideTime(!hideTime);
  };

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          onClick={() => toggleClass()}
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          onClick={() => toggleClass()}
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
      <span
        className={hideTime ? "" : "hidden"}
        style={{
          color: "#ccc",
          marginRight: "20px",
          width: "100%",
          paddingLeft: "44px",
        }}
      >
        {timeRender}
      </span>
    </div>
  );
};

export default TheirMessage;
