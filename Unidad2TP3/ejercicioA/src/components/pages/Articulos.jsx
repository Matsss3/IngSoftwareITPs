import React from 'react'
import { useState, useEffect } from "react"
import { Listado } from './Listado';

export const Articulos = () => {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        let data = [
            {
                _id: 1,
                titulo: "Titulo 1",
                contenido: "Contenido"
            },
            {
                _id: 2,
                titulo: "Titulo 2",
                contenido: "Contenido"
            },
            {
                _id: 3,
                titulo: "Titulo 3",
                contenido: "Contenido"
            },
        ];

        setArticulos(data);
    }, [])

  return (
    <>
        {articulos.length > 0 ? 
            <Listado articulos={articulos} setArticulos={setArticulos}/> 
            : <h1>No hay artículos</h1>
        }
    </>
  )
}

