import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext';


export const CarritoPage = () => {
  const {listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, reloj) => total + reloj.precio * reloj.cantidad, 0 ).toFixed(2)
}

  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope='col'>Cantidad</th>
      <th scope="col">precio</th>
      <th scope='col'> Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      listaCompras.map(reloj => (
        <tr key={reloj.id}>
        <th> {reloj.title}</th>
        <td> {reloj.marca} </td>
        <td> {reloj.modelo} </td>
        <td>
        <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => disminuirCantidad(reloj.id)}
                                    >-</button>
                                    <button className="btn btn-primary">{reloj.cantidad}</button>
                                    <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => aumentarCantidad(reloj.id)}
                                    >+</button>
        </td>
        <td>{ reloj.precio }</td>
        <td> <button
        type='button'
        className='btn btn-danger'
        onClick={()=>eliminarCompra(reloj.id)}>
          Eliminar
          </button> </td>
      </tr>
      ))
    }
   
   <th><b>TOTAL: </b></th>
      <td></td>
      <td></td>
      <td>${calcularTotal()}</td>

  </tbody>
</table>

<div className='gap-2 d-grid'>
    <button type="submit" class="btn btn-primary"
    disabled={listaCompras<1} >Comprar</button>
</div>
<br/>
<br/>

<br/>

<br/>

<br/>

<br/>
<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

    </div>
  )
}
export default  CarritoPage;