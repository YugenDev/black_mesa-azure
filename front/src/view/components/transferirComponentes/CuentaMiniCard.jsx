import React, { useEffect, useState } from "react";
import "./CuentaMiniCard.css"
import axios from "axios";

const CuentaMiniCard = ({ idCuenta, setNumeroCuenta }) => {

    const[cuenta,setCuenta]=useState(null)
    const[usuario,setUsuario]=useState(null)

    useEffect(()=>{
        const traerCuenta = async () => {
        let response = await axios.get(`http://localhost:3000/cuentas?idUsuario=${idCuenta}`)
        setCuenta(response?.data[0])
      }
        traerCuenta()
      },[])

      useEffect(()=>{
        const traerUsuario = async () => {
        let response = await axios.get(`http://localhost:3000/usuarios?id=${cuenta?.idUsuario}`)
        setUsuario(response?.data[0])
      }
        if(cuenta){
            traerUsuario()
        }
      },[cuenta])

      const handleClick = ()=>{
        setNumeroCuenta(cuenta.numeroCuenta)
      }    

  return (
    <div className="perfil" onClick={handleClick}>
      <img src="https://thispersondoesnotexist.com/" alt="logo" />
      <div>
        <h3>{usuario?.nombre.split(" ")[0]}</h3>
        <p>{cuenta?.numeroCuenta}</p>
      </div>
    </div>
  );
};

export default CuentaMiniCard;
