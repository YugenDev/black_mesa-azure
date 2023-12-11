import BolsilloCard from "./BolsilloCard";
import "./Bolsillos.css";

function Bolsillos({ cuentaActual, setActualizar }) {
  return (
    <section className="container">
      {cuentaActual?.bolsillos.map((b) => {
        if (!b.id == 0)
          return (
            <BolsilloCard
              setActualizar={setActualizar}
              cuentaActual={cuentaActual}
              id={b.id}
              nombre={b.nombre}
              meta={b.meta}
              deposito={b.deposito}
              logo={b.imagen}
              key={b.nombre}
            />
          );
      })}
      {cuentaActual?.bolsillos.length <= 6 && (
        <BolsilloCard
          setActualizar={setActualizar}
          cuentaActual={cuentaActual}
          nombre={"Nuevo bolsillo"}
          meta={"meta"}
          deposito={"deposito"}
          logo={"agregarImg"}
        />
      )}
    </section>
  );
}

export default Bolsillos;
