import React from "react";
import { Link } from "react-router-dom";


import CallsContacts from '../Components/CallsContacts'
import CallsListHeader from "../Components/CallsListHeader";
import NavBar from "../Components/NavBar";

const Calls = ({ data }) => {
  return (
    <div>
      <CallsListHeader />
      {data &&
        data.map((user, i) => {
          return (
            <Link key={i} to={`/calling/${user.id}`}>
              <CallsContacts
                name={user.name}
                img={user.img}
                calls={user.calls}
                time={user.time}
              />
            </Link>
          );
        })}
      <NavBar />
    </div>
  );
};

export default Calls;
