import React from 'react'
import "./SolicitarTarjeta.css"
import chip from "./../../../public/chip.png"
import visa from "./../../../public/visa.png"

const SolicitarTarjeta = () => {
    return (
        <section className='contenedor-solicitar'>
            <article class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div className='contenedor-front'>
                        <h2>BLACK MESA BANK</h2>
                            <img src={chip} alt="chip" className='chip'/>
                        <p id="numero-cuenta">12345678901</p>
                        <div className='contenedor-fecha-nombre'>
                            <div>
                                <p>valido hasta <span>12/24</span></p>
                                <h2 id="nombre-usuario">Nombre de usuario</h2>
                            </div>
                            <img src={visa} alt="visa" className='visa'/>
                        </div>
                        </div>
                        
                    </div>
                    <div class="flip-card-back">
                        <p>Back Content</p>
                    </div>
                </div>
            </article>
            <div className='contenedor-preaprobado'>
            <h2 className='saldo'>saldo preaprobado</h2>
            <h3>3000000</h3>
            <button>confirmar</button>
            </div>
           
        </section>
    )
}

export default SolicitarTarjeta