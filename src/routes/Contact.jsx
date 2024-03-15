import React from 'react'

export const Contact = () => {
  return (
    <div>
        <div className="activedd container">
      <h2 className="active3">Contanos tu problema</h2>
      <label htmlFor="nombre">
        <p> Nombre:</p>
      </label>
      <input
        style={{ gridArea: 'nombre' }}
        className="namedd"
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Escribí aquí tu mail"
        required
        minLength="3"
      />
      <br />
      <label htmlFor="mail">
        <p> Email: </p>
      </label>
      <br />
      <input
        style={{ gridArea: 'mail', height: '20px' }}
        type="email"
        id="mail"
        name="mail"
        placeholder="Escribí aquí tu nombre"
        required
      />
      <br />
      <br />
      <label htmlFor="opinión"></label>
      <textarea
        style={{ gap: '40px' }}
        className="active2"
        id="opinión"
        placeholder="Escribí tu opinión"
        name="opinión"
        rows="50"
        cols="50"
      ></textarea>{' '}
      <br />
      <a className="punto" href="mailto:janedoe@micorreo.com">
        <input
          style={{ gridArea: 'boton' }}
          type="submit"
          href="mailto:turbinoarrogante@gmail.com"
          value="Enviar datos"
        />
      </a>
      <br />
</div>
    </div>
  )
}
