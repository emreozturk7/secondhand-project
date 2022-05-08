import React from 'react';
import './header.css';
import AddIcon from '../../constants/icons/addIcon';
import PersonIcon from '../../constants/icons/personIcon';
import { Link } from 'react-router-dom';
import SecondHandLogo from './HeaderLogo.svg';


function Header() {
  return (
    <>
      <div id="header-container" className='header-wrapper'>
        <div className='header-logo'>
          <Link to="/"><img src={SecondHandLogo} alt="" /></Link>
        </div>
        {
          localStorage.getItem('auth_token')
            ? <div className="header-btn">
              <Link to="/addproduct" className='button-type'><AddIcon /> Ürün Ekle</Link>
              <Link to="/myaccount" className='button-type'><PersonIcon /> Hesabım</Link>
            </div>
            : <div className="header-btn">
              <Link to="/login" className='button-type'><PersonIcon /> Giriş Yap</Link>
            </div>
        }
      </div>
    </>
  );
}

export default Header;