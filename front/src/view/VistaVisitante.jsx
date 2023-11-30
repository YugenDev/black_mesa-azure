import Portada from "./components/vistaVisitanteComponents/Portada"
import RegistroBancoFormulario from "./components/vistaVisitanteComponents/Registro"
import Servicios from "./components/vistaVisitanteComponents/Servicios"
import "./VistaVisitante.css"


function VistaVisitante(){
    return(
        <section className="contenedor-vista-visitante">
            <Portada />
            <Servicios />
            <RegistroBancoFormulario />
        </section>
    )
}

export default VistaVisitante