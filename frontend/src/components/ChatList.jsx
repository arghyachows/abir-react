import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/chat/1">Chat 1</Link>
        </li>
        <li>
          <Link to="/chat/2">Chat 2</Link>
        </li>
        <li>
          <Link to="/chat/3">Chat 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default ChatList;
