import Link from 'next/link'
import React, { ReactNode } from 'react'

interface IExampleLayoutProps {
  children: ReactNode
}

const ExamplesLayout = ({children}:IExampleLayoutProps) => {
  return (
    <div className='flex flex-row gap-4'>
      <div className='border border-gray-300 rounded-md h-fit self-start overflow-hidden'>
        <Link href={'/examples'}>
          <div className='p-2 hover:bg-blue-400 hover:text-white border-b border-gray-300'>
            Inicio
          </div>
        </Link>
        <Link href={'/examples/1'}>
          
          <div className='p-2 hover:bg-blue-400 hover:text-white'>
            Ejemplo 1: Renderizar lista de objetos
          </div>
        </Link>
      </div>
      <div className='flex-1 border border-gray-300 rounded-md p-2'>
        {children}
      </div>
    </div>
  )
}

export default ExamplesLayout