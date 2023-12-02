import React, { useEffect, useState } from "react";
import "./Chat.css";
import enviarIcon from "../../../assets/images/enviarIcon.png"
import Mensaje from "./Mensaje";
import axios from "axios";



const Chat = ({showChat,sesionOpenAI, setSesionOpenAI}) => {
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

  const [mensajesIA,setMensajesIA]=useState(null)
  const [prompt, setPrompt] = useState("")
  
  let traerDatos = async ()=>{
    let response = await axios.get(
      `http://localhost:3001/hilo/${sesionOpenAI.thread.id}`
    )
    setMensajesIA(response.data.body.data.reverse())
    
  }

  let enviarDatos = async ()=>{
    let bodyReq ={thread:sesionOpenAI.thread, mensaje: prompt}
    let responseHilo = await axios.post("http://localhost:3001/hilo",bodyReq);
    let newHiloResponse = await axios.get(
      `http://localhost:3001/hilo/${sesionOpenAI.thread.id}`
    )
    // console.log(newHiloResponse.data.body.data[0]);
    let newHilo = newHiloResponse.data.body.data[0]
    let respuesta = await axios.post(
      `http://localhost:3001/asistente`, {thread:{...newHilo}}
    )
    // console.log(primeraRespuesta.data);
    setSesionOpenAI({...sesionOpenAI, run: respuesta.data})

  }
  
  let handleInput = (e)=>{
    setPrompt(e.target.value);
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    enviarDatos();
    setPrompt("")
    setTimeout(()=>{
      traerDatos();
    },"10000")

  }
  


  return (
    <div className={showChat?"chat-container":"dont-show"}>
      <div className="messages-container">
        {mensajesIA?.slice(1).map((m)=>{
          let mensaje={
            quien:m.role=="assistant"?"chatbot":"user",
            text: m.content[0].text.value
          }
          return <Mensaje mensaje={mensaje}/>

        })}
        
      </div>
      <form action="" onSubmit={handleSubmit}>
      <span className="send-msg" onClick={handleSubmit} >
        <img src={enviarIcon} alt="enviar" />
      </span>
      <input type="text" placeholder="Escribe algo" value={prompt} onInput={handleInput}/>
      </form>
      <button onClick={traerDatos} className="reload">↻</button>
    </div>
  );
};

export default Chat;
