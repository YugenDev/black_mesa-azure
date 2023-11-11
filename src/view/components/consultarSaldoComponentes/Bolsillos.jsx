import "./Bolsillos.css"

var bolsillosPrueba1 =[
    {
        nombre: "Emergencias",
        meta: 500000,
        deposito: 10000,
        logo:"hospital.png"
    },
]
var bolsillosPrueba2 =[
    {
        nombre: "Vacaciones",
        meta: 2500000,
        deposito: 500000,
        logo:"vuelo.png"
    },
    {
        nombre: "Inversión",
        meta: 1000000,
        deposito: 100000,
        logo:"beneficio.png"
    },
    {
        nombre: "Regalos",
        meta: 200000,
        deposito: 50000,
        logo:"caja-de-regalo.png"
    },
    {
        nombre: "Semestre",
        meta: 3000000,
        deposito: 2000000,
        logo:"educacion.png"
    },
]

function Bolsillos(){
    return(
        <section className="container">
            Bolsillos
        </section>
    )
}

export default Bolsillos