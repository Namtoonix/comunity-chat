import { useState } from "react";
const MyMessage = ({ message }) => {
  const [hideTime, setHideTime] = useState(false);

  const timeCreate = new Date(message.created);
  const timeRender = String(timeCreate).split(" ").slice(0, 5).join(" ");

  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  const toggleClass = () => {
    setHideTime(!hideTime);
  };
  return (
    <div className="message-item">
      <div
        className="message"
        onClick={() => toggleClass()}
        style={{
          marginRight: "20px",
          color: "white",
          backgroundColor: "#3B2A50",
        }}
      >
        {message.text}
      </div>
      <span
        className={hideTime ? "" : "hidden"}
        style={{
          color: "#ccc",
          marginRight: "20px",
        }}
      >
        {timeRender}
      </span>
    </div>
  );
};

export default MyMessage;
