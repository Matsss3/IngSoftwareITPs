const Controles = ({ setContador }) => {
  return (
    <div>
      <h2>Controles</h2>
      <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
      <button onClick={() => setContador((prev) => prev - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Limpiar</button>
    </div>
  );
};

export default Controles;
