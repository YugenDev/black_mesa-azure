import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario  from "./view/VistaUsuario";

import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  
  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} currentUser={currentUser}></Header>
      {
        isLogged?
        <VistaUsuario currentUser={currentUser} />
        :
        <VistaVisitante />
      }
    </>
  );
}

export default App;
