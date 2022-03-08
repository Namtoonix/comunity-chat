import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

ScrollBottom.propTypes = {
  messages: PropTypes.object.isRequired,
};

function ScrollBottom(props) {
  const messagesEndRef = useRef(null);
  const { messages } = props;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return <div ref={messagesEndRef} />;
}

export default ScrollBottom;
