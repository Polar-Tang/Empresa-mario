import React, { useContext } from 'react';
import WhatsappButton from './WhatsappButton';
import Footer from './Footer2';
import './styles.css'
import Banner from './Banner';
import { ProductosContext } from './context/ProductosContext';
import { CarritoContext } from './context/CarritoContext';
import { ComprasPage } from './pages/ComprasPage3';

const Productos = ( ) => {
  const { reloj } = useContext( ProductosContext );

// atomic design es un enfoque de diseño de las interfaces de usuario la cual se basa en la creacion y organización de componentes reutilizables
    return (
<article >
       <Banner></Banner>
         <h2 id="productos" className='d-flex col-md-12 justify-content-center container'>Nuestros productos</h2>
      <div className="d-flex flex-wrap justify-content-center">
       <ComprasPage></ComprasPage>
      </div>
      <WhatsappButton></WhatsappButton>
      <Footer></Footer>
   </article>
    );
}

export default Productos