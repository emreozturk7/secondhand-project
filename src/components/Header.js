import React, { useEffect } from 'react';
import './header.css';
import axios from '../constants/axios';
import SecondHandLogo from '../constants/icons/secondHandLogo';
import AddIcon from '../constants/icons/addIcon';
import PersonIcon from '../constants/icons/personIcon';


function Header() {

  useEffect(() => {
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        console.log('deneme');
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }, []);

  return (
    <>
      <div id="header-container" className='header-wrapper'>
        <div className='header-logo'>
          <SecondHandLogo />
        </div>
        {
          localStorage.getItem('token')
            // if user is login:
            ? <div className="header-btn">
              <button ><AddIcon />Ürün Ekle</button>
              <button ><PersonIcon /> Hesabım</button>
            </div>
            // else:
            : <div className="header-btn">
              <button><PersonIcon /> Giriş Yap</button>
            </div>
        }
      </div>
    </>
  );
}

export default Header;