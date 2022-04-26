import React from 'react';
import './login.css';
import LoginRegisterImage from '../../constants/images/login-register.png';
import Logo from '../../constants/images/secondhand-logo.png';


function Login() {
  return (
    <div className='login-container'>
      <img src={LoginRegisterImage} className='login-register-image' />

      <div className='login-area'>
        <img src={Logo} className='logo' />

        <div className='login-area-container'>
          <p className='sign-in-title'>Giriş Yap</p>
          <p className='sign-in-subtitle'>Fırsatlardan yararlanmak için giriş yap!</p>
          <form className='sign-in-form'>
            <div className='sign-in-email-container'>
              <div className='input-name'>Email</div>
              <input type="text" placeholder='Email@example.com' className='input-box' />
            </div>
            <div className='sign-in-password-container'>
              <div className='input-name'>Şifre</div>
              <input type="text" placeholder='Şifreni gir' className='input-box' />
            </div>
          </form>
          <p className='forgot-password'>Şifremi Unuttum</p>
          <button className='login-button'>Giriş</button>
          <p className='dont-have-account'>Hesabın yok mu? <span>Üye Ol</span></p>
        </div>

      </div>

    </div>
  );
}

export default Login;