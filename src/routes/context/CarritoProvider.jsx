import { useReducer } from "react";
import { CarritoContext } from  "./CarritoContext";

const initialState = [];

// Primero, define la función del reductor
const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[CARRITO] Agregar compra":
            return [...state, action.payload];
        case "[CARRITO] Aumentar Cantidad compra":
            return state.map(reloj => {
                if (reloj.id === action.payload) {
                    return {...reloj, cantidad: reloj.cantidad + 1};
                }
                return reloj;
            });
        case "[CARRITO] Disminuir cantidad Cantidad":
            return state.map(reloj => {
                if (reloj.id === action.payload && reloj.cantidad > 1) {
                    return {...reloj, cantidad: reloj.cantidad - 1};
                }
                return reloj;
            });
        case "[CARRITO] Eliminar compra":
            return state.filter(compra => compra.id !== action.payload);
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    // Utiliza el reductor aquí
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        compra.cantidad = 1;
        const action = {
            type: '[CARRITO] Agregar compra',
            payload: compra
        };
        dispatch(action);
    };

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad compra',
            payload: id
        };
        dispatch(action);
    };

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir cantidad Cantidad',
            payload: id
        };
        dispatch(action);
    };

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar compra',
            payload: id
        };
        dispatch(action);
    };

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    );
};
