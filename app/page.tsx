import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl font-bold'>Bienvenidos a la aplicacion react_example</h1>
      <p>El objetivo de la aplicacion es mostrar el uso de React, componentes, App Router y hooks.</p>
    </main>
  )
}
