import "./BolsilloCard.css"

function BolsilloCard({ nombre, meta, deposito, logo }) {
    const style = {
        // width
    }

  return (
    <article className="card-container">
      <img src={logo} alt={"bolsiloImg"} className="bolsillo-logo" />
      <h4 className="bolsillo-nombre">{nombre}</h4>
      <p className="bolsillo-saldo">{!isNaN(deposito)?`Saldo: $${new Intl.NumberFormat('es-ES').format(deposito)}`:"Guarda tu dinero"}</p>
      <div className="porcentaje-contenedor">
        <span className="bolsillo-porcentaje" style={{width : nombre!="Nuevo bolsillo"?(deposito / meta)*100+"%":"100%"}}>
          {nombre!="Nuevo bolsillo"?`${Math.round((deposito / meta) * 100, 0)}%`:"Revisa tu avance"}
        </span>
      </div>
    </article>
  );
}

export default BolsilloCard;
