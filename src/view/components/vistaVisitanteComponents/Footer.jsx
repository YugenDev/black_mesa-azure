import React from 'react'
import "./Footer.css"
import rostro from "./imgsVistaVisitante/rostro.jpg"
import email from "./imgsVistaVisitante/icono-email.png"
import github from "./imgsVistaVisitante/github.png"
const Footer = () => {
  return (
    <footer className='contenedor-footer'>
        <form className='formulario-contacto'>
            <h2>Contactanos</h2>
            <input type="text" placeholder='correo de contacto'/>
            <input type="text" placeholder='telefono'/>
            <input type="text" placeholder='datos generales'/>
        </form>
        <article className='contenedor-cards'>
            <div className="card">
                <img src={rostro} alt="rostro" />
                <h2>Andres</h2>
                <p><i><img src={email} alt="icono-email" /></i>contacto</p>
                <p><i><img src={github} alt="icono-github" /></i>Git Hub</p>
            </div>
            <div className="card">
                <h2>Pablo</h2>
            </div>
            <div className="card">
                <h2>Juan Esteban</h2>
            </div>
        </article>
    </footer>
  )
}

export default Footer