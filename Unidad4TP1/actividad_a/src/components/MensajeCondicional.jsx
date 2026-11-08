import { useState } from "react";

const MensajeCondicional = () => {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <h2>Mensaje Condicional</h2>
      <input
        type="text"
        value={mensaje}
        placeholder="Escribe un mensaje..."
        onChange={(e) => setMensaje(e.target.value)}
      />
      {mensaje ? <p>Tu mensaje es: {mensaje}</p> : <p>No hay ningún mensaje aún</p>}
      {mensaje && (<button onClick={() => alert(`Mensaje enviado: ${mensaje}`)}>Enviar</button>)}
    </div>
  );
};

export default MensajeCondicional;
