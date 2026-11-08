import { useState } from "react";
import Props from "./components/Props";
import Contador from "./components/Contador";
import Controles from "./components/Controles";
import InputTexto from "./components/InputTexto";
import Formulario from "./components/Formulario";
import MensajeCondicional from "./components/MensajeCondicional";
import Sesion from "./components/Sesion";
import MensajeConsola from "./components/MensajeConsola";
import ContadorEfecto from "./components/ContadorEfecto";
import ConsumoApi from "./components/ConsumoApi";

const nombre = "Juan";
const apellidos = "Perez";

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <Props nombre={nombre} apellidos={apellidos} />
      <hr />

      <Contador contador={contador} />
      <Controles setContador={setContador} />
      <hr />
      <InputTexto />
      <hr />
      <Formulario />
      <hr />

      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ContadorEfecto />
      <hr />

      <ConsumoApi />
    </>
  );
};

export default App;
