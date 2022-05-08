import axios, { URL } from '../constants/axios';

export const register = async (email, password) => {
  axios.post(URL.register, {
    username: email,
    email: email,
    password: password,
  })
    .then((response) => {
      console.log('Well Done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      localStorage.setItem('auth_token', document.cookie);
      localStorage.setItem('email', email);
    })
    .catch((error) => {
      console.log('An error occured:', error.response);
    });
};

export const login = async (email, password) => {
  axios.post(URL.login, {
    identifier: email,
    password: password,
  }).then((response) => {
    console.log('User login successfully: ', response.data.jwt);
    localStorage.setItem('auth_token', document.cookie);
    localStorage.setItem('email', email);
  })
    .catch((error) => {
      console.log('An error occured: ', error.response);
    });
};