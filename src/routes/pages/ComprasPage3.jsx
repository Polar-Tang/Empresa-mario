import { useContext } from "react"
import ProductosContext from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"
import { Card } from "../componentes/Card"

export const ComprasPage = ( ) => {

    const { reloj } = useContext( ProductosContext )

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
    handleAgregar={handleAgregar}
    handleQuitar= {handleQuitar} />
    </>
  )
}