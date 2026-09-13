import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'


export const Crear = () => {
    const {formulario, enviado, cambiado} = useForm({})
    
    const guardarArticulo = (e) => {
        e.preventDefault();
        let nuevoArticulo = JSON.stringify(formulario);

        console.log(nuevoArticulo);
    }

  return (
    <div>
        <h1>Crear artículo</h1>
        <p>Formulario para crear un artículo</p>

        <form onSubmit={guardarArticulo}>
            <div>
                <label htmlFor='titulo'>Titulo</label>
                <input type="text" name="titulo" onChange={cambiado} />
            </div>

            <div>
                <label htmlFor='contenido'>Contenido</label>
                <textarea name="contenido" onChange={cambiado} />
            </div>

            <div>
                <label htmlFor='file0'>Imagen</label>
                <input type="file" name="file0" id='file' />
            </div>

            <input type="submit" value="Guardar" />
        </form>

    </div>
  )
}

