import Historial from "../components/consultarSaldoComponentes/Historial";
import Bolsillos from "../components/consultarSaldoComponentes/Bolsillos";
import Gastos from "../components/consultarSaldoComponentes/Gastos";
import "./ConsultarSaldo.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function ConsultarSaldo({currentUser,actualizar,setActualizar, sesionOpenAI,setSesionOpenAI, mensajes, setMensajes}) {
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
    
  useEffect(()=>{
    if(mensajes){
      const empezarConversacion = async()=>{
      let bodyReq ={thread:sesionOpenAI.thread, mensaje:
        `Esta es la información financiera del cliente:${JSON.stringify({...cuentaActual,...currentUser})}. Saluda y pregunta en qué puedes ayudar hoy`
      }
      let responseHilo = await axios.post("http://localhost:3001/hilo",bodyReq);
      // console.log(responseHilo.data);
      let newHiloResponse = await axios.get(
        `http://localhost:3001/hilo/${sesionOpenAI.thread.id}`
      )
      // console.log(newHiloResponse.data.body.data[0]);
      let newHilo = newHiloResponse.data.body.data[0]
      let primeraRespuesta = await axios.post(
        `http://localhost:3001/asistente`, {thread:{...newHilo}}
      )
      // console.log(primeraRespuesta.data);
      setSesionOpenAI({...sesionOpenAI, run: primeraRespuesta.data})
    }
    empezarConversacion();
  }

    },[mensajes])

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
