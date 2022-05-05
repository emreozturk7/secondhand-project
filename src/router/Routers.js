import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import MyAccount from '../pages/myaccount/MyAccount';
import AddProduct from '../pages/addproduct/AddProduct';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="myaccount" element={<MyAccount />} />
      <Route path="addproduct" element={<AddProduct />} />
    </Routes>
  );
}

export default Router;