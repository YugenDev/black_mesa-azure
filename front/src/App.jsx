import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario  from "./view/VistaUsuario";

import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [actualizar, setActualizar] = useState(1);
  const [currentUser, setCurrentUser] = useState({})
  
  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} currentUser={currentUser} actualizar={actualizar}></Header>
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
