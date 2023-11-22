import { useState } from "react";
import "./BolsilloCard.css";
import Modal from "../UI/Modal";
import NuevoBolsillo from "./nuevoBolsillo";

function BolsilloCard({ nombre, meta, deposito, logo }) {
  const [showModal, setShowModal] = useState(false);

  const clickHandlerCloseModal = () => {
    setShowModal(false);
    console.log(showModal);
    console.log("aaaaa");
  };
  const clickHandlerShowModal = () => {
    if(nombre==="Nuevo bolsillo"){
      setShowModal(true);
    }
  };
  return (
    <article className="card-container" onClick={clickHandlerShowModal} >
      {/* {showModal &&
        <Modal clickHandler={clickHandlerCloseModal} setter={setShowModal}>
          <NuevoBolsillo></NuevoBolsillo>
        </Modal>       
      } */}
      <div className="marco-logo">
        <img src={logo} alt={"bolsiloImg"} className="bolsillo-logo" />
      </div>
      <h4 className="bolsillo-nombre">{nombre}</h4>
      <p className="bolsillo-saldo">
        {!isNaN(deposito)
          ? `Saldo: $${new Intl.NumberFormat("es-ES").format(deposito)}`
          : "Reserva tu dinero"}
      </p>
      <div className="porcentaje-contenedor">
        <span
          className="bolsillo-porcentaje"
          style={{
            width:
              nombre != "Nuevo bolsillo"
                ? (deposito / meta) * 100 + "%"
                : "100%",
          }}
        >
          {nombre != "Nuevo bolsillo"
            ? `${Math.round((deposito / meta) * 100, 0)}%`
            : "Revisa tu avance"}
        </span>
      </div>
    </article>
  );
}

export default BolsilloCard;
