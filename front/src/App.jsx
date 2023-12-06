import Header from "./view/sections/Header";
import VistaVisitante from "./view/VistaVisitante";
import VistaUsuario from "./view/VistaUsuario";
// import { FormFirebase } from "./view/components/headerComponentes/FormFirebase"; 

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [actualizar, setActualizar] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
  const [sesionOpenAI, setSesionOpenAI] = useState({});
  const [mensajes,setMensajes] = useState(false)


  useEffect(() => {
    setMensajes(false)
    const crearSesionOIA = async () => {
      if (isLogged) {
        const response = await axios.get("http://localhost:3001/hilo");
        setSesionOpenAI({
          ...sesionOpenAI,
          thread: response.data,
        });
        setMensajes(true)
      }

    };
    

    crearSesionOIA();
  }, [isLogged]);

  return (
    <>
      <Header
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        actualizar={actualizar}
        setSesionOpenAI={setSesionOpenAI}
      ></Header>
      {isLogged ? (
        <VistaUsuario
        mensajes={mensajes}
        setMensajes={setMensajes}
          sesionOpenAI={sesionOpenAI}
          setSesionOpenAI={setSesionOpenAI}
          currentUser={currentUser}
          setActualizar={setActualizar}
          actualizar={actualizar}
        />
      ) : (
        <VistaVisitante />
      )}
    </>
  );
}

export default App;

