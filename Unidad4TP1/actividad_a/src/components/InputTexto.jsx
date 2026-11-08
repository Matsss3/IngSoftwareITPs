import { useState } from "react";

const InputTexto = () => {
  const [texto, setTexto] = useState("");

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <h2>Input Texto</h2>
      <input
        type="text"
        value={texto}
        onChange={manejarCambio}
        placeholder="Escribe algo..."
      />
      <p>Has escrito: {texto}</p>
    </div>
  );
};

export default InputTexto;
