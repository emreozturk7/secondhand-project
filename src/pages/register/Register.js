import React from 'react';
import '../style/login-register.css';
import LoginRegisterImage from '../../constants/images/login-register.png';
import SecondHandLogo from '../../constants/icons/secondHandLogo';
import { Link } from 'react-router-dom';



function Register() {
  return (
    <div className='login-container'>
      <img src={LoginRegisterImage} className='login-register-image' />

      <div className='login-area'>
        <div className='logo'>
          <SecondHandLogo />
        </div>

        <div className='login-area-container'>
          <p className='sign-in-title'>Üye Ol</p>
          <p className='sign-in-subtitle'>Fırsatlardan yararlanmak için üye ol!</p>
          <form className='sign-in-form'>
            <div className='sign-in-email-container'>
              <div className='input-name'>Email</div>
              <input type="email" placeholder='Email@example.com' className='input-box' />
            </div>
            <div className='sign-in-password-container'>
              <div className='input-name'>Şifre</div>
              <input type="password" placeholder='Şifreni gir' className='input-box' />
            </div>
          </form>
          <button className='login-button'>Üye Ol</button>
          <p className='dont-have-account'>Hesabın var mı?
            <Link to="/login">
              <span className='register-router-button' onClick={() => { }}> Giriş Yap</span>
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Register;