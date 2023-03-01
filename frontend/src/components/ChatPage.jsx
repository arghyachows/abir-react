import React from "react";

const messages = [
  { text: "Hey there!", sender: "user" },
  { text: "Hi!", sender: "other" },
  { text: "How are you?", sender: "user" },
  { text: "I'm doing well, thanks for asking.", sender: "other" },
  { text: "What have you been up to?", sender: "other" },
  { text: "Not much, just working on some projects.", sender: "user" },
  { text: "That sounds interesting. What kind of projects?", sender: "other" },
  { text: "Just some web development stuff.", sender: "user" },
  { text: "Cool, let me know if you need any help!", sender: "other" },
];

const ChatPage = ({ match }) => {
  const chatId = match.params.chatId;

  return (
    <div>
      <h1>Chat {chatId}</h1>
      {messages.map((message, index) => (
        <div key={index}>
          {message.sender === "user" ? (
            <div>{message.text}</div>
          ) : (
            <div style={{ textAlign: "right" }}>{message.text}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatPage;
