import { useState } from "react";
import Logo from "../components/headerComponentes/Logo";
import "./Header.css";
import Modal from "./Modal"
import LogInForm from "../components/headerComponentes/LogInForm";

// var nombre = "Andrés";

function Header({ isLogged , setIsLogged, currentUser ,setCurrentUser}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logOut = () =>{
    setCurrentUser({});
    setIsLogged(false);
  }

  return (
    <>
      {isLogged ? (
        <header className="header-logged-div">
          <Logo />
          <div className="welcome-container">
            <h5>Bienvenido, </h5>
            <h5>{currentUser.nombre}</h5>
            <img src="" alt="profile-pic" className="profile-pic" />
          </div>
          <div className="log-out">
            <p onClick={logOut}>Cerrar sesión</p>
          </div>
        </header>
      ) : (
        <header className="header-not-logged-div">
          <Logo></Logo>
          <button onClick={openModal}>Ingresar</button>
        </header>
      )}
      
      {modalOpen&&
      <Modal  isOpen={modalOpen} onClose={closeModal} >
        <LogInForm setIsLogged={setIsLogged} onClose={closeModal} setCurrentUser={setCurrentUser}/> 
      </Modal>}
      
    </>
  );
}

export default Header;
