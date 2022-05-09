import React, { useContext, useState, createContext, useEffect } from 'react';
import { login, register } from '../services/authService';
import axios from '../constants/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [usingStatus, setUsingStatus] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getCategory();
    getColors();
    getUsingStatus();
    getBrands();

    setType();
  }, []);

  const submitLogin = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    login(data.email, data.password);
  };

  const submitRegister = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    register(data.email, data.password);
  };

  const changeEmail = (data) => {
    setEmail(data);
  };

  const changePassword = (data) => {
    setPassword(data);
  };

  const setType = () => {
    let array = [];
    array.push(categories.map((item) => item.name));

    let array2 = [];
    array2.push(colors.map((item) => item.name));

    let array3 = [];
    array3.push(usingStatus.map((item) => item.name));

    let array4 = [];
    array4.push(brands.map((item) => item.name));

    setCategories(array);
    setColors(array2);
    setUsingStatus(array3);
    setBrands(array4);
  };

  const getCategory = () => {
    (
      async () => {

        await axios.get('https://bootcamp.akbolat.net/categories')
          .then(res => {
            setCategories(res.data);
          }).catch(err => {
            console.log('Hata: ', err);
          });
      }
    )();
  };

  const getColors = () => {
    (
      async () => {

        await axios.get('https://bootcamp.akbolat.net/colors')
          .then(res => {
            setColors(res.data);
          }).catch(err => {
            console.log('Hata: ', err);
          });
      }
    )();
  };

  const getUsingStatus = () => {
    (
      async () => {

        await axios.get('https://bootcamp.akbolat.net/using-statuses')
          .then(res => {
            setUsingStatus(res.data);
          }).catch(err => {
            console.log('Hata: ', err);
          });
      }
    )();
  };

  const getBrands = () => {
    (
      async () => {

        await axios.get('https://bootcamp.akbolat.net/brands')
          .then(res => {
            setBrands(res.data);
          }).catch(err => {
            console.log('Hata: ', err);
          });
      }
    )();
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
        categories,
        colors,
        usingStatus,
        brands,
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