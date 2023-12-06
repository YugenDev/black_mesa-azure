import React, { useState } from "react";
import "./EditarBolsillo.css";
import axios from "axios";

function EditarBolsillo({
  id,
  nombre,
  deposito,
  closeModal,
  cuentaActual,
  setActualizar,
}) {
  const [addValue, setAddValue] = useState(null);
  const [substractValue, setSubstractValue] = useState(null);
  const [nuevaMeta, setNuevaMeta] = useState(null);

  const onAddInput = (e) => {
    setAddValue(e.target.value);
  };
  const onSubstractInput = (e) => {
    setSubstractValue(e.target.value);
  };
  const onMetaInput = (e) => {
    setNuevaMeta(e.target.value);
  };

  const handleDelete = async (e) => {
    if (
      window.confirm(
        "¿Segur@ que desea eliminar este bolsillo?\n\nEl dinero se sumará a su saldo libre"
      )
    ) {
      e.preventDefault();
      let copiaCuentaActual = { ...cuentaActual };
      let nuevosBolsillos = copiaCuentaActual.bolsillos.filter(
        (b) => b.id !== id
      );
      copiaCuentaActual.bolsillos[0].deposito += Number(deposito);
      copiaCuentaActual.bolsillos = nuevosBolsillos;
      let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,
        copiaCuentaActual
      );
      setActualizar((prev) => prev + 1);
      closeModal();
    }
  };
  const handleAdd = async (e) => {
    if (
      window.confirm(
        "¿Segur@ que desea cargar dinero a este bolsillo?\n\nEl dinero se restará de su saldo libre y se sumará a este bolsillo"
      )
    ) {
      e.preventDefault();
      let copiaCuentaActual = { ...cuentaActual };
      let bolsilloModificado = copiaCuentaActual.bolsillos.find(
        (b) => b.id == id
      );
      bolsilloModificado.deposito += Number(addValue);
      copiaCuentaActual.bolsillos[0].deposito -= Number(addValue);
      //   console.log(copiaCuentaActual.bolsillos);
      let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,
        copiaCuentaActual
      );
      setActualizar((prev) => prev + 1);
      setAddValue(null);
    }
  };
  const handleNuevaMeta = async (e) => {
    if (window.confirm("¿Segur@ que desea cambiar la meta de este bolsillo?")) {
      e.preventDefault();
      let copiaCuentaActual = { ...cuentaActual };
      let bolsilloModificado = copiaCuentaActual.bolsillos.find(
        (b) => b.id == id
      );
      bolsilloModificado.meta = Number(nuevaMeta);
      let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,
        copiaCuentaActual
      );
      setActualizar((prev) => prev + 1);
      setNuevaMeta(null);
    }
  };
  const handleSubstract = async (e) => {
    if (
      window.confirm(
        "¿Segur@ que desea descargar dinero de este bolsillo?\n\nEl dinero se sumará a su saldo libre y se restará de este bolsillo"
      )
    ) {
      e.preventDefault();
      let copiaCuentaActual = { ...cuentaActual };
      let bolsilloModificado = copiaCuentaActual.bolsillos.find(
        (b) => b.id == id
      );
      bolsilloModificado.deposito -= Number(substractValue);
      copiaCuentaActual.bolsillos[0].deposito += Number(substractValue);
      let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,
        copiaCuentaActual
      );
      setActualizar((prev) => prev + 1);
      setSubstractValue(null);
    }
  };

  return (
    <div className="contenedor-editar">
      <h2>{"Editar bolsillo: " + nombre}</h2>
      <div className="contenedor-forms">
        <form className="contenedor-inputs-editar" onSubmit={handleAdd}>
          <h4>Cargar dinero</h4>
          <input
            type="number"
            placeholder={
              "Cantidad (max: $" +
              cuentaActual.bolsillos[0].deposito.toLocaleString("es-ES") +
              ")"
            }
            value={addValue}
            onInput={onAddInput}
          />
          <input
            type="submit"
            value={"Confirmar"}
            disabled={
              addValue >= 1000 && addValue < cuentaActual.bolsillos[0].deposito
                ? false
                : true
            }
          />
        </form>
        <form className="contenedor-inputs-editar" onSubmit={handleNuevaMeta}>
          <h4>Editar meta</h4>
          <input
            type="number"
            placeholder={"Nueva meta (min: $10.000)"}
            value={nuevaMeta}
            onInput={onMetaInput}
          />
          <input
            type="submit"
            value={"Confirmar"}
            disabled={nuevaMeta >= 10000 ? false : true}
          />
        </form>
        <form className="contenedor-inputs-editar" onSubmit={handleSubstract}>
          <h4>Descargar dinero</h4>
          <input
            type="number"
            placeholder={
              "Cantidad (max: $" + deposito.toLocaleString("es-ES") + ")"
            }
            value={substractValue}
            onInput={onSubstractInput}
          />
          <input
            type="submit"
            value={"Confirmar"}
            disabled={
              substractValue >= 1000 && substractValue < deposito ? false : true
            }
          />
        </form>
      </div>
      <button className="boton-eliminar-bolsillo" onClick={handleDelete}>
        ELIMINAR BOLSILLO
      </button>
    </div>
  );
}

export default EditarBolsillo;
