import React, { useState} from 'react'
import ProductosContext from './ProductosContext';


export const ProductosProvider = ({children}) => {
    const [relojes, setRelojes] = useState([
        {
                      id: 1,
                      marca: "Zeppelin",
                      title: "reloj",
                      modelo: "lz126",
                      imagenUrl: "/public/img/reloj1.jpg",
                      precio: 240
                  },
                  {
                       id : 2,
                       marca : "IWC. Breitling.",
                       modelo : "m15",
                       imagenUrl : "/public/img/reloj2.jpg",
                       precio: 320
                  },
                  {
                       id : 3,
                       marca : "Zeppelin",
                       modelo : "lz126",
                       title: "reloj",
                       imagenUrl : "/public/img/reloj3.jpg",
                       precio: 240

                  },
                  {
                       id : 4,
                       marca : "Zeppelin",
                       title: "reloj",
                       modelo : "lz126",
                       imagenUrl : "/public/img/reloj4.jpg",
                       precio: 240

                  },
                  {
                     id : 5,
                     marca : "Zeppelin",
                     title: "reloj",
                     modelo : "lz126",
                     imagenUrl : "/public/img/reloj5.jpg",
                     precio: 240

                },
                {
                   id :6,
                   title: "reloj",
                   marca : "Zeppelin",
                   modelo : "lz126",
                   imagenUrl : "/public/img/reloj6.jpg",
                   precio: 240

              },
              {
                 id : 7,
                 marca : "Zeppelin",
                 title: "reloj",
                 modelo : "lz126",
                 imagenUrl : "/public/img/reloj7.jpg",
                 precio: 240

            },
            {
               id : 8,
               marca : "Zeppelin",
             title: "reloj",
               modelo : "lz126",
               imagenUrl : "/public/img/reloj8.jpg",
               precio: 240

          },
          {
             id : 9,
             title: "reloj",
             marca : "Zeppelin",
             modelo : "lz126",
             imagenUrl : "/public/img/reloj9.jpg",
             precio: 240

          },
          {
             id : 10,
             marca : "Zeppelin",
             title: "reloj",
             modelo : "lz126",
             imagenUrl : "/public/img/reloj10.jpg",
             precio: 240

          },
          {
             id : 11,
             marca : "Zeppelin",
             title: "reloj",
             modelo : "lz126",
             description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reprehenderit fugiat dolorem cum sequi iste ipsam ratione obcaecati voluptates! Earum incidunt ea molestias asperiores necessitatibus. Vero quod necessitatibus perferendis saepe?',
             imagenUrl : "/public/img/reloj11.jpg",
             precio: 240

          },
          {
             id : 12,
             marca : "Zeppelin",
             title: "reloj",
             modelo : "lz126",
             imagenUrl : "/public/img/reloj12.jpg",
             precio: 240

          },
              ])

  return (
    <ProductosContext.Provider value={{relojes}} > 
        {children}
    </ProductosContext.Provider>
    )
}

export default ProductosProvider;