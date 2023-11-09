import Logo from "../components/Logo";
import "./Header.css";

var nombre = "Andrés";

function Header({ isLogged }) {
  return (
    <>
      {isLogged ? (
        <header className="header-logged-div">
          <Logo></Logo>
          <div className="welcome-container">
            <h5>Bienvenido, </h5>
            <h5>{nombre}</h5>
            <img src="" alt="profile-pic" className="profile-pic" />
          </div>
          <div className="log-out">
            <p>Cerrar sesión</p>
          </div>
        </header>
      ) : (
        <header className="header-not-logged-div">
          <Logo></Logo>
          <button>Ingresar</button>
        </header>
      )}
    </>
  );
}

export default Header;
