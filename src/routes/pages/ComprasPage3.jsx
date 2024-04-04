import { useContext } from "react"
import ProductosContext from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"
import { Card } from "../componentes/Card"

export const ComprasPage = ( ) => {

    const { reloj, relojes } = useContext( ProductosContext )

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
   

  return (
    <>
    {relojes.map(reloj => (

    <Card  
    marca={reloj.marca} 
     id={reloj.id}
      modelo={reloj.modelo} 
      imagenUrl={reloj.imagenUrl} 
      description={reloj.description}
      title={reloj.title}
      precio={reloj.precio}
       handleAgregar={() => handleAgregar(reloj)}
       handleQuitar={() => handleQuitar(reloj.id)}
    ></Card>
    ))}

    </>
  )
}