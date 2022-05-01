/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable indent */
import React, { useState } from 'react';
import '../style/login-register.css';
import LoginRegisterImage from '../../constants/images/login-register.png';
import SecondHandLogo from '../../constants/icons/secondHandLogo';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { LoginScheme } from '../../constants/schema/yupSchema';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const notify = () => toast.error('Error');
  return (
    <div className='login-container'>
      <img src={LoginRegisterImage} className='login-register-image' />

      <div className='login-area'>
        <div className='logo'>
          <SecondHandLogo />
        </div>

        <div className='login-area-container'>
          <p className='sign-in-title'>Giriş Yap</p>
          <p className='sign-in-subtitle'>Fırsatlardan yararlanmak için giriş yap!</p>

          <Formik initialValues={{
            email: '',
            password: '',
          }}
            onSubmit={(auth) => {
              console.log(auth);
            }}
            validationSchema={LoginScheme}
          >
            {
              ({ values, handleChange, handleSubmit, errors }) =>
                <form className='sign-in-form'>

                  <div onSubmit={handleSubmit}>
                    {
                      errors != null && notify()
                    }
                    <div className='sign-in-email-container'>
                      <div className='input-name'>Email</div>
                      <input type="email" placeholder='Email@example.com' className='input-box' onChange={handleChange} value={values.email} />
                    </div>
                    <div className='sign-in-password-container'>
                      <div className='input-name'>Şifre</div>
                      <input type="password" placeholder='Şifreni gir' className='input-box' onChange={handleChange} value={values.password} />
                    </div>
                  </div>
                  <p className='forgot-password'>Şifremi Unuttum</p>
                  <button className='login-button'>Giriş</button>
                  <p className='dont-have-account'>Hesabın yok mu?
                    <Link to="/register">
                      <span className='register-router-button'> Üye Ol</span>
                    </Link>
                  </p>
                </form>
            }
          </Formik>

        </div>

      </div>

    </div>
  );
}

export default Login;