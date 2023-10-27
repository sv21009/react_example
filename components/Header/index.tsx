import Link from 'next/link'
import React from 'react'
import {Rutas} from '@/app/utils/constants'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-sv21009-primary-color text-white'>
      <Link href={'/'} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={Rutas.Inicio}>Inicio</Link>
        <Link href={Rutas.Ejemplos}>Ejemplos</Link>
        <Link href={Rutas.Grid}>Grid</Link>
        <Link href={Rutas.Usuarios}>Usuarios</Link>
        <Link href={Rutas.Login}>Login</Link>

      </div>
    </div>
  )
}

export default Header


