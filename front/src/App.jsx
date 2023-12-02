import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario from "./view/VistaUsuario";
import { FormFirebase } from "./view/components/headerComponentes/FormFirebase"; 


import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [actualizar, setActualizar] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
  const [sesionOpenAI, setSesionOpenAI] = useState({});



  
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

