import { useState, useEffect } from "react";

const ConsumoApi = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const json = await response.json();
      setData(json);
    } catch (error) {
      setData({ error: "Ocurrió un error al obtener los datos" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Consumo de API</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ConsumoApi;
