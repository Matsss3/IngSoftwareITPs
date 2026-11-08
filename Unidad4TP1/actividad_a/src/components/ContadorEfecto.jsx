import { useState, useEffect } from "react";

const ContadorEfecto = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Valor del contador:", contador);
  }, [contador]);

  return (
    <div>
      <h2>Contador con Efecto</h2>
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador((prev) => prev + 2)}>
        Incrementar de 2 en 2
      </button>
    </div>
  );
};

export default ContadorEfecto;
