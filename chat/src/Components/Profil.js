import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Css/Profil.css";

const Profil = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="profil">
      {data
        .filter((user) => user.id === parseInt(id))
        .map((user, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  backgroundImage: `url(${user.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "40vh",
                  zIndex: "0",
                }}
              >
                <div className="profil-link">
                  <Link className="link" to={`/chat/${user.id}`}>
                    <button className="profil-button">
                      <i className="fa-solid fa-profil fa-angle-left"></i>
                      Message
                    </button>
                  </Link>
                </div>
              </div>
              <div className="container">
                <div className="user-holder">
                  <div className="user-info">
                    <h1>{user.name}</h1>
                    <p>{user.number}</p>
                  </div>
                  <div className="user-icons">
                    <Link to={`/chat/${user.id}`}>
                      <img src="../img/Message.png" alt="" />
                    </Link>
                    <Link to="">
                      <img src="../img/Video.png" alt="" />
                    </Link>
                    <Link to={`/calling/${user.id}`}>
                      <img src="../img/Call.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="status-holder">
                  <h1>Status</h1>
                  <p>
                    Magical: you leave one person, and you return completely
                    different
                  </p>
                </div>
                <div className="media-holder">
                  <div className="media-one">
                    <img src="../img/Media.png" alt="" />
                    <h1>Media, Links, and Docs</h1>
                    <h2>190</h2>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="media-one">
                    <img src="../img/Starred.png" alt="" />
                    <h1>Starred Messages</h1>
                    <h2>2</h2>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="media-one">
                    <img src="../img/Sears.png" alt="" />
                    <h1>Chat Search</h1>
                    <h2></h2>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              <div className="mute-info">
                <div className="container">
                  <div className="media-one media-holder">
                    <img src="../img/Mute.png" alt="" />
                    <h1>Mute</h1>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profil;
