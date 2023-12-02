import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario  from "./view/VistaUsuario";


import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [actualizar, setActualizar] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
  const [sesionOpenAI, setSesionOpenAI] = useState({});

  useEffect(()=>{
    const crearSesionOIA = async () =>{ 
    if(isLogged){
      const response = await axios.get(
        "http://localhost:3001/hilo"
      )
      console.log(response.data);
      setSesionOpenAI({
        ...sesionOpenAI,
        thread : response.data
      })
    }
  }
  crearSesionOIA();
  },[isLogged])

  
  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} currentUser={currentUser} actualizar={actualizar} setSesionOpenAI={setSesionOpenAI}></Header>
      {
        isLogged?
        <VistaUsuario currentUser={currentUser} setActualizar={setActualizar} actualizar={actualizar}/>
        :
        <VistaVisitante />
      }
    </>
  );
}

export default App;
