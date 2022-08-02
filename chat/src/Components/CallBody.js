import React from "react";
import { useParams, Link } from "react-router-dom";

import "./Css/CallBody.css";

const CallBody = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      {data &&
        data
          .filter((user) => user.id === parseInt(id))
          .map((user, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${user.img})`,
                  height: `100vh`,
                  backgroundPosition: `center`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backdropFilter: "blur(20px)",
                }}
                className="call-body-holder"
              >
                <div className="call-body-content">
                  <img className="user-image image" src={user.img} alt="" />
                  <h1>{user.name}</h1>
                  <h2>Calling...</h2>
                  <Link to="/calls">
                    <img
                      className="phonecall"
                      src="../img/Decline.png"
                      alt=""
                    />
                  </Link>
                  <h3>Decline</h3>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CallBody;
