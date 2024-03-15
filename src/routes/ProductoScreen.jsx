import React, { useState } from 'react';
import WhatsappButton from './WhatsappButton';
import Footer from './Footer2';
import NavBar from './componentes/NavBar';
import './stylo.css'
//   const ContactScreen = () => {
//     let listadoDeRepuestos = useState([
//         {
//              id": 1,
//             "marca": "Zeppelin",
//             "modelo": "lz126",
//             "imagenUrl": "/img/auto1.jpeg"

//         },
//         {
//             "id": 2,
//             "marca": "Zeppelin",
//             "modelo": "lz126",
//             "imagenUrl": "/img/auto2.jpeg"
//         },
//         {
//             "id": 3,
//             "marca": "Zeppelin",
//             "modelo": "lz126",
//             "imagenUrl": "./img/auto3.jpeg"
//         },
//         {
//             "id": 4,
//             "marca": "Zeppelin",
//             "modelo": "lz126",
//             "imagenUrl": "./img/auto4.jpeg"
//         },
//         {
//           "id": 5,
//           "marca": "Zeppelin",
//           "modelo": "lz126",
//           "imagenUrl": "./img/auto5.jpeg"
//       },
//       {
//         "id":6,
//         "marca": "Zeppelin",
//         "modelo": "lz126",
//         "imagenUrl": "./img/auto6.jpeg"
//     },
//     {
//       "id": 7,
//       "marca": "Zeppelin",
//       "modelo": "lz126",
//       "imagenUrl": "./img/auto7.jpeg"
//   },
//   {
//     "id": 8,
//     "marca": "Zeppelin",
//     "modelo": "lz126",
//     "imagenUrl": "./img/auto8.jpeg"
// },
// {
//   "id": 9,
//   "marca": "Zeppelin",
//   "modelo": "lz126",
//   "imagenUrl": "./img/auto9.jpeg"
// },
// {
//   "id": 10,
//   "marca": "Zeppelin",
//   "modelo": "lz126",
//   "imagenUrl": "./img/auto10.jpeg"
// },
// {
//   "id": 11,
//   "marca": "Zeppelin",
//   "modelo": "lz126",
//   "imagenUrl": "./img/auto11.jpeg"
// },
// {
//   "id": 12,
//   "marca": "Zeppelin",
//   "modelo": "lz126",
//   "imagenUrl": "./img/auto12.jpeg"
// },
//     ])

//   return (
//     <div>
//        <NavBar></NavBar>
//       <Producto 
//         key={reloj.id}
//         src={reloj.imagenUrl}
//         alt= {reloj.marca + ' '+ reloj.modelo}
//         nombre={'Contactanos'}
//         precio={'Precio: $'+reloj.precio}
//         detalles={'Marca:'+reloj.marca+' Modelo:'+reloj.modelo}
//         onClick={() => verMas()}
//       ></Producto>
//       <WhatsappButton></WhatsappButton>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default ContactScreen;
const Productos = () => {
    const [reloj, setReloj] = useState([
      {
                    id: 1,
                    marca: "Zeppelin",
                    modelo: "lz126",
                    imagenUrl: "/assets/reloj1.jpg"
        
                },
                {
                     id : 2,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/reloj2.jpg"
                },
                {
                     id : 3,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/assets/reloj3.jpg"
                },
                {
                     id : 4,
                     marca : "Zeppelin",
                     modelo : "lz126",
                     imagenUrl : "/assets/reloj4.jpg"
                },
                {
                   id : 5,
                   marca : "Zeppelin",
                   modelo : "lz126",
                   imagenUrl : "/assets/reloj5.jpg"
              },
              {
                 id :6,
                 marca : "Zeppelin",
                 modelo : "lz126",
                 imagenUrl : "/assets/reloj6.jpg"
            },
            {
               id : 7,
               marca : "Zeppelin",
               modelo : "lz126",
               imagenUrl : "/assets/reloj7.jpg"
          },
          {
             id : 8,
             marca : "Zeppelin",
             modelo : "lz126",
             imagenUrl : "/assets/reloj8.jpg"
        },
        {
           id : 9,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/assets/reloj9.jpg"
        },
        {
           id : 10,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/assets/reloj10.jpg"
        },
        {
           id : 11,
           marca : "Zeppelin",
           modelo : "lz126",
           description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reprehenderit fugiat dolorem cum sequi iste ipsam ratione obcaecati voluptates! Earum incidunt ea molestias asperiores necessitatibus. Vero quod necessitatibus perferendis saepe?',
           imagenUrl : "/assets/reloj11.jpg"
        },
        {
           id : 12,
           marca : "Zeppelin",
           modelo : "lz126",
           imagenUrl : "/assets/reloj12.jpg"
        },
            ])

// atomic design es un enfoque de diseño de las interfaces de usuario la cual se basa en la creacion y organización de componentes reutilizables
    return (
<article>
      <h2 id="productos" className='d-flex col-md-12 justify-content-center'>Nuestros productos</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {reloj.map((reloj) => {
          return (
            <main key={reloj.id} className="card m-2" style={{ width: '18rem' }}>
              <img className='card-img-top' src={reloj.imagenUrl} alt={`${reloj.marca} ${reloj.modelo}`}></img>
              <div className='card-body'>
                <h4 className='card-title'>{reloj.marca}</h4>
                <p className='card-text'>{reloj.modelo}</p>
                <button className='button col-12'>Ver más</button>
              </div>
            </main>
          );
        })}
      </div>
    </article>
    );
}

export default Productos