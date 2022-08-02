import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Css/Chat.css";

const ChatHeader = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="title-holder">
      <Link to="/chatlist">
        <div className="left">
          <i className="fa-solid fa-angle-left"></i>
          <h1>Message</h1>
        </div>
      </Link>
      {data &&
        data
          .filter((user) => user.id === parseInt(id))
          .map((user, i) => {
            return (
              <div className="name-holder" key={i}>
                <h1>{user.name}</h1>
                <Link to={`/profil/${user.id}`}>
                  <img className="image" src={user.img} alt="" />
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default ChatHeader;
