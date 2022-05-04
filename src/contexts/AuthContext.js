import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

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

  const changeEmail = (data) => {
    setEmail(data);
  };

  const changePassword = (data) => {
    setPassword(data);
  };

  return (
    <AuthContext.Provider
      value={{
        submit,
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