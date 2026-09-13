import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
        <h1>Ejercicio A</h1>
        <p>Extracto del video tutorial adjunto en el trabajo práctico 3</p>
        <Link to="/articulos">Ver los artículos</Link>
    </div>
  )
}

