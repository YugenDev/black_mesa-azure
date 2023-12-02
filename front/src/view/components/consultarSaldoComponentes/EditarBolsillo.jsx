import React from 'react'
import "./EditarBolsillo.css"

function EditarBolsillo() {
    return (
        <div className='contenedor-editar'>
            <h2>
                Editar Bolsillo
            </h2>
            <div className="contenedor-forms">
                <form className='contenedor-inputs-editar'>
                    <h4>Cargar dinero</h4>
                    <input type="number" placeholder='Cantidad' />
                    <input type="submit" value={"confirmar"} />
                </form>
                <form className='contenedor-inputs-editar'>
                    <h4>Descargar dinero</h4>
                    <input type="number" placeholder='Cantidad' />
                    <input type="submit" value={"confirmar"} />
                </form>
            </div>
            <button className='boton-eliminar-bolsillo'>ELIMINAR BOLSILLO</button>
        </div>
    )
}

export default EditarBolsillo