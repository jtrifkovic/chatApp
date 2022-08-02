import React from "react";
import "./Css/Contacts.css";

const Contacts = (props) => {
  return (
    <div className="contacts-holder">
      <div>
        <img className="image" src={props.img} alt="" />
      </div>
      <div className="contact-name">
        <h1>{props.name}</h1>
        <h5>{props.message}</h5>
      </div>
      <div className="time-wrapper">
        <h3>{props.time}</h3>
        {props.unread && <h4>{props.unread}</h4>}
      </div>
    </div>
  );
};

export default Contacts;
