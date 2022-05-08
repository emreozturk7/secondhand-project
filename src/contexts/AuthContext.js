import React, { useContext, useState, createContext } from 'react';
import { login, register } from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    login(data.email, data.password);
    window.location.href = '/';
  };

  const submitRegister = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    register(data.email, data.password);
    window.location.href = '/';
  };

  const changeEmail = (data) => {
    setEmail(data);
  };

  const changePassword = (data) => {
    setPassword(data);
  };

  return (
    <AuthContext.Provider
      value={{
        submitLogin,
        submitRegister,
        email,
        password,
        changeEmail,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth, AuthContext };