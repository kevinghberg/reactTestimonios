import React from "react";
import '../css/Testimonio.css';


export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../img/testimonio-${props.imagen}.jpg`)}
        alt='Foto' />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} at <b>{props.empresa}</b></p>
        <p className="texto-testimonio"> "{props.testimonio}"" </p>
      </div>
    </div>
  );
}


// TAMBIEN SE PUEDE EXPORTARE CON > EXPORT DEFAULT TESTIMONIO;; 