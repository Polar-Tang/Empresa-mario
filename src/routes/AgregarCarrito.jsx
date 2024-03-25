import { useContext, useState } from "react";
import { CarritoContext } from "./context/CarritoContext";

export const AgregarCarrito = ( ) => {
    
    const [added, setAdded] = useState(false)
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)



    
    const clickAgregar = (compra) => {
        agregarCompra(compra)
        setAdded(true)
    }
    const clickQuitar = (id) => {
        eliminarCompra(id)
        setAdded(false)
    }

    return (
         <div>
        { added 
            ?<button  className="col-12 button boton-quitar" 
            onClick={clickQuitar}
            type="button"
            >
                Quitar del carrito
            </button>
           : <button className='button boton-agregar col-12' 
            onClick={clickAgregar}
            type="button"
            >
                Agregar al carrito
             </button>
        }
        </div>
    );
};

export default AgregarCarrito;
