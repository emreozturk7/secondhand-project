import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Router from './router/Routers';

function App() {

  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
