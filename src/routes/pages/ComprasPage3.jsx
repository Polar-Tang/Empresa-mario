import { useContext } from "react"
import ProductosContext from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"
import { Card } from "../componentes/Card"

export const ComprasPage = ( ) => {

    const { relojes } = useContext( ProductosContext )

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      // const compra = {
      //   ...reloj,
      //   cantidad: 1,
      // };
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
   

  return (
    <>
    <Card  
       key={reloj.id}
       imagen={reloj.image}
       titulo={reloj.title}
       descripcion={reloj.description}
       precio={reloj.price  }
       handleAgregar={() => handleAgregar(reloj)}
       handleQuitar={() => handleQuitar(reloj.id)}
    // handleAgregar={handleAgregar}
    // handleQuitar= {handleQuitar} 
    />
    </>
  )
}