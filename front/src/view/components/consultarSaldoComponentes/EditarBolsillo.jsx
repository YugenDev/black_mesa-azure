import React from 'react'

function EditarBolsillo () {
  return (
    <div>
        <h2>
            EditarBolsillo
        </h2>
        <form>
            <h4>Cargar dinero:</h4>
            <label>Cantidad: 
                <input type="number" />
            </label>
            <input type="submit"  value={"confirmar"}/>
        </form>
        <form>
            <h4>Descargar dinero:</h4>
            <label>Cantidad: 
                <input type="number" />
            </label>
            <input type="submit"  value={"confirmar"}/>
        </form>
        <button>ELIMINAR BOLSILLO</button>
    </div>
  )
}

export default EditarBolsillo