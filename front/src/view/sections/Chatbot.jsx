import React, { useEffect, useState } from "react";
import "./Chatbot.css";
import Mesias from "../../assets/images/MesIAs-chat.png";
import Chat from "../components/chatbotComponents/Chat";

const Chatbot = ({ currentUser,sesionOpenAI, setSesionOpenAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => {
    setOpenChat(true);
    setTimeout(() => {
      setShowChat(true);
    }, 2000);
  };
  const handleClose = () => {
    setOpenChat(false);
    setShowChat(false)
  };

  return (
    <section>
      <div
        className={
          openChat
            ? "dont-show"
            : scrolled
            ? "scrolled-div Mesias-bubble "
            : "Mesias-bubble"
        }
        onClick={handleOpen}
      >
        <h2 className={scrolled ? "not-show-h2" : "show-h2"}>
          {"Hola, " + currentUser.nombre.split(" ")[0]}{" "}
        </h2>
        <img
          src={Mesias}
          alt="MesIAs"
          className={scrolled ? "scrolled-img" : ""}
        />
      </div>
      <div className={openChat ? "chat-opened" : "chat-closed"}>
        <span
          onClick={handleClose}
          className={openChat ? "close-span-opened" : "close-span-closed"}
        >
          X
        </span>
        <div className={showChat?"show":"hide"}>
          <Chat showChat={showChat} sesionOpenAI={sesionOpenAI} setSesionOpenAI={setSesionOpenAI}/>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
