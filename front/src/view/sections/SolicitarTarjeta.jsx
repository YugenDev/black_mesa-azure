import React from "react";
import "./SolicitarTarjeta.css";
import chip from "./../../assets/images/chip.png";
import visa from "./../../assets/images/visa.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Mistarjetas from "./Mistarjetas";


const SolicitarTarjeta = ({ currentUser, setCurrentUser, actualizar, confirmarTarjeta }) => {
    const [cuentaActual, setCuentaActual] = useState(null);


    useEffect(() => {
        const traerCuenta = async () => {
            let response = await axios.get(
                `http://localhost:3000/cuentas?idUsuario=${currentUser.id}`
            );
            setCuentaActual(response?.data[0]);
        };
        traerCuenta();
    }, []);

    const cupoDeTarjeta = cuentaActual?.bolsillos.reduce((sum, i) => sum + i.deposito, 0) * 1.2;
    const generarNumeroTarjetaAleatorio = () => {
        const longitudCuenta = 10;
        const numerosPermitidos = "0123456789";
        let numeroCuenta = "";
        for (let i = 0; i < longitudCuenta; i++) {
          const indice = Math.floor(Math.random() * numerosPermitidos.length);
          numeroCuenta += numerosPermitidos.charAt(indice);
        }
      
        return Number(numeroCuenta);
      };

    const generarCvv=()=>{
        const longitudCuenta = 3;
        const numerosPermitidos = "0123456789";
        let numeroCvv = "";
        for (let i = 0; i < longitudCuenta; i++) {
            const indice = Math.floor(Math.random() * numerosPermitidos.length);
            numeroCvv += numerosPermitidos.charAt(indice);
          }
          return Number(numeroCvv)
    }

    function generarFecha() {
        const mes = Math.floor(Math.random() * 12) + 1; 
        const año = Math.floor(Math.random() * 5) + 26; 
      
        const mesFormateado = mes < 10 ? `0${mes}` : mes;
        const añoFormateado = año < 10 ? `0${año}` : año;
      
        return `${mesFormateado}/${añoFormateado}`;
      }

    const handleConfirmarClick = async () => {
        const confirmacion = window.confirm("ta seguro?")
        if (confirmacion) {
            const response = await axios.post("http://localhost:3000/tarjeta", {
                idUsuario: currentUser.id,
                cupoTarjeta: cupoDeTarjeta,
                nombreUsuario: currentUser.nombre,
                numeroTarjeta:generarNumeroTarjetaAleatorio(),
                cvv:generarCvv(),
                fechaVencimiento:generarFecha(),
            }, handleConfirmarClick);
            console.log("esta vaina funciona")
            alert("tarjeta creada con exito")
        }
    }

    return (
        <section className="contenedor-solicitar">
            <article className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="contenedor-front">
                            <h2>BLACK MESA PREMIUM CARD</h2>
                            <img src={chip} alt="chip" className="chip" />
                            <p className="numero-cuenta">{`${cuentaActual?.numeroCuenta}`}</p>
                            <div className="contenedor-fecha-nombre">
                                <div>
                                    <p>
                                        <span>12/24</span>
                                    </p>
                                    <h2 id="nombre-usuario">{currentUser?.nombre}</h2>
                                </div>
                                <img src={visa} alt="visa" className="visa" />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="contenedor-back">
                            <p id="black">Back Content</p>
                            <article className="contenedor-codigo-parrafo">
                                <div className="contenedor-cvv">
                                    <div className="espacio-codigo">numb</div>
                                    <div className="cvv">
                                        <p>623</p>
                                    </div>
                                </div>
                                <p id="parrafo">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Architecto repudiandae nesciunt officia exercitationem amet
                                    labore quidem! Ex harum non repellendus ipsum voluptatibus sit
                                    amet consectetur
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </article>
            <div className="contenedor-preaprobado">
                <h2 className="saldo">
                    Tienes un cupo <span>preaprobado</span> de
                </h2>
                <h3>
                    <span>${cupoDeTarjeta.toLocaleString('es-CO')}</span> , haz click en confirmar para solicitar tu
                    tarjeta ahora mismo
                </h3>
                <button onClick={handleConfirmarClick}>confirmar</button>
            </div>
        </section>
    );
};

export default SolicitarTarjeta;
