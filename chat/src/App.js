import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import Calls from "./Pages/Calls";
import ChatList from "./Pages/ChatList";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";

// COMPONENTS
import ChatItems from "./Components/ChatItems";
import CallBody from "./Components/CallBody.js";
import Profil from "./Components/Profil";

// JSON
import Data from './JSON/Contacts.json'

function App() {
  const data = Data;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/chatlist" element={<ChatList data={data} />} />
        <Route exact path="/calls" element={<Calls data={data} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chat/:id" element={<ChatItems data={data} />} />
        <Route path="/calling/:id" element={<CallBody data={data} />} />
        <Route path="/profil/:id" element={<Profil data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
