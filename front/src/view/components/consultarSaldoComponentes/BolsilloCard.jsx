import { useState } from "react";
import "./BolsilloCard.css";
import NuevoBolsillo from "./nuevoBolsillo";
import Modal from "../../sections/Modal";
import EditarBolsillo from "./EditarBolsillo";

function BolsilloCard({ cuentaActual, setActualizar, id, nombre, meta, deposito, logo }) {  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  let rutaImg = "/src/view/components/consultarSaldoComponentes/imgsBolsillos/"+logo+".png"
  
  return (
    <article className="card-container" onClick={openModal} >
      <div className="marco-logo">
        <img src={rutaImg} alt={"bolsiloImg"} className="bolsillo-logo" />
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
      {
        meta==="meta"?
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <NuevoBolsillo closeModal={closeModal} setActualizar={setActualizar} cuentaActual={cuentaActual}></NuevoBolsillo>
          <button onClick={closeModal} className="cerrar-crear">X</button>
        </Modal>:
        <Modal isOpen={modalOpen} onClose={closeModal} >
          <EditarBolsillo id={id} deposito={deposito} closeModal={closeModal} setActualizar={setActualizar} cuentaActual={cuentaActual} ></EditarBolsillo>
          <button onClick={closeModal} className="cerrar-editar">cerrar</button>
        </Modal>
        
      }
    </article>
  );
}

export default BolsilloCard;
