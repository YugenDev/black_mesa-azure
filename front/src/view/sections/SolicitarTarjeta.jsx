import React from 'react'
import "./SolicitarTarjeta.css"
import chip from "./../../assets/images/chip.png"
import visa from "./../../assets/images/visa.png"
import { useState, useEffect } from 'react'
import axios from 'axios'

const SolicitarTarjeta = ({ currentUser, setCurrentUser, actualizar }) => {
    const [cuentaActual, setCuentaActual] = useState(null)

    useEffect(() => {
        const buscarCuenta = async () => {
            let respuesta = await axios.get(`http://localhost:3000/cuentas?idUsuario=${currentUser.id}`)
            setCuentaActual(respuesta.data[0])
        }
        buscarCuenta()
    }, [])
    
    console.log(cuentaActual);

    return (
        <section className='contenedor-solicitar'>
            <article class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div className='contenedor-front'>
                            <h2>BLACK MESA PREMIUM CARD</h2>
                            <img src={chip} alt="chip" className='chip' />
                            <p className="numero-cuenta">{`${cuentaActual?.numeroCuenta}`}</p>
                            <div className='contenedor-fecha-nombre'>
                                <div>
                                    <p><span>12/24</span></p>
                                    <h2 id="nombre-usuario">{currentUser?.nombre}</h2>
                                </div>
                                <img src={visa} alt="visa" className='visa' />
                            </div>
                        </div>

                    </div>
                    <div class="flip-card-back">
                        <div className="contenedor-back">
                            <p id='black'>Back Content</p>
                            <article className='contenedor-codigo-parrafo'>
                                <div className='contenedor-cvv'>
                                    <div className='espacio-codigo'>numb</div>
                                    <div className='cvv'><p>623</p></div>
                                </div>
                                <p id='parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repudiandae nesciunt
                                    officia exercitationem amet labore quidem! Ex harum non repellendus ipsum voluptatibus sit amet consectetur
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </article>
            <div className='contenedor-preaprobado'>
                <h2 className='saldo'>Tienes un cupo <span>preaprobado</span> de</h2>
                <h3><span>3000000</span> , haz click en confirmar para solicitar tu tarjeta ahora mismo</h3>
                <button>confirmar</button>
            </div>

        </section>
    )
}

export default SolicitarTarjeta