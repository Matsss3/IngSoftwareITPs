import React from 'react'

export const Listado = ({ articulos, setArticulos }) => {
  return (
    articulos.map(articulo => {
        return (
            <article key={articulo._id}>
                <h3>{articulo.titulo}</h3>
                <p>{articulo.contenido}</p>

                <button>Editar</button>
                <button>Borrar</button>
            </article>
        );
    })
  )
}

