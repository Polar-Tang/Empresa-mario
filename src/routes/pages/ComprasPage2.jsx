import { useContext } from "react"
import {Card} from '../componentes/ComprasPage'
import ProductosContext from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

    const { reloj } = useContext( ProductosContext )

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      agregarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
   

  return (
    <>
    <hr />

    {reloj.map(reloj => (
        <Card 
        key={reloj.id}
        imagen={reloj.image}
        titulo={reloj.title}
        descripcion={reloj.modelo}
        precio={reloj.precio}
        handleAgregar={() => handleAgregar(reloj)}
        handleQuitar={() => handleQuitar(reloj.id)}
        >

        </Card>
    ))}
    
    </>
  )
}

export default ComprasPage