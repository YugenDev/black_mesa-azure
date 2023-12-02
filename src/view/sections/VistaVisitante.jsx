import Logo from "../components/headerComponentes/Logo"
import Footer from "../components/vistaVisitanteComponents/Footer"
import Portada from "../components/vistaVisitanteComponents/Portada"
import Servicios from "../components/vistaVisitanteComponents/Servicios"
import Header from "./Header"
import "./VistaVisitante.css"
function VistaVisitante(){
    return(
        <section className="contenedor-vista-visitante">
            <Header />
            <Portada />
            <Servicios />
            <Footer />
        </section>
    )
}

export default VistaVisitante