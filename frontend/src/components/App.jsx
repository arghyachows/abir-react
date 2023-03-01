import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatList from './ChatList';
import ChatPage from './ChatPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
