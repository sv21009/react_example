import React from 'react'
import colors from 'tailwindcss/colors'

const BotonEliminar = () => {
    return(
        <button type = 'button' className = 'boton-eliminar' style = {{backgroundColor: colors.red['500'], color: colors.white, fontWeight: "bold"}}>
        
            Eliminar
        
        </button>
    )
}

export default BotonEliminar