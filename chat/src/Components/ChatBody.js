import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import User from "../JSON/User.json";
import messages from "../JSON/Messages.json";

const ChatBody = () => {
  const [text, setText] = useState(() => {
    const localData = localStorage.getItem("MY_MESSAGES");
    return localData ? JSON.parse(localData) : []
  });
  // State za pozivanej API-a
  const [user, setUser] = useState([]);
  // const [myId, setMyId] = useState([]);
  // useEffect za pozivanje API-a
  // useEffect(() => {
  //   axios
  //     .get("https://kingdomdoo.com/chat/Contacts.json")
  //     .then((res) => {
  //       setUser(res.data);
  //       console.log(setUser);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect (() => {
    localStorage.setItem('MY_MESSAGES', JSON.stringify(text))
  }, [text])
  // useParams
  const { id } = useParams();
  //
  const myId = User.id;
  // chat scroll
  const slajder = useRef();
  // za ispisivanje inputa
  const textSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    e.target.message.value = "";
    const newMessage = { text: message };
    const newMessages = [...text, newMessage];
    setText(newMessages);
    // chat scroll
    slajder.current.scrollIntoView({ behavior: "smooth" });
  };
  // za ispisivanje tacnog vremena
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let day = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();

  return (
    <div className="chat-holder">
      <h5 className="message-day">{day}</h5>
      {/* filtriranje i ispisivanje poruka na osnovu id iz Json-a */}
      {user.map((user) => (
        <h1>{user.name}</h1>
      ))}
      {messages
        .filter((user) => user.id == parseInt(id))
        .map((message, i) => (
          <div key={i}>
            {message.senderId === myId && (
              <div className="message-holder-wrapper">
                <h1 className="sent-message">
                  {message.message}
                  <span>{time}</span>
                </h1>
              </div>
            )}
            {message.senderId !== myId && (
              <div>
                <h2 className="received-message">
                  {message.message}
                  <span>{time}</span>
                </h2>
              </div>
            )}
          </div>
        ))}
      <div id="message-holder" className="message-holder">
        {/* ispisivanje inputa */}
        {text.map((input, i) => (
          <div key={i}>
            <h1>
              {input.text}
              <span>{time}</span>
            </h1>
          </div>
        ))}
      </div>
      {/* chat scroll */}
      <div ref={slajder}></div>
      <div className="input-holder">
        <div className="paperclip-wrapper">
          <i className="fa-solid fa-paperclip"></i>
        </div>
        <form onSubmit={textSubmit}>
          <input
            className="message-input"
            name="message"
            type="text"
            placeholder="Message"
            autoCorrect="none"
          />
        </form>
        <i className="fa-solid fa-microphone"></i>
      </div>
    </div>
  );
};

export default ChatBody;
