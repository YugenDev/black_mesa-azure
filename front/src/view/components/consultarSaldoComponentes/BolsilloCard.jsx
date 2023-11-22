import { useState } from "react";
import "./BolsilloCard.css";
// import Modal from "../UI/Modal";
import NuevoBolsillo from "./nuevoBolsillo";

// import beneficiosImg from "./imgsBolsillos/beneficios.png"
// import regaloImg from "./imgsBolsillos/caja-de-regalo.png"
// import carroImg from "./imgsBolsillos/carro.png"
// import casaImg from "./imgsBolsillos/casa.png"
// import arreglosImg from "./imgsBolsillos/configuraciones.png"
// import educacionImg from "./imgsBolsillos/educacion.png"
// import hospitalImg from "./imgsBolsillos/hospital.png"
// import saludImg from "./imgsBolsillos/salud.png"
// import tecnologiaImg from "./imgsBolsillos/tecnologia.png"
// import vueloImg from "./imgsBolsillos/vuelo.png"
// import agregarImg from "./imgsBolsillos/boton-agregar.png"




function BolsilloCard({ nombre, meta, deposito, logo }) {
  // const importImage = async () => {
  //   return await import(`./imgsBolsillos/${nombreArchivo}`);
  // }
  let rutaImg = "/src/view/components/consultarSaldoComponentes/imgsBolsillos/"+logo+".png"

  // let logoImg = importImage();
  return (
    <article className="card-container" >
      {/* {showModal &&
        <Modal clickHandler={clickHandlerCloseModal} setter={setShowModal}>
          <NuevoBolsillo></NuevoBolsillo>
        </Modal>       
      } */}
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
    </article>
  );
}

export default BolsilloCard;
