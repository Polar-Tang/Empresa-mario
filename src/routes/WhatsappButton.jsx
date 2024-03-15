import React from 'react';
import logoW from '../logo.svg'


function ButtonExample() {
  const phoneNumber = '+5491123936556'; // Reemplaza con el número de teléfono deseado
  const message = 'Hola, estoy interesado en tus servicios.'; // Mensaje predeterminado

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button className='buttton btn varyan' variant="primary">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img id="miImagen" className='imgW' src={logoW} alt="WhatsApp Icon" />
      </a>
    </button>
  );
}

export default ButtonExample;

