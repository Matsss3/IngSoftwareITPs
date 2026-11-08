import { useEffect } from "react";

const MensajeConsola = () => {
  useEffect(() => {
    console.log("El componente se ha renderizado");
  }, []);

  return (
    <div>
      <h2>Mensaje en Consola (useEffect)</h2>
      <p>Revisa la consola del navegador para ver el mensaje</p>
    </div>
  );
};

export default MensajeConsola;
