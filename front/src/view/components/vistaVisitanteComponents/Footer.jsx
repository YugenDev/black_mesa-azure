import "./Footer.css"
import github from "./imgsVistaVisitante/github.png"
import rostro from "./imgsVistaVisitante/rostro.jpg"
import x from "./imgsVistaVisitante/x.png"
import gmail from "./imgsVistaVisitante/gmail.png"


function Footer() {
    return (
        <footer>
            <section className="sobre-nosotros">
                <article className="card">
                    <div className="contenedor-foto">
                        <img src={rostro} alt="foto" />
                    </div>
                    <div className="contenedor-nombre">
                        <h2>Juan Pablo Berrio</h2>
                        <p>fullstack Developer</p>
                    </div>
                    <div className="contenedor-logos">
                        <img src={github} alt="logo-github" />
                        <img src={x} alt="logo-x" />
                        <img src={gmail} alt="logo-gmail" />
                    </div>
                    <div className="contenedor-botones">
                        <button>contacto</button>
                        <button>portafolio</button>
                    </div>
                </article>
                <article className="card">
                    <div className="contenedor-foto">
                        <img src={rostro} alt="foto" />
                    </div>
                    <div className="contenedor-nombre">
                        <h2>Andres Felipe Valencia</h2>
                        <p>fullstack Developer</p>
                    </div>
                    <div className="contenedor-logos">
                        <img src={github} alt="logo-github" />
                        <img src={x} alt="logo-x" />
                        <img src={gmail} alt="logo-gmail" />
                    </div>
                    <div className="contenedor-botones">
                        <button>contacto</button>
                        <button>portafolio</button>
                    </div>
                </article>
                <article className="card">
                    <div className="contenedor-foto">
                        <img src={rostro} alt="foto" />
                    </div>
                    <div className="contenedor-nombre">
                        <h2>El Yugen</h2>
                        <p>fullstack Developer</p>
                    </div>
                    <div className="contenedor-logos">
                        <img src={github} alt="logo-github" />
                        <img src={x} alt="logo-x" />
                        <img src={gmail} alt="logo-gmail" />
                    </div>
                    <div className="contenedor-botones">
                        <button>contacto</button>
                        <button>portafolio</button>
                    </div>
                </article>
            </section>
            <section className="contenedor-contacto">
                <article className="formulario-contacto">
                    <h2>Contactanos</h2>
                    <p>Ingresa tus datos para ponernos en contacto contigo</p>
                    <input type="text" placeholder="Nombres" />
                    <input type="text" placeholder="Apellidos" />
                    <input type="email" name="" id="" placeholder="correo" />
                    <input type="submit" value="enviar" />
                </article>
                <article className="contenedor-mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.14196195728!2d-75.56530632516504!3d6.245015526337201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442859d833cfa3%3A0xa3fca5c91547777f!2sCESDE!5e0!3m2!1ses!2sco!4v1700793170713!5m2!1ses!2sco">
                    </iframe>
                </article>
            </section>
        </footer>
    )
}

export default Footer