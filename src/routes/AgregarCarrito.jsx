import { useContext } from "react";
import './ProductoScreen'; // Asegúrate de que este import se encuentre correctamente, o si no se necesita, puedes eliminarlo.
import { ProductosContext } from "./ProductosContext";

export const AgregarCarrito = () => {
    const { reloj } = useContext(ProductosContext);
    const { agregarCompra } = useContext(CarritoContext);

    const handleAgregar = () => {
        agregarCompra(reloj);
    };
    return (
        <div>
            <button className='button col-12' 
            onClick={handleAgregar}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default AgregarCarrito;
