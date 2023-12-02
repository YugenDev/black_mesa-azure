import Portada from "./components/vistaVisitanteComponents/Portada"
import Servicios from "./components/vistaVisitanteComponents/Servicios"
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