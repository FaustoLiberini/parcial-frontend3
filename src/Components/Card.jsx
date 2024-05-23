import React from 'react';

const Card = ({ cliente }) => {
  const { nombre, apellido, colorFavorito } = cliente;
  return (
    <div>
      <h4>Nombre: {nombre}</h4>
      <h4>Apellido: {apellido}</h4>
      <h4>El color favorito de "{nombre} {apellido}" es el "{colorFavorito}"</h4>
    </div>
  );
};

export default Card;