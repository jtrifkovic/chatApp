import React from "react";
import "./Css/CallsContacts.css";

const CallsContacts = (props) => {
  return (
    <div className="contacts-holder">
      <div>
        <img className="image" src={props.img} alt="" />
      </div>
      <div className="contact-name">
        <h2>{props.name}</h2>
        <h5>
          <i className="fa-solid fa-phone"></i>
          {props.calls}
        </h5>
      </div>
      <div className="time-wrapper">
        <h3>{props.time}</h3>
      </div>
    </div>
  );
};

export default CallsContacts;
