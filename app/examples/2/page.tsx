'use client';
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image';

type TRoles = 'Client' | 'Admin';

const Example2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [terms, setTerms] = useState(false)
  const [foto, setFoto] = useState('')
  const [ID, setID] = useState('')

  interface Usuario {
    ID: string;
    firstName: string;
    lastName: string;
    foto: string;
    role: 'Admin' | 'Client';
  }

  const [users, setUsers] = useState<Usuario[]>([])
  
  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  }

  const handleIDOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setID(event.currentTarget.value)
  }

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  }

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  }

  const handleFotoOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFoto(event.currentTarget.value)
  }

  const handleGuardarOnClick = () => {
    
    setUsers([...users, {firstName, lastName, ID, role, foto}])

    console.log('--------------')
    console.log('Nombre:', firstName)
    console.log('Apellido:', lastName)
    console.log('ID:', ID)
    console.log('Rol:', role)
    console.log(terms ? 'Acepto los terminos'  : 'No acepto los terminos')
    console.log('Foto (unsplash):', foto)
    console.log('--------------')

  }
  const ListaUsuarios = () => {
    return(
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-2xl font-bold'>Lista de usuarios</h1>
        {
          users.map(
            (users, index) => {
              return (
                <div key = {users.ID} className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
                  <div className=' aspect-square w-32'>
                    <Image width={128} height={128} className=' object-cover w-full h-full' src={users.foto} alt={`User photo of ${users.firstName} ${users.lastName}`} />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <span><span className='font-bold'>Nombre:</span> {users.firstName}</span>
                    <span><span className='font-bold'>Apellido:</span> {users.lastName}</span>
                    <span><span className='font-bold'>Rol:</span> {users.role}</span>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    )
  }

  
  return (
    <div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="id">ID:</label>
        <input onChange={handleIDOnChange} id='ID' type="number" value={ID} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="foto">Foto (unsplash):</label>
        <input onChange={handleFotoOnChange} id='foto' type="url" value={foto} />
      </div>

      <div  className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms}/>
      </div>

      <button onClick={handleGuardarOnClick}>Guardar</button>

      <ListaUsuarios />


    </div>
  )
}

export default Example2