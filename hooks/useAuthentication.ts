import { useState } from 'react';

const useAuthentication = () => {
  // Función para persistir la autenticación en el localStorage
  const persistAuthentication = (authenticationData: {token : string}) => {
    localStorage.setItem('authentication', JSON.stringify(authenticationData));
  };

  // Función para recuperar la autenticación desde el localStorage
  const retrieveAuthentication = () => {
    const authenticationData = localStorage.getItem('authentication');
    return authenticationData ? JSON.parse(authenticationData) : null;
  };

  // Función para eliminar la autenticación del localStorage
  const deleteAuthentication = () => {
    localStorage.removeItem('authentication');
  };

  return [persistAuthentication, retrieveAuthentication, deleteAuthentication];
};

export default useAuthentication;
