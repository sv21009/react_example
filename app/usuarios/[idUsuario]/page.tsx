'use client';

import React, { useState, useEffect } from "react";
import customAxios from "@/app/utils/customAxios";
import axios, { AxiosResponse, isAxiosError } from 'axios'

interface IUser {
  id: number;
  name: string;
  age: number;
}

const UserDetailsPage = ({ usuarioId }: { usuarioId: string }) => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);

    const CargarUsuario = async () => {
        try {
            const response = await customAxios.get<IUser>(`/usuarios/${usuarioId}`);
            const userData = response.data;
            setNombre(userData.name);
            setEdad(userData.age);
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
                console.log('Otro error', error)
            }
        }
    };

    useEffect(() => {
        if (usuarioId) {
            CargarUsuario();
        }
    }, [usuarioId]);

    const handleUpdateUser = async () => {
    const confirmacion = window.confirm("¿Está seguro de editar el usuario?");

    if (confirmacion) {
      try {
        await customAxios.put(`/usuario/${usuarioId}`, {
          nombre,
          edad,
        });
            console.error("Se ha actualizado el usuario");
      } catch (error) {
            console.error("Error al actualizar el usuario:", error);
      }
    }
  };

  return (
    <div>
        <h3>Editar usuario</h3>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input type="number" value={edad} onChange={(e) => setEdad(parseInt(e.target.value))}/>
        <button onClick={handleUpdateUser}>Editar</button>
    </div>
  );
};

export default UserDetailsPage;
