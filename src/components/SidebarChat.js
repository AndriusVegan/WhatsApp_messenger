import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

export const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter the name of the room");
  };

  // if (roomName) {
  //   // get data from the database
  // }

  return !addNewChat ? (
    <div className="sidebarChat">
      ` <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />`
      <div className="sidebarChat__info">
        <h2> {name}</h2>
        <p> Last message Go Vegan right now </p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>ADD NEW CHAT</h2>
    </div>
  );
};

export default SidebarChat;
