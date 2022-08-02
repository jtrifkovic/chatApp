import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Contacts.css";

import ChatListHeader from "../Components/ChatListHeader";
import Contacts from "../Components/Contacts";
import NavBar from "../Components/NavBar";

const ChatList = ({ data }) => {
  return (
    <div>
      <ChatListHeader />
      {data &&
        data.map((user, i) => {
          return (
            <Link key={i} to={`/chat/${user.id}`}>
              <Contacts
                name={user.name}
                img={user.img}
                id={user.id}
                messages={user.messages}
                time={user.time}
              />
            </Link>
          );
        })}
      <NavBar />
    </div>
  );
};

export default ChatList;
