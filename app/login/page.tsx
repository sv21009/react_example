'use client';

import React, { useEffect, useState } from 'react'
import useAuthentication from '@/hooks/useAuthentication';
import axios, { AxiosResponse, isAxiosError } from 'axios';

interface ILoginResponse {
  token: string;
}
  
interface ILoginBody {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [persistAuthentication, retrieveAuthentication, deleteAuthentication] = useAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(
    () => {
      const login = async () => {
        try {
          const response = await axios.post<ILoginResponse, AxiosResponse<ILoginResponse>, ILoginBody>('http://localhost:3000/login', {
            username: 'ql17001@ues.edu.sv',
            password: '123456'
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          });
          
          persistAuthentication(response.data);

          console.log('Se inicio sesion correctamente.')
        } catch (error) {
          if(isAxiosError(error)){
            console.log('Error de axios', error);
          }else{
            console.log('Otro tipo de error', error);
          }
        }
      }

      login();
    }, [persistAuthentication]
  )


  return (
    <div>
        <h3>Iniciar sesión</h3>
        <input className = 'flex flex-row gap-4 items-center mb-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className = 'flex flex-row gap-4 items-center mb-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={LoginPage}>Iniciar sesión</button>    
    </div>
  );
};

export default LoginPage;