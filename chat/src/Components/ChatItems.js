import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import { useRef } from "react";

const ChatItems = ({ data }) => {
  const topRef = useRef();
  return (

    <div>
      <ChatHeader data={data} />
      <ChatBody data={data} topRef={topRef} />
    </div>
  );
};

export default ChatItems;
