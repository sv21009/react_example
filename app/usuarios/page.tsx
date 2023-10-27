'use client';

//import useLocalStorage from '@/hooks/useLocalStorage';
import customAxios from '@/app/utils/customAxios';
import axios, { AxiosResponse, isAxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface IUsuarioEntity {
    id: number;
    nombre: string;
    edad: number;
}

interface IUpdateUsuarioResponse {
    message: string;
    data: IUsuarioEntity;
}

const ObtenerUsuarios = () => {
    const [users, setUsers] = useState<IUsuarioEntity[]>([]);

    const getUsuario = async () => {
        try {
            const response = await customAxios.get<IUsuarioEntity>('/usuario/1');
            console.log('Usuario con id 1:', response.data)
            setUsers((prevUsers) => [...prevUsers, response.data]);
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
                console.log('Otro error', error)
            }
        }
    }

    const getAllUsuarios = async () => {
        try {
            const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
            console.log('Usuarios:', response.data)
            setUsers(response.data);
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
            console.log('Otro error', error)
            }
        }
    }

    const deleteUsuario = async () => {
        try {
            const response = await customAxios.delete<IUpdateUsuarioResponse>('/usuario/1');
            console.log('Message:', response.data.message);
            console.log('Data:', response.data.data);
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
                console.log('Otro error', error)
            }
        }
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Peticiones a API</h1>
            <h2 className='text-lg font-bold'>Metodos HTTP</h2>

            <div className='flex flex-row gap-2'>
                <button title='Endpoint leer un solo usuario' onClick={getUsuario}>GET 1</button>
                <button title='Endpoint leer todos los usuarios' onClick={getAllUsuarios}>GET 2</button>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.edad}</td>
                        <td>
                            <button><Link className='enlace' key = {user.id} href={`/usuarios`}></Link></button>
                            <button onClick={() => deleteUsuario()}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default ObtenerUsuarios