// import { useReducer } from "react";
// import { CarritoContext } from  "./CarritoContext";

// const initialState = []

// export const CarritoProvider = ({ children }) => {
//     const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

//     const comprasReducer = (state = initialState, action = {}) => {
//         switch (action.type){
//             case "[CARRITO] Agregar compra":
//                 return [...state, action.payload]
//              case "[CARRITO] Aumentar Cantidad compra":
//                 return state.map(reloj => {
//                     if (reloj.id === action.payload) {
//                         return {...reloj, cantidad: reloj.cantidad + 1};
//                     }
//                     return  reloj;
//                 });                
//             case "[CARRITO] Disminuir cantidad Cantidad":
//                 return state.map(reloj => {
//                     if (reloj.id === action.payload && reloj.cantidad > 1) {
//                         return {...reloj, cantidad: reloj.cantidad - 1};
//                     }
//                     return  reloj;
//                 }) 
//             case "[CARRITO] Eliminar compra":
//                 return state.filter( compra => compra.id !== action.payload)
//             default: 
//             return state
//         }
//     };

//     const CarritoProvider = ({ children }) => {

//         const agregarCompra = (compra) => {
//             compra.cantidad = 1
//             const action = {
//                 type: '[CARRITO] Agregar compra',
//                 payload: compra
//             }
//             dispatch(action)
//         }
//         const aumentarCantidad = (id) => {
//             const action = {
//                 type: '[CARRITO] Aumentar Cantidad compra',
//                 payload: id
//             }
//             dispatch(action)
//         }
//         const disminuirCantidad = (id) => {
//             const action = {
//                 type: '[CARRITO] Disminuir cantidad Cantidad',
//                 payload: id
//             }
//             dispatch(action)
//         }
//         const eliminarCompra = (id) => {
//             const action = {
//                 type: '[CARRITO] Eliminar compra ',
//                 payload: id
//             }
//             dispatch(action)
//         }
//     }



//     return(
//         <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
//             {children}
//         </CarritoContext.Provider>
//     )
// }
// export default CarritoProvider

// import { useReducer } from 'react'
// import { CarritoContext } from './CarritoContext'

// const initialState = []

// export const CarritoProvider = ({ children }) => {

//     const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

//     const comprasReducer = (state = initialState, action = {}) => {
//         switch (action.type) {
//             case '[CARRITO] Agregar Compra':
//                 return [...state, action.payload]
//             case '[CARRITO] Aumentar Cantidad Compra': 
//                 return state.map(reloj => {
//                     const cant = reloj.cantidad + 1
//                     if(reloj.id === action.payload) return {...reloj, cantidad: cant}
//                     return reloj
//                 })
//             case '[CARRITO] Disminuir Cantidad Compra': 
//             return state.map(reloj => {
//                 const cant = reloj.cantidad -1
//                 if(reloj.id === action.payload && reloj.cantidad > 1) return {...reloj, cantidad: cant}
//                 return reloj
//             })
//             case '[CARRITO] Eliminar Compra':
//                 return state.filter(compra => compra.id !== action.payload)
//             default:
//                 return state
//         }
//     }


//     const agregarCompra = (compra) => {
//         compra.cantidad = 1
//         const action = {
//             type: '[CARRITO] Agregar Compra',
//             payload: compra
//         }
//         dispatch(action)

//     }
//     const aumentarCantidad = (id) => {
//         const action = {
//             type: '[CARRITO] Aumentar Cantidad Compra',
//             payload: id
//         }
//         dispatch(action)

//     }
//     const disminuirCantidad = (id) => {
//         const action = {
//             type: '[CARRITO] Disminuir Cantidad Compra',
//             payload: id
//         }
//         dispatch(action)

//     }
//     const eliminarCompra = (id) => {
//         const action = {
//             type: '[CARRITO] Eliminar Compra',
//             payload: id
//         }
//         dispatch(action)

//     }





//     return (

//         <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
//             {children}
//         </CarritoContext.Provider>
//     )
// }
// import { useReducer } from 'react'
// import { CarritoContext } from './CarritoContext'
// const initialState = [];

// // Definir el proveedor
// export const CarritoProvider = ({ children }) => {

//     const comprasReducer = (state = initialState, action = {}) => {
//         switch (action.type) {
//             case '[CARRITO] Agregar Compra':
//                 return [...state, action.payload];
//             case '[CARRITO] Aumentar Cantidad Compra': 
//                 return state.map(reloj => {
//                     const cant = reloj.cantidad + 1;
//                     if(reloj.id === action.payload) return {...reloj, cantidad: cant};
//                     return reloj;
//                 });
//             case '[CARRITO] Disminuir Cantidad Compra': 
//                 return state.map(reloj => {
//                     const cant = reloj.cantidad - 1;
//                     if(reloj.id === action.payload && reloj.cantidad > 1) return {...reloj, cantidad: cant};
//                     return reloj;
//                 });
//             case '[CARRITO] Eliminar Compra':
//                 return state.filter(compra => compra.id !== action.payload);
//             default:
//                 return state;
//         }
//     };

//     // const agregarCompra = (compra) => {
//     //     console.log(compra);
//     //     compra.cantidad = 1;
//     //     const action = {
//     //         type: '[CARRITO] Agregar Compra',
//     //         payload: compra,
//     //     };
//     //     dispatch(action);
//     // };

//     const agregarCompra = (compra) => {
//         const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)
//         compra.cantidad = 1
//         const action = {
//             type: '[CARRITO] Agregar Compra',
//             payload: compra
//         }
//         dispatch(action)

//     const aumentarCantidad = (id) => {
//         const action = {
//             type: '[CARRITO] Aumentar Cantidad Compra',
//             payload: id
//         };
//         dispatch(action);
//     };

//     const disminuirCantidad = (id) => {
//         const action = {
//             type: '[CARRITO] Disminuir Cantidad Compra',
//             payload: id
//         };
//         dispatch(action);
//     };

//     const eliminarCompra = (id) => {
//         const action = {
//             type: '[CARRITO] Eliminar Compra',
//             payload: id
//         }
//         dispatch(action)

//     }

//     return (

//         <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
//             {children}
//         </CarritoContext.Provider>
//     )
// }
// }
import { useContext, useReducer } from 'react'
import { CarritoContext } from './CarritoContext'
import ProductosContext from './ProductosContext';

const initialState = []

export const CarritoProvider = ({ children }) => {

//   const { reloj } = useContext(ProductosContext);


//     let cantidad = reloj.reduce((total, reloj) => {
//         return total + reloj.cantidad;
//       }, 0);
      

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar Compra':
            return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad Compra': 
            return state.map(item => {
                const cant = item.cantidad + 1
                if(item.id === action.payload) return {...item, cantidad: cant}
                return item
            })
            case '[CARRITO] Disminuir Cantidad Compra': 
            return state.map(item => {
                const cant = item.cantidad -1
            if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
            return item
        })
        case '[CARRITO] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload)
        default:
            return state
    }
};
const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    
    const agregarCompra = (compra) => {
        compra.cantidad = 1
        console.log(compra)
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)

    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        }
        dispatch(action)

    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
        }
        dispatch(action)

    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)

    }





    return (

        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}