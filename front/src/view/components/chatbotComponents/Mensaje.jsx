import React from 'react'
import MesIAs from '../../../assets/images/MesIAs-chat.jfif'
import "./Mensaje.css"

const Mensaje = ({mensaje}) => {
    let isChatbot;
    if(mensaje.quien === "chatbot") {isChatbot = true;}

  return (
    <div className={isChatbot?'message-container chat-bot-message':'message-container user-message' }>
        <img src={isChatbot?MesIAs:"https://thispersondoesnotexist.com/"} alt="img" />
        <p>
            {mensaje.text} 
        </p>
        <span>{isChatbot?"MesIAs":"Tú"}</span>
    </div>
  )
}

export default Mensaje