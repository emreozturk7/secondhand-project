import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import Router from './router/Routers';

function App() {

  return (
    <>
      <AuthProvider>
        <Layout>
          <Router />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
