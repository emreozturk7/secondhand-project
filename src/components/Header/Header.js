import React from 'react';
import './header.css';
import SecondHandLogo from '../../constants/icons/secondHandLogo';
import AddIcon from '../../constants/icons/addIcon';
import PersonIcon from '../../constants/icons/personIcon';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div id="header-container" className='header-wrapper'>
        <div className='header-logo'>
          <Link to="/"><SecondHandLogo /></Link>
        </div>
        {
          localStorage.getItem('token')
            // if user is login:
            ? <div className="header-btn">
              <Link to="/addproduct" className='button-type'><AddIcon />Ürün Ekle</Link>
              <Link to="/myaccount" className='button-type'><PersonIcon /> Hesabım</Link>
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