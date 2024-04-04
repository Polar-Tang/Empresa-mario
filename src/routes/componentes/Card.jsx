import { useState, useContext, useEffect } from "react"
import { ProductosContext } from "../context/ProductosContext";
// import { CarritoContext } from "../context/CarritoContext";

export const Card = ({ id, marca ,handleAgregar, handleQuitar, modelo, imagenUrl, description, title, precio }) => {

  const { reloj } = useContext(ProductosContext);

//   const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
    const [added, setAdded] = useState(false)

    useEffect(() => {
        const storedAdded = localStorage.getItem('added');
        if (storedAdded) {
            setAdded(JSON.parse(storedAdded));
        }
    }, []);

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false , JSON.stringify(false))
    }

    return (
        <>
            <main key={id} className="card m-2" style={{ width: "18rem" }}>    
            <img 
             className="card-img-top"
             src={imagenUrl}
             alt={`un ${title} ${modelo}, ${marca}`} />
            <div className="card-body">
                <h3 className="card-title">{title}, {marca}</h3>
                <p className="tarjeta-descripcion">{description}, modelo {modelo} </p>
                <p className="float-end">{precio}$</p>
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
          </>
    )
}
export default  Card;