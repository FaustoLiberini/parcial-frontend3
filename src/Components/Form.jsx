import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    colorFavorito: ""
  });

  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cliente.nombre.trim().length >= 3 && cliente.apellido.length >= 6 && cliente.colorFavorito.length > 2) {
      setMostrarInfo(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={cliente.nombre} onChange={(event) =>
            setCliente({ ...cliente, nombre: event.target.value })
          }
        />
        <label>Apellido:</label>
        <input type="text" value={cliente.apellido}onChange={(event) =>
            setCliente({ ...cliente, apellido: event.target.value })
          }
        />
        <label>Color Favorito:</label>
        <input type="text" value={cliente.colorFavorito} onChange={(event) =>
            setCliente({ ...cliente, colorFavorito: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {mostrarInfo && <Card cliente={cliente} />}
      {error && <h2>"Por favor chequea que la información sea correcta"</h2>}
    </div>
  );
};

export default Form;