import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario from "./view/VistaUsuario";
import { FormFirebase } from "./view/components/headerComponentes/FormFirebase"; 

import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLoginSuccess = (user) => {
    setIsLogged(true);
    setCurrentUser(user);
  };

  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} currentUser={currentUser}></Header>
      {isLogged ? (
        <VistaUsuario currentUser={currentUser} />
      ) : (
        <VistaVisitante>
          {}
          <FormFirebase setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} handleLoginSuccess={handleLoginSuccess} />
        </VistaVisitante>
      )}
    </>
  );
}

export default App;

