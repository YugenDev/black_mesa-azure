import React from "react";
import "./Chat.css";
import enviarIcon from "../../../assets/images/enviarIcon.png"
import Mensaje from "./Mensaje";



const Chat = ({showChat}) => {
  let mensajes = [
    {
      quien: "chatbot",
      text: "Hola, mi nombre es MesIAs, tu asistente financiero personalizado, soy una inteligencia artificial capacitada para responder todas tus preguntas, así que cuéntame, ¿cómo puedo ayudarte?"
    },
    {
      quien:"user",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda quae nihil ipsam sapiente voluptate eligendi atque? Corporis, sit impedit hic doloremque dolores, porro ab eveniet fuga aliquid temporibus non."
    },
    {
      quien: "chatbot",
      text: "Claro, porro ab eveniet fuga aliquid temporibus non."
    },
    {
      quien: "user",
      text: "Gracias."
    }
  ]
  return (
    <div className={showChat?"chat-container":"dont-show"}>
      <div className="messages-container">
        {
          mensajes.map((m)=>{
            return <Mensaje mensaje={m}/>
          })
        }
      </div>
      <span className="send-msg">
        <img src={enviarIcon} alt="enviar" />
      </span>
      <input type="text" placeholder="Escribe algo" />
    </div>
  );
};

export default Chat;
