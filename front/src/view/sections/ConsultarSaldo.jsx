import Historial from "../components/consultarSaldoComponentes/Historial";
import Bolsillos from "../components/consultarSaldoComponentes/Bolsillos";
import Gastos from "../components/consultarSaldoComponentes/Gastos";
import "./ConsultarSaldo.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function ConsultarSaldo({currentUser,actualizar,setActualizar}) {
  const [optionSelected, setOptionSelected] = useState();
  const [isShowed, setIsShowed] = useState(false);
  const [cuentaActual, setCuentaActual] = useState(null);

  useEffect(()=>{
    const traerCuenta = async () => {
    let response = await axios.get(`http://localhost:3000/cuentas?idUsuario=${currentUser.id}`)
    setCuentaActual(response?.data[0])
  }
    traerCuenta()
  },[actualizar])
    
  

  const optionHandler = (e) => {
    setOptionSelected(e.target.textContent);
    setIsShowed(true);
  };

  const closeHandler = () =>{
    setIsShowed(false);
  }

  

  let option = {
    Historial: <Historial cuentaActual={cuentaActual}/>,
    Bolsillos: <Bolsillos cuentaActual={cuentaActual} setActualizar={setActualizar}/>,
    Gastos: <Gastos cuentaActual={cuentaActual}/>,
  };

  return (
    <section className="consultar-saldo-section">
      <div className="cuenta-card">
        <p>Cuenta de ahorro</p>
        <p>{`N° ${cuentaActual?.numeroCuenta}`}</p>
        <p>Saldo libre</p>
        <p>{`$ ${cuentaActual?.bolsillos.find((b)=> b.id==0 )?.deposito.toLocaleString('es-CO')||0}`}</p>
        <p>Tu cuenta</p>
        <p>Total: ${cuentaActual?.bolsillos.reduce((sum, i)=> sum + i.deposito,0).toLocaleString('es-CO')}</p>
      </div>
      <div className="consultar-saldo-options">
        <h5 onClick={optionHandler}>Bolsillos</h5>
        <h5 onClick={optionHandler}>Historial</h5>
        <h5 onClick={optionHandler}>Gastos</h5>
      </div>
      {isShowed ? (
        <div className="option-show-container">
          <span onClick={closeHandler} className="cerrar">X</span>
          {option[optionSelected]}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default ConsultarSaldo;
