/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  const setE = (e) => {
    setEmail(e);
  };

  const setP = (e) => {
    setPassword(e);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        submit,
        setE,
        setP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuth };