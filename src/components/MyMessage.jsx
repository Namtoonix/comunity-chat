import { useState } from "react";

const MyMessage = ({ message }) => {
  const [hideTime, setHideTime] = useState(false);

  const timeCreate = new Date(message.created);
  const timeRender = String(timeCreate).split(" ").slice(0, 5).join(" ");
  const toggleClass = () => {
    setHideTime(!hideTime);
  };

  if (message.attachments && message.attachments.length > 0) {
    return (
      <div className="img-block">
        <img
          onClick={() => toggleClass()}
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: "right" }}
        />
        <span
          className={hideTime ? "" : "hidden"}
          style={{
            color: "#ccc",
            marginRight: "20px",
            width: "100%",
            textAlign: "end",
          }}
        >
          {timeRender}
        </span>
      </div>
    );
  }

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
          width: "100%",
          textAlign: "end",
        }}
      >
        {timeRender}
      </span>
    </div>
  );
};

export default MyMessage;
