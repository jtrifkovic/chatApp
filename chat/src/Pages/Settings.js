import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Settings.css";

import NavBar from "../Components/NavBar";


const Settings = () => {
  return (
    <div className="settings-holder">
      <div className="settings-header">
        <Link to="/chatlist">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1>Settings</h1>
      </div>
      <div className="settings-profil-wrapper">
        <div>
          <img className="image" src="../img/kluni.jpg" alt="" />
        </div>
        <div>
          <h1 className="profil-name">Bogdan Petrovic</h1>
          <p className="profil-p">Junior FrontEnd Developer...</p>
        </div>
        <div>
          <i className="fa-solid fa-qrcode"></i>
        </div>
      </div>
      <div className="setting-content">
        <div className="account">
          <div className="left">
            <i className="fa-solid fa-key"></i>
          </div>
          <div className="right">
            <h1>Account</h1>
            <p>Privacy, security, change number</p>
          </div>
        </div>
        <div className="account">
          <div className="left">
            <i className="fa-regular fa-message"></i>
          </div>
          <div className="right">
            <h1>Chats</h1>
            <p>Theme, wallpapers, chat history</p>
          </div>
        </div>
        <div className="account">
          <div className="left">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="right">
            <h1>Notifications</h1>
            <p>Message, group and call tones</p>
          </div>
        </div>
        <div className="account">
          <div className="left">
            <i className="fa-solid fa-box-open"></i>
          </div>
          <div className="right">
            <h1>Storage and data</h1>
            <p>Network usage, auto download</p>
          </div>
        </div>
        <div className="account">
          <div className="left">
            <i className="fa-regular fa-circle-question"></i>
          </div>
          <div className="right">
            <h1>Help</h1>
            <p>Help center, contact us, privacy policy</p>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Settings;
