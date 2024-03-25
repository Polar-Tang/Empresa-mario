import { useState, useContext } from "react"
import { ProductosContext } from "../context/ProductosContext";

export const Card = ({ handleAgregar, handleQuitar, handleAumentar, handleDisminuir, id }) => {

  const { reloj } = useContext(ProductosContext);


    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <>
        {reloj.map((reloj) => (
            <main key={reloj.id} className="card m-2" style={{ width: "18rem" }}>    
            <img 
             className="card-img-top"
             src={reloj.imagenUrl}
             alt={`${reloj.marca} ${reloj.modelo}`} />
            <div className="card-body">
                <h3 className="card-title">{reloj.title}, {reloj.marca}</h3>
                <p className="tarjeta-descripcion">{reloj.description}, modelo {reloj.modelo} </p>
                <p className="float-end">{reloj.precio}$</p>
                <div>

                {added
                    ? <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}
                    >
                        Quitar del Carrito
                    </button>
                    : <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        Agregar Carrito
                    </button>
                }
                </div>
            </div>
            </main>
         ))}
          </>
    )
}
export default  Card;