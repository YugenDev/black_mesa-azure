import React from "react";
import "./EditarBolsillo.css";
import axios from "axios";

function EditarBolsillo({
  id,
  deposito,
  closeModal,
  cuentaActual,
  setActualizar,
}) {
  const handleDelete = async (e) => {
    if (
      window.confirm(
        "¿Segur@ que desea eliminar este bolsillo?\n\nEl dinero se descargará a su saldo libre"
      )
    ) {
      e.preventDefault();
      let copiaCuentaActual = { ...cuentaActual };
      let nuevosBolsillos = copiaCuentaActual.bolsillos.filter(
        (b) => b.id !== id
      );
      copiaCuentaActual.bolsillos[0].deposito += deposito;
      copiaCuentaActual.bolsillos = nuevosBolsillos;
      let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,
        copiaCuentaActual
      );
      setActualizar((prev) => prev + 1);
      closeModal();
    }
  };

  return (
    <div className="contenedor-editar">
      <h2>Editar Bolsillo</h2>
      <div className="contenedor-forms">
        <form className="contenedor-inputs-editar">
          <h4>Cargar dinero</h4>
          <input type="number" placeholder="Cantidad" />
          <input type="submit" value={"confirmar"} />
        </form>
        <form className="contenedor-inputs-editar">
          <h4>Descargar dinero</h4>
          <input type="number" placeholder="Cantidad" />
          <input type="submit" value={"confirmar"} />
        </form>
      </div>
      <button className="boton-eliminar-bolsillo" onClick={handleDelete}>
        ELIMINAR BOLSILLO
      </button>
    </div>
  );
}

export default EditarBolsillo;
