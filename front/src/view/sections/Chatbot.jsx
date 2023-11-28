import React, { useEffect, useState } from 'react'
import "./Chatbot.css"
import Mesias from "../../assets/images/MesIAs-chat.png"

const Chatbot = ({currentUser}) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);  
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);


  return (
    <div className={scrolled?"scrolled-div Mesias-bubble ":"Mesias-bubble"}>
      <h2 className={scrolled?"not-show-h2":"show-h2"} >{"Hola, "+currentUser.nombre.split(" ")[0]} </h2>
      <img src={Mesias} alt="MesIAs" className={scrolled?"scrolled-img":""} />
    </div>
  )
}

export default Chatbot