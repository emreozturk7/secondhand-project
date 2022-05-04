import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Router from './router/Routers';

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
