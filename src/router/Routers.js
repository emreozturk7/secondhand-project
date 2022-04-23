import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/ChallengePage';
import Register from '../pages/FirstPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Router;