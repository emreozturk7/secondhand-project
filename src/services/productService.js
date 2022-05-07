import axios, { URL } from '../constants/axios';

export const getAllProducts = async () => {
  axios.get(URL.products)
    .then((response) => {
      console.log(response.data);
    });
};
