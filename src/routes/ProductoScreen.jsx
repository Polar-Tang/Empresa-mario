import React, { useState } from 'react';
import WhatsappButton from './WhatsappButton';
import Footer from './Footer2';
import './styles.css'
import Banner from './Banner';

const Productos = () => {
    const [reloj, setReloj] = useState([
      {
                    id: 1,
                    marca: "Zeppelin",
                    modelo: "lz126",
                    imagenUrl: "/public/img/reloj1.jpg"
        
                },
                {
                     id : 2,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/public/img/reloj2.jpg"
                },
                {
                     id : 3,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/public/img/reloj3.jpg"
                },
                {
                     id : 4,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/public/img/reloj4.jpg"
                },
                {
                   id : 5,
                   marca : "Zeppelin",
                   modelo : "lz126",
                   imagenUrl : "/public/img/reloj5.jpg"
              },
              {
                 id :6,
                 marca : "Zeppelin",
                 modelo : "lz126",
                 imagenUrl : "/public/img/reloj6.jpg"
            },
            {
               id : 7,
               marca : "Zeppelin",
               modelo : "lz126",
               imagenUrl : "/public/img/reloj7.jpg"
          },
          {
             id : 8,
             marca : "Zeppelin",
             modelo : "lz126",
             imagenUrl : "/public/img/reloj8.jpg"
        },
        {
           id : 9,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/public/img/reloj9.jpg"
        },
        {
           id : 10,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/public/img/reloj10.jpg"
        },
        {
           id : 11,
           marca : "Zeppelin",
           modelo : "lz126",
           description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reprehenderit fugiat dolorem cum sequi iste ipsam ratione obcaecati voluptates! Earum incidunt ea molestias asperiores necessitatibus. Vero quod necessitatibus perferendis saepe?',
           imagenUrl : "/public/img/reloj11.jpg"
        },
        {
           id : 12,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/public/img/reloj12.jpg"
        },
            ])

            // const AgregarCarrito = () => {
            //    const { reloj } = useContext(ProductosContext);
            //    const { agregarCompra } = useContext(CarritoContext);
               
            //    const handleAgregar = () => {
            //        agregarCompra(reloj);
            //    }};

   
            const clickAgregar = () => {
               handleAgregar()
               setAdded(true)
           }


// atomic design es un enfoque de diseño de las interfaces de usuario la cual se basa en la creacion y organización de componentes reutilizables
    return (
<article >
       <Banner></Banner>
         <h2 id="productos" className='d-flex col-md-12 justify-content-center container'>Nuestros productos</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {reloj.map((reloj) => {
          return (
            <main key={reloj.id} className="card m-2" style={{ width: '18rem' }}>
              <img className='card-img-top' src={reloj.imagenUrl} alt={`${reloj.marca} ${reloj.modelo}`}></img>
              <div className='card-body'>
                <h4 className='card-title'>{reloj.marca}</h4>
                <p className='card-text'>{reloj.modelo}</p>
                <button
                        type="button"
                        className="boton-agregar col-12"
                        onClick={clickAgregar}
                    >
                        Agregar Carrito
                    </button>
              </div>
            </main>
          );
        })}
      </div>
      <WhatsappButton></WhatsappButton>
      <Footer></Footer>
   </article>
    );
}

export default Productos