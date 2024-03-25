import { useContext, useState } from "react"
// import { CarritoContext } from "../context/CarritoContext"
import ProductosContext from "../context/ProductoContext"


export const ComprasPage = ( ) => {

  const { reloj } = useContext( ProductosContext )

  // const { agregarCompra, eliminarCompra } = useContext(CarritoContext)


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
    <hr />

    {reloj.map((reloj) => {
          return (
            <main key={reloj.id} className="card m-2" style={{ width: '18rem' }}>
              <img className='card-img-top' src={reloj.imagenUrl} alt={`${reloj.marca} ${reloj.modelo}`}></img>
              <div className='card-body'>
                <h4 className='card-title'>{reloj.marca}</h4>
                <p className='card-text'>{reloj.modelo}</p>
                <hr></hr>
                <p className='float-end'>{reloj.precio}$</p>
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
              </div>
            </main>
          );
        })}    
    </>
  )
}
import { useContext, useState } from "react";
import ProductosContext from "../context/ProductosContext";

export const Card = ( handleAgregar, handleQuitar) => {
  const { reloj } = useContext(ProductosContext);
  const [added, setAdded] = useState(false)

  const clickAgregar = () => {
    handleAgregar()
    setAdded(true)
  };

  const clickQuitar = () => {
    handleQuitar()
    setAdded(false)
  };

  return (
    <>
      {reloj.map((reloj) => (
        <main key={reloj.id} className="card m-2" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={reloj.imagenUrl}
            alt={`${reloj.marca} ${reloj.modelo}`}
          ></img>
          <div className="card-body">
            <h4 className="card-title">{reloj.marca}</h4>
            <p className="card-text">{reloj.modelo}</p>
            <hr></hr>
            <p className="float-end">{reloj.precio}$</p>
            <div>
              {added 
              ? 
                (<button
                  className="col-12 button boton-quitar"
                  // onClick={( ) => clickQuitar()}
                  onClick={clickQuitar}
                  type="button"
                >
                  Quitar del carrito
                </button>)
              : 
                (<button
                  className="button boton-agregar col-12"
                  // onClick={() => clickAgregar()}
                  onClick={clickAgregar}
                  type="button"
                >
                  Agregar al carrito
                </button>)
              }
            </div>
          </div>
        </main>
      ))}
    </>
  );
};
export default Card