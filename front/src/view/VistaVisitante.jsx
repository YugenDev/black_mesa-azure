import Logo from "./components/headerComponentes/Logo"
import Portada from "./components/vistaVisitanteComponents/Portada"
import Servicios from "./components/vistaVisitanteComponents/Servicios"
import Header from "./sections/Header"
import "./VistaVisitante.css"


function VistaVisitante(){
    return(
        <section className="contenedor-vista-visitante">
            <Portada />
            <Servicios />
        </section>
    )
}

export default VistaVisitante