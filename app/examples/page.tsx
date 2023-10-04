import React from 'react'
import { Metadata } from 'next'
import { css } from "tailwindcss";


export const metadata: Metadata = {
  title: 'Ejemplos',
  description: 'Aqui se encuentran todos los ejemplos',
}


const ExamplesHome = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Ejemplos</h1>
      <p>Esta seccion del sitio web esta destinada a alojar ejemplos en react.</p>
    </div>
  )
}

export default ExamplesHome