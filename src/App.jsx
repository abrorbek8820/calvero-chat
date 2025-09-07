// src/App.jsx — CHAT APP (soddalashtirilgan)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat.jsx';
import ChatList from './components/ChatList.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Chat ro‘yxati */}
        <Route path="/" element={<ChatList />} />
        {/* Bitta suhbat */}
        <Route path="/chat/:phone" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}