import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

const Chat = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState(0);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed, >>>", input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.fieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages".orderBy("timestamp", "asc"))
        .onSnapshot((snapshot) => snapshot.docs.map((doc) => doc.data()));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3> {roomName} </h3>
          <p> Last seen at {""} {
            {new Date (messages.length[-1]?.timestamp?.toDate().toUTCString())
          }</p>
        </div>
        <div className="chat__headerRight">
          <IconButton> ...
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${true && "chat__receiver"}`}>
            <span className="chat__name"> Andrius Vegan</span>
            Hey guys go vegan now
            <span className="chat__timestamp">
              {" "}
              {new Data(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            type="text"
            placeholder="Type your message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
