import React from 'react'

export const Sidebar = () => {
  return (
      <aside>
        <div>
          <h3>Buscador</h3>
          <form>
            <input type="text" id='search_field' />
            <button id='search'>Buscar</button>
          </form>
        </div>

        {/* <div> */}
        {/*     <h3>Añadir Artículo</h3> */}
        {/*     <form> */}
        {/*         <input type="text" id='title' placeholder='Título' /> */}
        {/*         <textarea id='description' placeholder='Descripción'></textarea> */}
        {/*         <input type="submit" id='save' value='Guardar' /> */}
        {/*     </form> */}
        {/* </div> */}
      </aside>
  )
}

